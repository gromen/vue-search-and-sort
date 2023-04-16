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
  async sortBy(value) {
    await productStore.value.getProducts(false, value)
  },
  async getProducts(searchPhrase, sorting) {
    this.loading = true

    const url = searchPhrase
      ? `/search?search=${searchPhrase}`
      : '/product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0'

    try {
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
