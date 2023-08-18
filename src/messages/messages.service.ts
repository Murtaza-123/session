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

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Conversation)
    private repositoryConversation: Repository<Conversation>,
    @InjectRepository(Bot)
    private repositoryBot: Repository<Bot>,
    private redisService: RedisService,
    @InjectQueue('messages') private messageQueue: Queue,
  ) {}

  // async handleClientMessage(req: Request, messageDto: MessageDto) {
  //   try {
  //     const { call_id, bot_no } = req.body;
  //     const parseToString = call_id.toString();
  //     const callIdExists = await this.redisService.get(`call_id:${parseToString}`);
  //     const messages = req.body.messages;
  //     const type = req.body.type;
  //     console.log(callIdExists);

  //     if (!callIdExists) {
  //       console.log(callIdExists);

  //       await this.redisService.set(`call_id:${parseToString}`, '1');
  //       await this.redisService.set('bot_no', bot_no);

  //       const conversation = await this.repositoryConversation.findOne({
  //         where: { call_id },
  //       });
  //       const parsedConversation = JSON.stringify(conversation);
  //       await this.redisService.set('conversationId', parsedConversation)
  //       await this.messageQueue.add('saveConversationToDataBase', {
  //         messages,
  //         type,
  //         conversation,
  //       });
  //       const bot = await this.repositoryBot
  //         .createQueryBuilder('bot')
  //         .where('FIND_IN_SET(:bot_no, bot.bot_no)')
  //         .setParameter('bot_no', bot_no)
  //         .getOne();

  //       if (bot && bot.Host) {
  //         await this.redisService.set('getURL', bot.Host);
  //         const response = await axios.post(bot.Host, messageDto);
  //         console.log(response.data);
  //         return response.data;
  //       }
  //     } else {
  //       const URL = await this.redisService.get('getURL');
  //       if (URL) {
  //         const conversationId = await this.redisService.get('conversationId');
  //         const conversation = JSON.parse(conversationId);
  //         await this.messageQueue.add('saveConversationToDataBase', {
  //           messages,
  //           type,
  //           conversation,
  //         });
  //         const response = await axios.post(URL, messageDto);
  //         console.log(response.data);
  //         return response.data;
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Conversation not started:', error);
  //     throw new Error(
  //       'An unexpected error occurred while starting the conversation.',
  //     );
  //   }
  // }

  // async sendBotResponseToClient(req: Request, messageDto: MessageDto) {
  //   try {
  //     console.log()
  //     const url = await this.redisService.get('getURL');
  //     if (url) {
  //       const id = await this.redisService.get('conversationId');
  //       const conversation = JSON.parse(id);
  //       const response = await axios.post(url, messageDto);
  //       const { type } = req.body;
  //       const messages = response.data;
  //       await this.messageQueue.add('saveBotResponseToDatabase', {
  //         type,
  //         messages,
  //         conversation,
  //       });
  //       return response.data;
  //     }
  //   } catch (error) {
  //     console.error('Conversation not started.');
  //     throw new Error(
  //       'An unexpected error occurred while starting the conversation',
  //     );
  //   }
  // }
}
