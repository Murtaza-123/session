import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  async findId(id: number) {
    const messageId = await this.repositoryMessage.findOne({ where: { id } });
    if (messageId) {
      return true;
    }
    return false;
  }
}
