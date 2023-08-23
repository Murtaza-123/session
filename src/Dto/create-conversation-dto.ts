import { IsNumber, IsString } from 'class-validator';
export class CreateNlpDto {
  @IsNumber()
  call_id: number

  @IsNumber()
  botId: number

}
