import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from 'src/entities/conversation.entity';
import Bot from 'src/entities/bot.entity';
import { Messages } from 'src/entities/messages.entity';
import { BullModule } from '@nestjs/bull';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { RedisService } from 'src/Redis/redis';
import { SaveRecordToDatabase } from './bull.processor';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conversation, Bot, Messages]),
    BullModule.registerQueue({ name: 'messages' }),
  ],
  controllers: [SessionController],
  providers: [SessionService , RedisService , SaveRecordToDatabase],
})
export class SessionModule {}
