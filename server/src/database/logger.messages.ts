export const getExecuteQueryMessage =
    (queryText: string, values: any[]): string => `Executing query: ${queryText} (${values})`;
export const getExecuteQueryResultMessage =
    (rowsCount: number): string => `Executed query, result size ${rowsCount}`;
export const getExecuteQueryErrorMessage = (e: string): string => `Executed query failed. Error: ${e}`;
export const getShutDownOnExitMessage = (signal?: string): string => `Shutting down on signal ${signal}`;