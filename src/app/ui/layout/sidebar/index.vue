<script setup lang="ts">
import { ref, computed } from 'vue'
import type { CocktailCode } from "../../../../shared/api";
import { useRoute } from "vue-router";

const route = useRoute();
const sidebarItems = ref<CocktailCode[]>([
  {
    title: 'Margarita',
    code: 'margarita',
  },
  {
    title: 'Mojito',
    code: 'mojito',
  },
  {
    title: 'A1',
    code: 'a1',
  },
  {
    title: 'Kir',
    code: 'kir'
  }
])

const isActiveCurrentTab = (tab: string) => {
  if (route.params.id) {
    return tab === route.params.id
  }
}

</script>

<template>
  <div class="sidebar">
    <router-link
        v-for="(tab, index) in sidebarItems"
        replace
        :key="index"
        :title="tab.title"
        :to="`/cocktail/${tab.code}`"
        class="sidebar__item"
        :class="{ active: isActiveCurrentTab(tab.code) }"
    >
      {{ tab.title }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__item {
    color: black;
    font-weight: 700;
    &.active {
      color: blue;
    }
  }
}
</style>