import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1692273796104 implements MigrationInterface {
    name = 'Migrations1692273796104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`messages\` DROP COLUMN \`messages\``);
        await queryRunner.query(`ALTER TABLE \`messages\` ADD \`messages\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`messages\` DROP COLUMN \`messages\``);
        await queryRunner.query(`ALTER TABLE \`messages\` ADD \`messages\` varchar(255) NOT NULL`);
    }

}
