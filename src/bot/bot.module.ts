import { Module } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bot } from 'src/entities/bot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bot])],
  controllers: [BotController],
  providers: [BotService]
})
export class BotModule {}
