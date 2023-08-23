import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class MessageDto{
    @ApiProperty()
    @IsNumber()
    call_id:number

    @ApiProperty()
    @IsString()
    messages: string

    @ApiProperty()
    @IsString()
    type: string

    @ApiProperty()
    @IsNumber()
    conversationId: number
}