import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123123',
  database: 'play',
  logging: true,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
});
