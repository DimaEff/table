import { Controller, Get, Query } from "@nestjs/common";
import { DeliveriesService } from "./deliveries.service";
import { DeliveryRequestQuery } from "./types";
import { DeliveryModel } from "./delivery.model";

@Controller('deliveries')
export class DeliveriesController {
    constructor(private readonly deliveriesService: DeliveriesService) {
    }

    @Get()
    getDeliveries(@Query() deliveryRequestQuery: DeliveryRequestQuery<DeliveryModel>) {
        console.log("query params", deliveryRequestQuery);
        return this.deliveriesService.getDeliveries(deliveryRequestQuery);
    }
}
