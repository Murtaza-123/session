import { Controller, Post, Req } from '@nestjs/common';
import { BotService } from './bot.service';
import { Request } from 'express';

@Controller('api/v1/bot')
export class BotController {
    constructor(private botService: BotService){}

    @Post()
    async createBot(@Req() req: Request)
    {
        return this.botService.createBot(req);
    }
    
}
