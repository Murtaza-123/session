import { Request } from 'express';
import { CreateNlpDto } from 'src/Dto/create-conversation-dto';
import { MessageDto } from 'src/Dto/create-message-dto';
import { SessionService } from './session.service';
export declare class SessionController {
    private sessionService;
    constructor(sessionService: SessionService);
    startCall(req: Request, createDto: CreateNlpDto): Promise<any>;
    sendMessageToBot(req: Request, createMessage: MessageDto): Promise<any>;
    sendMessageToClient(req: Request, createMessage: MessageDto): Promise<any>;
    endCall(id: number): Promise<{
        message: string;
        conversation: import("../entities/conversation.entity").Conversation;
    }>;
}
