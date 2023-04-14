<script setup lang="ts">
import ProductCard from './ProductCard.vue'
</script>

<template>
  <div>
    <ProductCard>
      <template #heading> Title 1 </template>
      <template #description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed minima
        quas eveniet adipisci laborum voluptas labore minus beatae. Nemo
        inventore tempora earum reprehenderit distinctio laboriosam, quam
        assumenda molestias sapiente.
      </template>
    </ProductCard>
  </div>
</template>
