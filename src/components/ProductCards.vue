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
productStore.value.getProducts()
</script>

<template>
  <b-row>
    <b-col v-if="productStore.loading" class="text-center my-5">
      <b-spinner style="width: 3rem; height: 3rem"></b-spinner>
    </b-col>

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

    <template v-if="productStore.products.length > 0">
      <ProductCard
        v-for="product in productStore.products"
        v-bind:key="product.id"
      >
        <template #heading> {{ product.name }} </template>
        <template #description> {{ product.description }} </template>
        <template #price> {{ product.calculatedPrice.unitPrice }} </template>
      </ProductCard>
    </template>
    <p class="text-center" v-else-if="!productStore.loading">
      No products found with phrase
      <strong>{{ productStore.searchPhrase }}</strong>
    </p>
  </b-row>
</template>
