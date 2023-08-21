"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1691764799297 = void 0;
class Migrations1691764799297 {
    constructor() {
        this.name = 'Migrations1691764799297';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`bot\` ADD \`Description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bot\` ADD \`Host\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`bot\` DROP COLUMN \`Host\``);
        await queryRunner.query(`ALTER TABLE \`bot\` DROP COLUMN \`Description\``);
    }
}
exports.Migrations1691764799297 = Migrations1691764799297;
//# sourceMappingURL=1691764799297-migrations.js.map