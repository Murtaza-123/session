import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1691764346368 implements MigrationInterface {
    name = 'Migrations1691764346368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_34f0c9e33195e363cd90cef5a19\` ON \`conversation\``);
        await queryRunner.query(`DROP INDEX \`FK_e5663ce0c730b2de83445e2fd19\` ON \`messages\``);
        await queryRunner.query(`ALTER TABLE \`messages\` ADD \`Description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`conversation\` ADD CONSTRAINT \`FK_34f0c9e33195e363cd90cef5a19\` FOREIGN KEY (\`botId\`) REFERENCES \`bot\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`messages\` ADD CONSTRAINT \`FK_e5663ce0c730b2de83445e2fd19\` FOREIGN KEY (\`conversationId\`) REFERENCES \`conversation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`messages\` DROP FOREIGN KEY \`FK_e5663ce0c730b2de83445e2fd19\``);
        await queryRunner.query(`ALTER TABLE \`conversation\` DROP FOREIGN KEY \`FK_34f0c9e33195e363cd90cef5a19\``);
        await queryRunner.query(`ALTER TABLE \`messages\` DROP COLUMN \`Description\``);
        await queryRunner.query(`CREATE INDEX \`FK_e5663ce0c730b2de83445e2fd19\` ON \`messages\` (\`conversationId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_34f0c9e33195e363cd90cef5a19\` ON \`conversation\` (\`botId\`)`);
    }

}
