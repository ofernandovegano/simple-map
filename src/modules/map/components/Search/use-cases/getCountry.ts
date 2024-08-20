'use server'
import { getCountry as getCountryService } from "../data-access/getCountry";

export async function getCountry(code: string) {
    const contry = await getCountryService(code);
    return contry
}
