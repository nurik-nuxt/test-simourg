import { typicodeApi } from 'shared/api'

export const getCocktailInfo = async (code: string) => {
    const { data } = await typicodeApi.cocktail.getCocktailsByCode(code)
    return data?.drinks;
}