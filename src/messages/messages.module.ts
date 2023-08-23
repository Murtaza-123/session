import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Messages } from 'src/entities/messages.entity';
import { Conversation } from 'src/entities/conversation.entity';
import Bot from 'src/entities/bot.entity';
import { RedisService } from 'src/Redis/redis';
import { BullModule } from '@nestjs/bull';
import { SaveRecordToDatabase } from '../nlp-core/bull.processor';

@Module({
  imports: [
    TypeOrmModule.forFeature([Messages, Conversation, Bot]),
    BullModule.registerQueue({ name: 'messages' }),
  ],

  providers: [RedisService, MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {}
