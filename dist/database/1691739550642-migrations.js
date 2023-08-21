"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1691739550642 = void 0;
class Migrations1691739550642 {
    constructor() {
        this.name = 'Migrations1691739550642';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`conversation\` ADD \`Call_Duration\` int NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`conversation\` DROP COLUMN \`Call_Duration\``);
    }
}
exports.Migrations1691739550642 = Migrations1691739550642;
//# sourceMappingURL=1691739550642-migrations.js.map