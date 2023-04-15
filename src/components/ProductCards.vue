<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
import { getProducts } from '../api/products.js'

// interface Products {
//   id: string
//   active: boolean
//   description: string
//   calculatedPrice: {
//     unitPrice: number
//   }
//   value:
// }

const products = ref([])

async function getData() {
  const data = await getProducts()

  products.value = data.data.elements.filter(
    (product: { name: string }) => product.name !== null
  )
  console.log(products.value)
}

getData()
</script>

<template>
  <b-row>
    <ProductCard v-for="product in products" v-bind:key="product.id">
      <template #heading> {{ product.name }} </template>
      <template #description> {{ product.description }} </template>
      <template #price> {{ product.calculatedPrice.unitPrice }} </template>
    </ProductCard>
  </b-row>
</template>
