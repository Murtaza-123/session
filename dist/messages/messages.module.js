"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesModule = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const messages_controller_1 = require("./messages.controller");
const typeorm_1 = require("@nestjs/typeorm");
const messages_entity_1 = require("../entities/messages.entity");
const conversation_entity_1 = require("../entities/conversation.entity");
const bot_entity_1 = require("../entities/bot.entity");
const redis_1 = require("../Redis/redis");
const bull_1 = require("@nestjs/bull");
let MessagesModule = exports.MessagesModule = class MessagesModule {
};
exports.MessagesModule = MessagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([messages_entity_1.Messages, conversation_entity_1.Conversation, bot_entity_1.default]),
            bull_1.BullModule.registerQueue({ name: 'messages' }),
        ],
        providers: [redis_1.RedisService, messages_service_1.MessagesService],
        controllers: [messages_controller_1.MessagesController],
    })
], MessagesModule);
//# sourceMappingURL=messages.module.js.map