import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1693465921993 implements MigrationInterface {
  name = 'Migrations1693465921993';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`bot\` ADD \`Hard_Timer\` int NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`bot\` DROP COLUMN \`Hard_Timer\``);
  }
}
