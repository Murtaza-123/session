import { Bot } from './bot.entity';
export declare class Conversation {
    id: number;
    call_id: number;
    StartTime: Date;
    EndTime: string;
    Call_Duration: number;
    bot: Bot;
}
