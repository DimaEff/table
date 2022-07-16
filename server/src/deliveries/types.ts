import { PageableQuery, SelectFilterProps, SortType } from "../database/types";

interface DeliverySortQuery<T extends object> {
    sortBy?: keyof T;
    sortType?: SortType;
}

export type DeliveryRequestQuery<T extends object> = PageableQuery & DeliverySortQuery<T> & SelectFilterProps<T>;