import { Queue } from 'bull';
import { RedisService } from 'src/Redis/redis';
import Bot from 'src/entities/bot.entity';
import { Conversation } from 'src/entities/conversation.entity';
import { Repository } from 'typeorm';
export declare class MessagesService {
    private repositoryConversation;
    private repositoryBot;
    private redisService;
    private messageQueue;
    constructor(repositoryConversation: Repository<Conversation>, repositoryBot: Repository<Bot>, redisService: RedisService, messageQueue: Queue);
}
