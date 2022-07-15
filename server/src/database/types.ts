export interface ExecuteQueryResult<T> {
    total: number;
    data: T[];
}