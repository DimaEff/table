import { Inject, Injectable, Logger } from "@nestjs/common";
import { DATABASE_POOL } from "./consts";
import { Pool } from "pg";
import { getExecuteQueryErrorMessage, getExecuteQueryMessage, getExecuteQueryResultMessage } from "./logger.messages";
import { ExecuteQueryResult } from "./types";

@Injectable()
export class DatabaseService {
    private readonly logger = new Logger(DatabaseService.name);

    constructor(@Inject(DATABASE_POOL) private readonly pool: Pool) {
    }

    async executeQuery<T>(queryText: string, values: any[] = []): Promise<ExecuteQueryResult<T>> {
        this.logger.debug(getExecuteQueryMessage(queryText, values));

        try {
            const res = await this.pool.query<T>(queryText, values);
            this.logger.debug(getExecuteQueryResultMessage(res.rows.length));
            return {
                total: res.rows.length,
                data: res.rows,
            };
        } catch (e) {
            this.logger.debug(getExecuteQueryErrorMessage(e));
        }
    }
}
