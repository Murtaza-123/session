import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Request } from 'express';
import { MessageDto } from 'src/Dto/create-message-dto';
import { ApiProperty } from '@nestjs/swagger';

@Controller('api/v1/talking')
export class MessagesController {
  //constructor(private messageService: MessagesService) {}
 // @ApiProperty()
 // @Post('client')
  // async sendMessageToBot(
  //   @Req() req: Request,
  //   @Body() createMessage: MessageDto,
  // ) {
  //   return this.messageService.handleClientMessage(req, createMessage);
  // }


  // @ApiProperty()
  // @Post('bot')
  // async sendMessageToClient(
  //   @Req() req: Request,
  //   @Body() createMessage: MessageDto,
  // ) {
  //   return this.messageService.sendBotResponseToClient(req, createMessage);
  // }
}
