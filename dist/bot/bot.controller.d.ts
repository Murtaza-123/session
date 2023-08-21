import { BotService } from './bot.service';
import { Request } from 'express';
export declare class BotController {
    private botService;
    constructor(botService: BotService);
    createBot(req: Request): Promise<"Bot created successfully" | "An error occurred while creating the bot. Please try again later.">;
}
