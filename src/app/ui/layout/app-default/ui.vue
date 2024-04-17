<script setup lang="ts">
import {Routing} from 'pages';
import { AppSidebar } from "../sidebar/index";
</script>

<template>
  <div class="app-wrapper">
    <div class="app-wrapper__sidebar">
      <AppSidebar />
    </div>
    <div class="app-wrapper__content">
      <Routing />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto;
  gap: 12px;
  height: 100vh;
  padding: 16px;

  &__sidebar {
    grid-column: 1 / 2;
    grid-row: 1;
    padding: 16px;
    border-radius: 8px;
    border: 2px solid gray;
  }

  &__content {
    grid-column: 2 / 3;
    grid-row: 1;
    padding: 16px;
    border-radius: 8px;
    border: 2px solid gray;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 150px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 120px 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    &__sidebar {
      grid-column: 1;
      grid-row: 1;
    }
    &__content {
      grid-column: 1;
      grid-row: 2;
    }
  }
}
</style>