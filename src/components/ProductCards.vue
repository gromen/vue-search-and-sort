<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO: add TS type checking support
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
productStore.getProducts()
</script>

<template>
  <b-row>
    <b-col lg="12" v-if="productStore.loading" class="text-center my-5">
      <b-spinner style="width: 3rem; height: 3rem"></b-spinner>
    </b-col>

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
      <b-col
        class="mb-4"
        sm="12"
        lg="6"
        xl="4"
        v-for="product in productStore.products"
        v-bind:key="product.id"
      >
        <ProductCard>
          <template #heading> {{ product.name }} </template>
          <template #description> {{ product.description }} </template>
          <template #price> {{ product.calculatedPrice.unitPrice }} </template>
        </ProductCard>
      </b-col>
    </template>
    <p
      class="text-center"
      v-else-if="!productStore.loading && !productStore.error"
    >
      No products found with phrase
      <strong>{{ productStore.searchPhrase }}</strong>
    </p>
  </b-row>
</template>
