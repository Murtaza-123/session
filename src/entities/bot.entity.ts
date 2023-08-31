import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-array', { nullable: true })
  bot_name: string;

  @Column('simple-array', { nullable: true })
  bot_no: string[];

  @Column()
  Description: string;

  @Column()
  Hard_Timer: number;

  @Column()
  Host: string;
}
export default Bot;
