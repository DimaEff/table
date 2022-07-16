import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import { DeliveryModel } from "./delivery.model";
import { ExecuteQueryResult, QuerySelector } from "../database/types";
import { DeliveryRequestQuery } from "./types";

const DELIVERIES_TABLE_NAME = "deliveries";

@Injectable()
export class DeliveriesService {
    private readonly deliverySelector: QuerySelector<DeliveryModel>;

    constructor(private readonly databaseService: DatabaseService) {
        this.deliverySelector = databaseService.selectQueryBuilder<DeliveryModel>(DELIVERIES_TABLE_NAME);
    }

    async getDeliveries({
        limit,
        page,
        sortBy,
        sortType,
        filterValue,
        filterField,
        filterType,
    }: DeliveryRequestQuery<DeliveryModel>): Promise<ExecuteQueryResult<DeliveryModel>> {
        console.log("getDeliveries start");
        const query = this.deliverySelector({
            limit,
            page,
            sort: {
                column: sortBy,
                type: sortType,
            },
            filter: {
                filterField,
                filterValue,
                filterType,
            },
        });
        console.log("created query");
        return this.databaseService.executeQuery<DeliveryModel>(query);
    }
}
