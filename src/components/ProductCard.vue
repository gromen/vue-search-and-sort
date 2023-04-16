<template>
  <b-col sm="12" lg="6" xl="4">
    <b-card border-variant="light">
      <h4>
        <slot name="heading"></slot>
      </h4>
      <p>
        <slot name="description"></slot>
      </p>
      <div><strong>Cena </strong><slot name="price"></slot></div>
    </b-card>
  </b-col>
</template>
