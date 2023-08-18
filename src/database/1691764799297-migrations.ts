import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1691764799297 implements MigrationInterface {
    name = 'Migrations1691764799297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bot\` ADD \`Description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bot\` ADD \`Host\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bot\` DROP COLUMN \`Host\``);
        await queryRunner.query(`ALTER TABLE \`bot\` DROP COLUMN \`Description\``);
    }

}
