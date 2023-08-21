import { Conversation } from './conversation.entity';
export declare class Messages {
    id: number;
    messages: string;
    type: string;
    conversation: Conversation;
}
