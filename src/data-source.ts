import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "2559",
    database: "firstdb",
    synchronize: false,
    logging: false,
    entities: ["./src/entity/*.ts"], // add your Entity here
    migrations: ["./src/migration/**/*.ts"],
    subscribers: [],
})
