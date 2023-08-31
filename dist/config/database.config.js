"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmConfig = exports.TypeOrmOptions = void 0;
const bot_entity_1 = require("../entities/bot.entity");
const conversation_entity_1 = require("../entities/conversation.entity");
const messages_entity_1 = require("../entities/messages.entity");
exports.TypeOrmOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'CallRecords',
    entities: [conversation_entity_1.Conversation, messages_entity_1.Messages, bot_entity_1.default],
    synchronize: false,
};
exports.OrmConfig = {
    ...exports.TypeOrmOptions,
    migrations: ['/home/murtaza/Documents/session/src/database/*.ts'],
    cli: {
        migrationsDir: 'src/database',
    },
};
//# sourceMappingURL=database.config.js.map