<script setup lang="ts">
import ProductCards from './components/ProductCards.vue'
import HeaderMain from './components/HeaderMain.vue'
</script>

<template>
  <div id="app">
    <HeaderMain />
    <b-container fluid="md">
      <ProductCards />
    </b-container>
  </div>
</template>

<style scoped></style>
