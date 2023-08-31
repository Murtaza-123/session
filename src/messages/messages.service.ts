import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/entities/messages.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages) private repositoryMessage: Repository<Messages>,
  ) {}
  async findId(id: number) {
    const messageId = await this.repositoryMessage.findOne({ where: { id } });
    if (messageId) {
      return true;
    }
    return false;
  }

  async clientMessages() {
    return await this.repositoryMessage
      .createQueryBuilder('messages')
      .where('messages.type =: type', { type: 'client' })
      .getMany();
  }
}
