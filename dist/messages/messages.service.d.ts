import { Messages } from 'src/entities/messages.entity';
import { Repository } from 'typeorm';
export declare class MessagesService {
    private repositoryMessage;
    constructor(repositoryMessage: Repository<Messages>);
    findId(id: number): Promise<boolean>;
}
