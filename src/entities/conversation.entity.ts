import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Messages } from './messages.entity';
import { Bot } from './bot.entity';

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  call_id: number;

  @CreateDateColumn()
  StartTime: Date;

  @Column({ nullable: true })
  EndTime: string;

  @Column({ nullable: true })
  Call_Duration: number;

  @ManyToOne(() => Bot, (bot) => bot.id)
  bot: Bot;
}
