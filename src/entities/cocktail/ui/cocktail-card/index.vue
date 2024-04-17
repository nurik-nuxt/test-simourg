<script setup lang="ts">
import type { Drink } from "../../../../shared/api";
import { computed } from "vue";
import { getProp } from "../../../../shared/utils/helpers";

interface CardProps {
  drink: Drink,
  isDeleted: boolean
}
const props = withDefaults(defineProps<CardProps>(), {})


const ingredientsList = computed(() => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}` as keyof typeof props.drink;
    const measureKey = `strMeasure${i}` as keyof typeof props.drink;
    if (getProp(props.drink, ingredientKey)) {
      ingredients.push({
        ingredient: getProp(props.drink, ingredientKey),
        measure: getProp(props.drink, measureKey) || '',
      });
    }
  }
  return ingredients;
});
const emits = defineEmits<{
  (e: 'deleteCocktail', id: string): void;
  (e: 'restoreCocktail', id: string): void;
}>()

const confirmDelete = async () => {
  if (await confirm(`Вы уверены, что хотите удалить ${props.drink.strDrink}?`)) {
    emits('deleteCocktail', props.drink.idDrink);
  }
};

const confirmRestore = async () => {
  if (await confirm(`Вы уверены, что хотите восстановить ${props.drink.strDrink}?`)) {
    emits('restoreCocktail', props.drink.idDrink);
  }
};
</script>

<template>
  <div class="card-wrapper">
    <div class="card-wrapper__info">
      <span style="font-weight: 700">{{ props.drink.strDrink }}</span>
      <span v-for="(item, index) in ingredientsList" :key="index">
        {{ item.measure }} {{ item.ingredient }}
      </span>
    </div>
    <img class="card-wrapper__img" :src="props.drink.strDrinkThumb" alt="image">
    <button v-if="!props.isDeleted" @click="confirmDelete">Удалить</button>
    <button v-else @click="confirmRestore">Восстановить</button>
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  display: flex;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 16px;
  justify-content: space-between;
  &__info {
    display: flex;
    flex-direction: column;
  }
  &__img {
    width: 150px;
  }
}
</style>