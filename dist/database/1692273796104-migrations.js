"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1692273796104 = void 0;
class Migrations1692273796104 {
    constructor() {
        this.name = 'Migrations1692273796104';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`messages\` DROP COLUMN \`messages\``);
        await queryRunner.query(`ALTER TABLE \`messages\` ADD \`messages\` text NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`messages\` DROP COLUMN \`messages\``);
        await queryRunner.query(`ALTER TABLE \`messages\` ADD \`messages\` varchar(255) NOT NULL`);
    }
}
exports.Migrations1692273796104 = Migrations1692273796104;
//# sourceMappingURL=1692273796104-migrations.js.map