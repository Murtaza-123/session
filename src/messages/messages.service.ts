import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Queue } from 'bull';
import { Request } from 'express';
import { MessageDto } from 'src/Dto/create-message-dto';
import { RedisService } from 'src/Redis/redis';
import Bot from 'src/entities/bot.entity';
import { Conversation } from 'src/entities/conversation.entity';
import { Repository } from 'typeorm';
import { MessagesController } from './messages.controller';
import { Messages } from 'src/entities/messages.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Conversation)
    private repositoryConversation: Repository<Conversation>,
    @InjectRepository(Bot)
    private repositoryBot: Repository<Bot>,
    @InjectRepository(Messages)
    private repositoryMessage: Repository<Messages>,
    private redisService: RedisService,
    @InjectQueue('messages') private messageQueue: Queue,
  ) {}
  async findId(id: number) {
    const messageId = await this.repositoryMessage.findOne({ where: { id } });
    if (messageId) {
      return true;
    }
    return false;
  }
}
