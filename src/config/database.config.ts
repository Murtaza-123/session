import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import Bot from '../entities/bot.entity';
import { Conversation } from '../entities/conversation.entity';
import { Messages } from '../entities/messages.entity';

export const TypeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'CallRecords',
  entities: [Conversation , Messages , Bot],
  synchronize: false,
};

export const OrmConfig = {
  ...TypeOrmOptions,
  migrations: ['/home/murtaza/Documents/nlp-core/src/database/*.ts'], 
  cli: {
    "migrationsDir": "src/database"
}
};


