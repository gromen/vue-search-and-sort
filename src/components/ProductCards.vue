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
const count = ref(0)
let products = ref([])

async function getData() {
  const data = await getProducts()
  console.log(data.data)
  products.value = data.data.elements.filter((product) => product.name !== '')
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
