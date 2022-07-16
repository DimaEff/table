export interface ExecuteQueryResult<T> {
    total: number;
    data: T[];
}

export interface PageableQuery {
    limit?: number;
    page?: number;
}

export type SortType = "asc" | "desc";
export interface SortProps<T extends object> {
    column: keyof T;
    type: SortType;
}

// now it is no longer necessary
type filterTypes = "=";
export interface SelectFilterProps<T extends object> {
    filterField: keyof T;
    filterValue: string;
    filterType: filterTypes;
}

export interface SelectQuery<T extends object> {
    columns?: (keyof T)[];
    sort?: SortProps<T>;
    filter?: SelectFilterProps<T>;
}

export type SelectQueryProps<T extends object> = SelectQuery<T> & PageableQuery;
export type QuerySelector<T extends object> = (queryProps?: SelectQueryProps<T>) => string;