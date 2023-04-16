<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO: add TS type checking
import ProductCard from './ProductCard.vue'
import { useProducts } from '../api/products'

// interface Products {
//   id: string
//   active: boolean
//   description: string
//   calculatedPrice: {
//     unitPrice: number
//   }
//   value:
// }

const { products, error, fetchProducts } = useProducts()
fetchProducts()
</script>

<template>
  <b-row>
    <b-alert
      variant="danger"
      dismissible
      fade
      :show="error ? true : false"
      @dismissed="error = false"
    >
      {{ error.message }}
    </b-alert>
    <ProductCard v-for="product in products" v-bind:key="product.id">
      <template #heading> {{ product.name }} </template>
      <template #description> {{ product.description }} </template>
      <template #price> {{ product.calculatedPrice.unitPrice }} </template>
    </ProductCard>
  </b-row>
</template>
