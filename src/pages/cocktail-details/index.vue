<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCocktailStore } from "../../entities/cocktail/model";
import { computed, watch, ref, onMounted } from "vue";
import {CocktailCard} from "../../entities/cocktail";
import type {Drink} from "../../shared/api";

const route = useRoute();
const cocktailStore = useCocktailStore();

watch(
    () => route.params.id,
    async (value) => {
      if (value) await cocktailStore.getCocktailByCode(value.toString());
    },
    { deep: true, immediate: true }
);

const cocktailInfo = computed(() => cocktailStore.getCurrentCocktail);

const isCocktailInfoLoading = computed(() => cocktailStore.getCocktailInfoLoading);
const generateDrinkProps = (drink: Drink) => {
  const props: Record<string, string | undefined> = {};
  for (let i = 1; i <= 15; i++) {
    props[`strIngredient${i}`] = drink[`strIngredient${i}` as keyof Drink];
    props[`strMeasure${i}`] = drink[`strMeasure${i}` as keyof Drink];
  }
  return props;
};

const deletedCocktails = ref(new Set(JSON.parse(localStorage.getItem('deletedCocktails') || '[]')));

const handleDeleteCocktail = (id: string) => {
  deletedCocktails.value.add(id);
  localStorage.setItem('deletedDrinks', JSON.stringify([...deletedCocktails.value]));
};

const handleRestoreCocktail = (id: string) => {
  deletedCocktails.value.delete(id);
  localStorage.setItem('deletedDrinks', JSON.stringify([...deletedCocktails.value]));
};
onMounted(() => {
  const storedDeleted = JSON.parse(localStorage.getItem('deletedDrinks') || '[]');
  deletedCocktails.value = new Set(storedDeleted);
})
</script>

<template>
  <div class="drink-list" v-if="!isCocktailInfoLoading">
    <CocktailCard
        v-for="(drink, index) in cocktailInfo"
        :key="index"
        :drink="drink"
        v-bind="generateDrinkProps(drink)"
        :is-deleted="deletedCocktails.has(drink.idDrink)"
        @deleteCocktail="handleDeleteCocktail"
        @restoreCocktail="handleRestoreCocktail"
    />
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<style scoped lang="scss">
.drink-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
