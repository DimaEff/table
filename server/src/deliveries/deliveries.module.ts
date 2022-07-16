import { Module } from "@nestjs/common";
import { DeliveriesController } from "./deliveries.controller";
import { DeliveriesService } from "./deliveries.service";
import { DatabaseModule } from "../database/database.module";

@Module({
    controllers: [DeliveriesController],
    providers: [DeliveriesService],
    imports: [DatabaseModule],
})
export class DeliveriesModule {
}
