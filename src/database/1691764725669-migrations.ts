import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1691764725669 implements MigrationInterface {
    name = 'Migrations1691764725669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`messages\` DROP COLUMN \`Description\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`messages\` ADD \`Description\` varchar(255) NOT NULL`);
    }

}
