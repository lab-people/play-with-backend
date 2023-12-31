"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "xzg5cklkaaaot1bw",
    password: "pft21w9tplsl6os2",
    database: "tdq44srq2ll5fsi4",
    logging: true,
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    synchronize: true,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
});
