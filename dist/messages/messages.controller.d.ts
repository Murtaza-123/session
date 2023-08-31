import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messageService;
    constructor(messageService: MessagesService);
    findId(id: number): Promise<boolean>;
}
