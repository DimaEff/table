import { ConfigService } from "@nestjs/config";
import { Pool } from "pg";
import { HttpException, HttpStatus } from "@nestjs/common";
import { getBadRequestQueryParams } from "./messages";

export const databasePoolFactory = async (configService: ConfigService): Promise<Pool> => {
    return new Pool({
        // user: configService.get("POSTGRES_USER"),
        // host: configService.get("POSTGRES_HOST"),
        // database: configService.get("POSTGRES_DB"),
        // password: configService.get<string>("POSTGRES_PASSWORD"),
        user: "postgres",
        host: "localhost",
        database: "postgres",
        password: "postgres",
        port: configService.get("POSTGRES_LOCAL_PORT"),
    });
};

const filterObject = (obj: object, filterValue: any): object => {
    const res = {};
    Object.keys(obj).forEach(k => {
        if (obj[k] === filterValue) {
            res[k] = filterValue
        }
    });
    return res;
}

export const containsUndefinedProps = (obj: object): boolean => {
    const objValues = Object.values(obj);
    const isIncludesUndefinedField = objValues.includes(undefined);
    const isIncludesNonUndefinedValue = objValues.some(v => !!v);

    // if not all fields are specified
    if (isIncludesUndefinedField && isIncludesNonUndefinedValue) {
        const undefinedKeys = Object.keys(filterObject(obj, undefined));
        throw new HttpException(getBadRequestQueryParams(undefinedKeys), HttpStatus.BAD_REQUEST);
    }

    return isIncludesUndefinedField;
}