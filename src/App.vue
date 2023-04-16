<script setup lang="ts">
import ProductCards from './components/ProductCards.vue'
import HeaderMain from './components/HeaderMain.vue'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <div id="app">
    <HeaderMain />
    <b-container fluid="md">
      <SearchBar />
      <ProductCards />
    </b-container>
  </div>
</template>

<style scoped></style>
