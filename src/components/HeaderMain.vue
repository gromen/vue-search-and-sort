<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO add TS type checking
import { ref } from 'vue'
import productStore from '../stores/products'

const options = ref([
  { value: null, text: 'Sortuj' },
  { value: 'price-asc', text: 'Od najtańszych' },
  { value: 'price-desc', text: 'Od najdroższych' },
])
</script>
<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container fluid="md">
      <b-navbar-brand href="#">Shopware listing</b-navbar-brand>
      <b-navbar-nav class="ml-auto text-white">
        <b-form-select
          @change="productStore.sortBy(productStore.selected)"
          v-model="productStore.selected"
          :options="options"
        ></b-form-select>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>
