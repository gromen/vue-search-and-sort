import { ref } from 'vue'
import axiosInstance from '../api/axios'

const productStore = ref({
  selected: null,
  error: null,
  loading: false,
  searchPhrase: '',
  products: [],
  setSearch(value) {
    this.searchPhrase = value
  },
  sortBy(value) {
    productStore.value.getProducts(false, value)
  },
  async getProducts(searchPhrase, sorting) {
    const url = searchPhrase
      ? `/search?search=${searchPhrase}`
      : '/product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0'

    try {
      this.loading = true

      const response = await axiosInstance.post(
        url,
        sorting ? { order: sorting } : null
      )

      this.products = response.data.elements
    } catch (error) {
      this.error = error
      console.error(error)
    } finally {
      this.loading = false
    }
  },
})

export default productStore
