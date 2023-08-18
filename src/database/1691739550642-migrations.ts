import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1691739550642 implements MigrationInterface {
    name = 'Migrations1691739550642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`conversation\` ADD \`Call_Duration\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`conversation\` DROP COLUMN \`Call_Duration\``);
    }

}
