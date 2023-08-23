import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Bot } from 'src/entities/bot.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BotService {
  constructor(@InjectRepository(Bot) private repositoryBot: Repository<Bot>) {}

  async createBot(req: Request) {
    try {
      const { bot_name, bot_no, Description, Host } = req.body;
      const createBot = new Bot();
      createBot.bot_name = bot_name;
      createBot.bot_no = bot_no;
      createBot.Description = Description;
      createBot.Host = Host;
      await this.repositoryBot.save(createBot);
      return 'Bot created successfully';
    } catch (error) {
      console.error('Error creating bot:', error);
      return 'An error occurred while creating the bot. Please try again later.';
    }
  }
}
