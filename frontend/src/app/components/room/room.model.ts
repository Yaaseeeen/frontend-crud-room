import {Country} from "./country.model";

export interface Room {
    id: string,
    countryId: number,
    name: string,
    country: Country,
    turnOn: boolean,
}
