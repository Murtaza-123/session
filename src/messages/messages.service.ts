import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Messages } from 'src/entities/messages.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages)
    private repositoryMessage: Repository<Messages>,
  ) {}
  async findId(id: number) {
    const messageId = await this.repositoryMessage.findOne({ where: { id } });
    if (messageId) {
      return true;
    }
    return false;
  }
}
