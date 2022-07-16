import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ["../.env"],
        }),
        DatabaseModule,
        DeliveriesModule,
    ],
    providers: [],
})
export class AppModule {
}
