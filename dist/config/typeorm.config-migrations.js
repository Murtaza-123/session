"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const typeorm_1 = require("typeorm");
const database_config_1 = require("./database.config");
exports.connectionSource = new typeorm_1.DataSource(database_config_1.OrmConfig);
//# sourceMappingURL=typeorm.config-migrations.js.map