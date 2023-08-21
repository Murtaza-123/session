import { Queue } from 'bull';
import { Request } from 'express';
import { CreateNlpDto } from 'src/Dto/create-conversation-dto';
import { MessageDto } from 'src/Dto/create-message-dto';
import { RedisService } from 'src/Redis/redis';
import { Bot } from 'src/entities/bot.entity';
import { Conversation } from 'src/entities/conversation.entity';
import { Repository } from 'typeorm';
export declare class SessionService {
    private repositoryConversation;
    private repositoryBot;
    private redisService;
    private messageQueue;
    constructor(repositoryConversation: Repository<Conversation>, repositoryBot: Repository<Bot>, redisService: RedisService, messageQueue: Queue);
    startCall(req: Request, createDto: CreateNlpDto): Promise<any>;
    handleClientMessage(req: Request, messageDto: MessageDto): Promise<any>;
    sendBotResponseToClient(req: Request, messageDto: MessageDto): Promise<any>;
    endCall(call_id: number): Promise<Conversation>;
}
