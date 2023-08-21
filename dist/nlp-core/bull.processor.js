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
exports.SaveRecordToDatabase = void 0;
const bull_1 = require("@nestjs/bull");
const typeorm_1 = require("@nestjs/typeorm");
const messages_entity_1 = require("../entities/messages.entity");
const typeorm_2 = require("typeorm");
let SaveRecordToDatabase = exports.SaveRecordToDatabase = class SaveRecordToDatabase {
    constructor(messagesRepository) {
        this.messagesRepository = messagesRepository;
    }
    async saveRecords(job) {
        try {
            const { messages, type, conversation } = job.data;
            const createMessages = new messages_entity_1.Messages();
            createMessages.conversation = conversation;
            createMessages.messages = messages;
            createMessages.type = type;
            await this.messagesRepository.save(createMessages);
        }
        catch (error) {
            console.log('Record not added sucessfully', error);
        }
    }
    async saveBotResponse(job) {
        try {
            const { messages, type, conversation } = job.data;
            const createMessages = new messages_entity_1.Messages();
            createMessages.conversation = conversation;
            createMessages.messages = messages;
            createMessages.type = type;
            await this.messagesRepository.save(createMessages);
        }
        catch (error) {
            console.log('Record not added sucessfully', error);
        }
    }
};
__decorate([
    (0, bull_1.Process)('saveConversationToDataBase'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SaveRecordToDatabase.prototype, "saveRecords", null);
__decorate([
    (0, bull_1.Process)('saveBotResponseToDatabase'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SaveRecordToDatabase.prototype, "saveBotResponse", null);
exports.SaveRecordToDatabase = SaveRecordToDatabase = __decorate([
    (0, bull_1.Processor)('messages'),
    __param(0, (0, typeorm_1.InjectRepository)(messages_entity_1.Messages)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SaveRecordToDatabase);
//# sourceMappingURL=bull.processor.js.map