<script setup lang="ts">
// TODO add TS type checking
import productsStore from '../stores/products'

function onSearch(value: string) {
  if (value.length !== 0) {
    productsStore.getProducts(value)
    productsStore.setSearch(value)
  } else {
    productsStore.getProducts()
  }
}

function onClickClearSearch(): void {
  productsStore.clearSearch()
}
</script>

<template>
  <div>
    <b-row class="my-1 justify-content-md-center">
      <b-col sm="6" class="my-3 m-lg-5">
        <b-form-input
          id="search"
          type="search"
          placeholder="search"
          @input="onSearch"
          @search="onClickClearSearch"
          :value="productsStore.searchPhrase"
        ></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>
