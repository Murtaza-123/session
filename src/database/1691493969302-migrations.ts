import { MigrationInterface, QueryRunner } from "typeorm"

export class Migrations1691493969302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        ALTER TABLE \`bot\`
        MODIFY \`bot_name\` TEXT
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
