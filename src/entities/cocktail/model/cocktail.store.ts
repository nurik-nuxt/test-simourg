import { defineStore } from 'pinia'
import type { Drink } from "../../../shared/api";
import { getCocktailInfo } from "./lib";

interface StoreState {
    currentCocktail: Drink[] | [],
    isCocktailLoading: boolean
}
export const useCocktailStore = defineStore('cocktail', {
    state: (): StoreState => ({
        currentCocktail: [],
        isCocktailLoading: false
    }),
    getters: {
        getCurrentCocktail: (state) => state.currentCocktail,
        getCocktailInfoLoading: (state) => state.isCocktailLoading,
    },

    actions: {
        async getCocktailByCode(code: string){
            this.isCocktailLoading = true;
            try {
                this.currentCocktail = await getCocktailInfo(code);
            } catch (e) {
                console.log(e)
            } finally {
                this.isCocktailLoading = false;
            }
        }
    }
})