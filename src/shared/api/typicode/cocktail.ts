import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";
import type { Drink } from "./models";

const BASE_URL = 'search.php'

export const getCocktailsByCode = (code: string): AxiosPromise<Drink[]> => {
    return apiInstance.get(`${BASE_URL}?s=${code}`)
}