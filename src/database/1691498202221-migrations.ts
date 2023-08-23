import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1691498202221 implements MigrationInterface {
    name = 'Migrations1691498202221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bot\` DROP COLUMN \`first_name\``);
        await queryRunner.query(`ALTER TABLE \`bot\` DROP COLUMN \`last_name\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bot\` ADD \`last_name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`bot\` ADD \`first_name\` varchar(255) NULL`);
    }

}
