"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1691498202221 = void 0;
class Migrations1691498202221 {
    constructor() {
        this.name = 'Migrations1691498202221';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`bot\` DROP COLUMN \`first_name\``);
        await queryRunner.query(`ALTER TABLE \`bot\` DROP COLUMN \`last_name\``);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`bot\` ADD \`last_name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`bot\` ADD \`first_name\` varchar(255) NULL`);
    }
}
exports.Migrations1691498202221 = Migrations1691498202221;
//# sourceMappingURL=1691498202221-migrations.js.map