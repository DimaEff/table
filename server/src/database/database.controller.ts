import { Controller, Get } from "@nestjs/common";
import { DatabaseService } from "./database.service";

@Controller("database")
export class DatabaseController {
    constructor(private readonly databaseService: DatabaseService) {
    }

    @Get()
    test() {
        const query = `SELECT * FROM deliveries LIMIT 10;`;
        return this.databaseService.executeQuery(query);
    }
}
