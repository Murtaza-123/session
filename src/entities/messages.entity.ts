import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Conversation } from './conversation.entity';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text'})
  messages: string;

  @Column()
  type: string;


  @ManyToOne(() => Conversation, (conversation) => conversation.id)
  conversation: Conversation;
}
