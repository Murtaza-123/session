import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Queue } from 'bull';
import { Request } from 'express';
import { CreateNlpDto } from 'src/Dto/create-conversation-dto';
import { MessageDto } from 'src/Dto/create-message-dto';
import { RedisService } from 'src/Redis/redis';
import { Bot } from 'src/entities/bot.entity';
import { Conversation } from 'src/entities/conversation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Conversation)
    private repositoryConversation: Repository<Conversation>,
    @InjectRepository(Bot)
    private repositoryBot: Repository<Bot>,
    private redisService: RedisService,
    @InjectQueue('messages') private messageQueue: Queue,
  ) {}
  async startCall(req: Request, createDto: CreateNlpDto) {
    try {
      const { call_id } = req.body;
      const parseCallId = call_id.toString();
      const callIdExist = await this.redisService.get(parseCallId);
      if(callIdExist)
      {
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
      const createConversation = new Conversation();
      createConversation.call_id = call_id;
      createConversation.bot = bot;
      await this.repositoryConversation.save(createConversation);
      await this.redisService.set(`call_id:${parseCallId}`, '1');
      await this.redisService.set('bot_no' , bot_no);
      const conversation = await this.repositoryConversation.findOne({
        where: { call_id },
      });
      const parsedConversation = JSON.stringify(conversation);
      await this.redisService.set('conversationId' , parsedConversation);
      if (bot && bot.Host) {
        await this.redisService.set('getURL', bot.Host);
       const response = await axios.post(bot.Host, createDto);
       console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.error('Error starting the call:', error);
      throw new Error('An unexpected error occurred while starting the call.');
    }
  }

  async handleClientMessage(req: Request, messageDto: MessageDto) {
    try {
      const { call_id } = req.body;
      const parseCallId = call_id.toString()
      const callIdExist = await this.redisService.get("call_id:" + parseCallId)
      console.log(callIdExist);
      if(!callIdExist)
      {
        return "call ended";
      }
      else{
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
        const response = await axios.post(URL, messageDto);
        console.log(response.data);
        return response.data;
      }
    }
    } catch (error) {
      console.error('Conversation not started:', error);
      throw new Error(
        'An unexpected error occurred while starting the conversation.',
      );
    }
  }

  async sendBotResponseToClient(req: Request, messageDto: MessageDto) {
    try {
      const {call_id} = req.body
      const parseCallId = call_id.toString();
      const callIdExist = await this.redisService.get("call_id:" + parseCallId);
      console.log(callIdExist)
      if(!callIdExist)
      {
         return 'Call Ended';
      }
      const url = await this.redisService.get('getURL');
      if (url) {
        const id = await this.redisService.get('conversationId');
        const conversation = JSON.parse(id);
        const response = await axios.post(url, messageDto);
        const { type } = req.body;
        const messages = response.data;
        await this.messageQueue.add('saveBotResponseToDatabase', {
          type,
          messages,
          conversation,
        });
        return response.data;
      }
    } catch (error) {
      console.error('Conversation not started.');
      throw new Error(
        'An unexpected error occurred while starting the conversation',
      );
    }
  }

    async endCall(call_id: number): Promise<Conversation> {
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
}
