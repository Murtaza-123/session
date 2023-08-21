import { Request } from 'express';
import { Bot } from 'src/entities/bot.entity';
import { Repository } from 'typeorm';
export declare class BotService {
    private repositoryBot;
    constructor(repositoryBot: Repository<Bot>);
    createBot(req: Request): Promise<"Bot created successfully" | "An error occurred while creating the bot. Please try again later.">;
}
