import { ConfigService } from "@nestjs/config";
import { Pool } from "pg";

export const databasePoolFactory = async (configService: ConfigService): Promise<Pool> => {
    return new Pool({
        // user: configService.get("POSTGRES_USER"),
        // host: configService.get("POSTGRES_HOST"),
        // database: configService.get("POSTGRES_DB"),
        user: "postgres",
        host: "localhost",
        database: "postgres",
        // password: configService.get<string>("POSTGRES_PASSWORD"),
        password: "postgres",
        port: configService.get("POSTGRES_LOCAL_PORT"),
    });
};