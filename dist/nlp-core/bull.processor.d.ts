import { Job } from 'bull';
import { Messages } from 'src/entities/messages.entity';
import { Repository } from 'typeorm';
export declare class SaveRecordToDatabase {
    private messagesRepository;
    constructor(messagesRepository: Repository<Messages>);
    saveRecords(job: Job<any>): Promise<void>;
    saveBotResponse(job: Job<any>): Promise<void>;
}
