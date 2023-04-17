import { reactive } from 'vue'
import axiosInstance from '../api/config/axios'

const productStore = reactive({
  selected: null,
  error: null,
  loading: false,
  searchPhrase: '',
  products: [],
  setSearch(value) {
    this.searchPhrase = value
  },
  clearSearch() {
    this.searchPhrase = ''
  },
  sortBy(value) {
    productStore.getProducts(this.searchPhrase, { order: value })
  },
  async getProducts(searchPhrase = false, data = null) {
    const url = searchPhrase
      ? `/search?search=${searchPhrase}`
      : '/product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0'

    try {
      this.products = []
      this.loading = true
      const response = await axiosInstance.post(url, data)

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
