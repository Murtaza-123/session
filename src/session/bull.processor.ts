import { Process, Processor } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Messages } from 'src/entities/messages.entity';
import { Repository } from 'typeorm';

@Processor('messages')
export class SaveRecordToDatabase {
  constructor(
    @InjectRepository(Messages)
    private messagesRepository: Repository<Messages>,
  ) {}
  @Process('saveConversationToDataBase')
  async saveRecords(job: Job<any>) {
    try {
      const { messages, type, conversation } = job.data;
      const createMessages = new Messages();
      createMessages.conversation = conversation;
      createMessages.messages = messages;
      createMessages.type = type;
      await this.messagesRepository.save(createMessages);
    } catch (error) {
      console.log('Record not added sucessfully', error);
    }
  }
  @Process('saveBotResponseToDatabase')
  async saveBotResponse(job: Job<any>) {
    try {
      const { messages, type, conversation } = job.data;
      const createMessages = new Messages();
      createMessages.conversation = conversation;
      createMessages.messages = messages;
      createMessages.type = type;
      await this.messagesRepository.save(createMessages);
    } catch (error) {
      console.log('Record not added sucessfully', error);
    }
  }
}
