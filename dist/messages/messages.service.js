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
exports.MessagesService = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const redis_1 = require("../Redis/redis");
const bot_entity_1 = require("../entities/bot.entity");
const conversation_entity_1 = require("../entities/conversation.entity");
const typeorm_2 = require("typeorm");
let MessagesService = exports.MessagesService = class MessagesService {
    constructor(repositoryConversation, repositoryBot, redisService, messageQueue) {
        this.repositoryConversation = repositoryConversation;
        this.repositoryBot = repositoryBot;
        this.redisService = redisService;
        this.messageQueue = messageQueue;
    }
};
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(conversation_entity_1.Conversation)),
    __param(1, (0, typeorm_1.InjectRepository)(bot_entity_1.default)),
    __param(3, (0, bull_1.InjectQueue)('messages')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        redis_1.RedisService, Object])
], MessagesService);
//# sourceMappingURL=messages.service.js.map