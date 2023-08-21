"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1691764725669 = void 0;
class Migrations1691764725669 {
    constructor() {
        this.name = 'Migrations1691764725669';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`messages\` DROP COLUMN \`Description\``);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`messages\` ADD \`Description\` varchar(255) NOT NULL`);
    }
}
exports.Migrations1691764725669 = Migrations1691764725669;
//# sourceMappingURL=1691764725669-migrations.js.map