import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('api/v1/talking')
export class MessagesController {
  constructor(private messageService: MessagesService) {}
  @Get(':id')
  async findId(id: number): Promise<boolean> {
    const result = await this.messageService.findId(id);
    return result;
  }
}
