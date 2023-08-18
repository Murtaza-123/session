import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1691492409429 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`    // Update new columns with split data

        ALTER TABLE \`bot\`
        ADD \`first_name\` VARCHAR(255),
        ADD \`last_name\` VARCHAR(255);
    `);

    await queryRunner.query(`
        UPDATE \`bot\`
        SET \`first_name\` = SUBSTRING_INDEX(\`name\`, ' ', 1),
            \`last_name\` = SUBSTRING_INDEX(\`name\`, ' ', -1);
    `);

    await queryRunner.query(`
        ALTER TABLE \`bot\`
        DROP COLUMN \`name\`;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE \`bot\`
        ADD \`name\` VARCHAR(255);
    `);

    await queryRunner.query(`
        UPDATE \`bot\`
        SET \`name\` = CONCAT(\`first_name\`, ' ', \`last_name\`);
    `);

    await queryRunner.query(`
        ALTER TABLE \`bot\`
        DROP COLUMN \`first_name\`,
        DROP COLUMN \`last_name\`;
    `);
  }
}
