<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
</style>