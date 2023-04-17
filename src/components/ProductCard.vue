<template>
  <b-card border-variant="light" class="h-100 shadow">
    <h4>
      <slot name="heading"></slot>
    </h4>
    <p>
      <slot name="description"></slot>
    </p>
    <div><strong>Cena </strong><slot name="price"></slot></div>
  </b-card>
</template>
