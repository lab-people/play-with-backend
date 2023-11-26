import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  username: "xzg5cklkaaaot1bw",
  password: "pft21w9tplsl6os2",
  database: "tdq44srq2ll5fsi4",
  logging: true,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
});
