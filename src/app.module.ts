import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  TypeOrmOptions } from './config/database.config';
import { BotModule } from './bot/bot.module';
import { MessagesModule } from './messages/messages.module';
import { BullModule } from '@nestjs/bull';
import { SessionModule } from './nlp-core/session.module';
import { ScheduleModule } from '@nestjs/schedule';
console.log(TypeOrmOptions.migrations);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    BullModule.forRoot({
      redis: 
      {
        host: 'localhost',
        port: 6379,
      },
    }),
  TypeOrmModule.forRoot(TypeOrmOptions),
    SessionModule,
    BotModule,
    MessagesModule ,
  ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
