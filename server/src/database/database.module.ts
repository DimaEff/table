import { Logger, Module } from "@nestjs/common";
import { DatabaseService } from "./database.service";
import { databasePoolFactory } from "./helpers/utils";
import { ConfigService } from "@nestjs/config";
import { DATABASE_POOL } from "./consts";
import { ModuleRef } from "@nestjs/core";
import { Pool } from "pg";
import { getShutDownOnExitMessage } from "./helpers/messages";

@Module({
    providers: [
        {
            provide: DATABASE_POOL,
            inject: [ConfigService],
            useFactory: databasePoolFactory,
        },
        DatabaseService,
    ],
    exports: [DatabaseService],
})
export class DatabaseModule {
    private readonly logger = new Logger(DatabaseModule.name);

    constructor(private readonly moduleRef: ModuleRef) {
    }

    onApplicationShutdown(signal?: string): any {
        this.logger.log(getShutDownOnExitMessage(signal));
        const pool = this.moduleRef.get(DATABASE_POOL) as Pool;
        return pool.end();
    }
}
