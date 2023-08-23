import { Body, Controller, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateNlpDto } from 'src/Dto/create-conversation-dto';
import { MessageDto } from 'src/Dto/create-message-dto';
import { MessagesService } from 'src/messages/messages.service';
import { ApiProperty } from '@nestjs/swagger';
import { SessionService } from './session.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('api/v1/session')
export class SessionController {
  constructor(
    private sessionService: SessionService,
  ) {}
  @Post('start')
  async startCall(@Req() req: Request, @Body() createDto: CreateNlpDto) {
    return this.sessionService.startCall(req, createDto);
  }

  @Post('client')
  async sendMessageToBot(
    @Req() req: Request,
    @Body() createMessage: MessageDto,
  ) {
    return this.sessionService.handleClientMessage(req, createMessage);
  }

  @ApiProperty()
  @Post('bot')
  async sendMessageToClient(
    @Req() req: Request,
    @Body() createMessage: MessageDto,
  ) {
    return this.sessionService.sendBotResponseToClient(req, createMessage);
  }

  @Post(':id/end')
  async endCall(@Param('id') id: number) {
    const conversation = await this.sessionService.endCall(id);
    return { message: 'Call ended successfully.', conversation };
  }
}
