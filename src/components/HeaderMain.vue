<script setup lang="ts">
import { ref } from 'vue'
import productStore from '../stores/products'

const options = ref([
  { value: null, text: 'Sortuj' },
  { value: 'asc', text: 'Od najtańszych' },
  { value: 'desc', text: 'Od najdroższych' },
])
</script>
<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container fluid="md">
      <b-navbar-brand href="#">Shopware listing</b-navbar-brand>
      <b-navbar-nav class="ml-auto text-white">
        <b-form-select
          @change="
            () => {
              if (productStore.selected) {
                productStore.sortBy(productStore.selected)
              }
            }
          "
          v-model="productStore.selected"
          :options="options"
        ></b-form-select>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>
