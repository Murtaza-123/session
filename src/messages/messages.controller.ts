import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('api/v1/talking')
export class MessagesController {
<<<<<<< HEAD
  constructor(private messageService: MessagesService)
  {

  }
  @Get()
  async findId(id:number): Promise<boolean>
  {
=======
  constructor(private messageService: MessagesService) {}
  @Get()
  async findId(id: number): Promise<boolean> {
>>>>>>> feature
    const result = await this.messageService.findId(id);
    return result;
  }
}
