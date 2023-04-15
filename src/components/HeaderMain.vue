<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container fluid="md">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-nav class="ml-auto text-white">
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Sortuj' },
        { value: 'a', text: 'Najtańsze' },
        { value: 'b', text: 'Najdroższe' },
      ],
    }
  },
}
</script>
