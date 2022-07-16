import { HttpException, HttpStatus, Inject, Injectable, Logger } from "@nestjs/common";
import { DATABASE_POOL, DEFAULT_QUERY_LIMIT, DEFAULT_QUERY_PAGE } from "./consts";
import { Pool } from "pg";
import { getExecuteQueryErrorMessage, getExecuteQueryMessage, getExecuteQueryResultMessage } from "./helpers/messages";
import { ExecuteQueryResult, SelectQueryProps, QuerySelector, SortProps, SelectFilterProps } from "./types";
import { containsUndefinedProps } from "./helpers/utils";

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
            const message = getExecuteQueryErrorMessage(e)
            this.logger.debug(message);
            throw new HttpException(message, HttpStatus.BAD_REQUEST);
        }
    }

    selectQueryBuilder<T extends object>(table: string): QuerySelector<T> {
        // array instead of string for correct spacings
        return (queryProps?: SelectQueryProps<T>) => [
            "SELECT",
            this.getTableColumns(queryProps?.columns?.map(s => String(s))),
            "FROM",
            table,
            this.getWhere(queryProps.filter),
            this.getSort(queryProps.sort),
            this.getLimit(queryProps.limit),
            this.getOffset(queryProps.limit, queryProps.page),
            ";",
        ].join(" ");
    }

    private getTableColumns = (columns?: string[]): string => {
        return columns && columns.length > 0 ? columns.join(",") : "*";
    };

    private getSort<T extends object>(sortProps?: SortProps<T>): string {
        return !containsUndefinedProps(sortProps) ? `ORDER BY ${String(sortProps.column)} ${sortProps.type}` : "";
    }

    private getLimit(limit?: number): string {
        return `LIMIT ${limit || DEFAULT_QUERY_LIMIT}`;
    }

    private getOffset(limit?: number, page?: number): string {
        return `OFFSET ${(limit || DEFAULT_QUERY_LIMIT) * (page || DEFAULT_QUERY_PAGE)}`;
    }

    private getWhere<T extends object>(filterProps?: SelectFilterProps<T>): string {
        return !containsUndefinedProps(filterProps) ?
            `WHERE ${String(filterProps.filterField)} ${filterProps.filterType} '${filterProps.filterValue}'` :
            "";
    }
}
