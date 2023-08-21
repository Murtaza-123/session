"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("axios");
const redis_1 = require("../Redis/redis");
const bot_entity_1 = require("../entities/bot.entity");
const conversation_entity_1 = require("../entities/conversation.entity");
const typeorm_2 = require("typeorm");
let SessionService = exports.SessionService = class SessionService {
    constructor(repositoryConversation, repositoryBot, redisService, messageQueue) {
        this.repositoryConversation = repositoryConversation;
        this.repositoryBot = repositoryBot;
        this.redisService = redisService;
        this.messageQueue = messageQueue;
    }
    async startCall(req, createDto) {
        try {
            const { call_id } = req.body;
            const parseCallId = call_id.toString();
            const callIdExist = await this.redisService.get(parseCallId);
            if (callIdExist) {
                console.log(parseCallId);
                return 'Call already started';
            }
            const { bot_no } = req.body;
            const bot = await this.repositoryBot
                .createQueryBuilder('bot')
                .where('FIND_IN_SET(:bot_no, bot.bot_no)')
                .setParameter('bot_no', bot_no)
                .andWhere('1=1')
                .getOne();
            const createConversation = new conversation_entity_1.Conversation();
            createConversation.call_id = call_id;
            createConversation.bot = bot;
            await this.repositoryConversation.save(createConversation);
            await this.redisService.set(`call_id:${parseCallId}`, '1');
            await this.redisService.set('bot_no', bot_no);
            const conversation = await this.repositoryConversation.findOne({
                where: { call_id },
            });
            const parsedConversation = JSON.stringify(conversation);
            await this.redisService.set('conversationId', parsedConversation);
            if (bot && bot.Host) {
                await this.redisService.set('getURL', bot.Host);
                const response = await axios_1.default.post(bot.Host, createDto);
                console.log(response.data);
                return response.data;
            }
        }
        catch (error) {
            console.error('Error starting the call:', error);
            throw new Error('An unexpected error occurred while starting the call.');
        }
    }
    async handleClientMessage(req, messageDto) {
        try {
            const { call_id } = req.body;
            const parseCallId = call_id.toString();
            const callIdExist = await this.redisService.get("call_id:" + parseCallId);
            console.log(callIdExist);
            if (!callIdExist) {
                return "call ended";
            }
            else {
                const messages = req.body.messages;
                const type = req.body.type;
                const URL = await this.redisService.get('getURL');
                if (URL) {
                    const conversationId = await this.redisService.get('conversationId');
                    const conversation = JSON.parse(conversationId);
                    await this.messageQueue.add('saveConversationToDataBase', {
                        messages,
                        type,
                        conversation,
                    });
                    const response = await axios_1.default.post(URL, messageDto);
                    console.log(response.data);
                    return response.data;
                }
            }
        }
        catch (error) {
            console.error('Conversation not started:', error);
            throw new Error('An unexpected error occurred while starting the conversation.');
        }
    }
    async sendBotResponseToClient(req, messageDto) {
        try {
            const { call_id } = req.body;
            const parseCallId = call_id.toString();
            const callIdExist = await this.redisService.get("call_id:" + parseCallId);
            console.log(callIdExist);
            if (!callIdExist) {
                return 'Call Ended';
            }
            const url = await this.redisService.get('getURL');
            if (url) {
                const id = await this.redisService.get('conversationId');
                const conversation = JSON.parse(id);
                const response = await axios_1.default.post(url, messageDto);
                const { type } = req.body;
                const messages = response.data;
                await this.messageQueue.add('saveBotResponseToDatabase', {
                    type,
                    messages,
                    conversation,
                });
                return response.data;
            }
        }
        catch (error) {
            console.error('Conversation not started.');
            throw new Error('An unexpected error occurred while starting the conversation');
        }
    }
    async endCall(call_id) {
        const conversation = await this.repositoryConversation.findOne({
            where: { call_id: call_id },
        });
        const deleteCall = call_id.toString();
        await this.redisService.delete("call_id:" + deleteCall);
        if (!conversation) {
            throw new Error(`Conversation with id ${call_id} not found.`);
        }
        const currentTime = new Date();
        const startTime = conversation.StartTime;
        const durationInMilliseconds = currentTime.getTime() - startTime.getTime();
        const durationInSeconds = Math.floor(durationInMilliseconds / 1000);
        conversation.EndTime = currentTime.toISOString();
        conversation.Call_Duration = durationInSeconds;
        return this.repositoryConversation.save(conversation);
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SessionService.prototype, "endCall", null);
exports.SessionService = SessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(conversation_entity_1.Conversation)),
    __param(1, (0, typeorm_1.InjectRepository)(bot_entity_1.Bot)),
    __param(3, (0, bull_1.InjectQueue)('messages')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        redis_1.RedisService, Object])
], SessionService);
//# sourceMappingURL=session.service.js.map