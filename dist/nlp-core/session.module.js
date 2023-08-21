"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const conversation_entity_1 = require("../entities/conversation.entity");
const bot_entity_1 = require("../entities/bot.entity");
const messages_entity_1 = require("../entities/messages.entity");
const bull_1 = require("@nestjs/bull");
const session_service_1 = require("./session.service");
const session_controller_1 = require("./session.controller");
const redis_1 = require("../Redis/redis");
const bull_processor_1 = require("./bull.processor");
let SessionModule = exports.SessionModule = class SessionModule {
};
exports.SessionModule = SessionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([conversation_entity_1.Conversation, bot_entity_1.default, messages_entity_1.Messages]),
            bull_1.BullModule.registerQueue({ name: 'messages' }),
        ],
        controllers: [session_controller_1.SessionController],
        providers: [session_service_1.SessionService, redis_1.RedisService, bull_processor_1.SaveRecordToDatabase],
    })
], SessionModule);
//# sourceMappingURL=session.module.js.map