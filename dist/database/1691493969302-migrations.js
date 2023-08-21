"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1691493969302 = void 0;
class Migrations1691493969302 {
    async up(queryRunner) {
        await queryRunner.query(`
        ALTER TABLE \`bot\`
        MODIFY \`bot_name\` TEXT
        `);
    }
    async down(queryRunner) {
    }
}
exports.Migrations1691493969302 = Migrations1691493969302;
//# sourceMappingURL=1691493969302-migrations.js.map