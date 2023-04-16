<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO: add TS type checking
import ProductCard from './ProductCard.vue'
import productStore from '../stores/products'

// interface Products {
//   id: string
//   active: boolean
//   description: string
//   calculatedPrice: {
//     unitPrice: number
//   }
//   value:
// }
const { fetchProducts } = productStore.value.getProducts()
fetchProducts()
</script>

<template>
  <b-row>
    <!-- <b-spinner v-if="loading"></b-spinner> -->
    <div class="w-100"></div>
    <b-alert
      variant="danger"
      dismissible
      fade
      :show="productStore.error != null"
      @dismissed="productStore.error = null"
    >
      {{ productStore.error?.message }} <br />
      {{ productStore.error?.code }}
    </b-alert>
    <ProductCard
      v-for="product in productStore.products"
      v-bind:key="product.id"
    >
      <template #heading> {{ product.name }} </template>
      <template #description> {{ product.description }} </template>
      <template #price> {{ product.calculatedPrice.unitPrice }} </template>
    </ProductCard>
  </b-row>
</template>
