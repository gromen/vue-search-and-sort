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
    switch (value) {
      case 'cheapest':
        this.products = this.products.sort(
          (a, b) =>
            parseFloat(a.calculatedPrice.unitPrice) -
            parseFloat(b.calculatedPrice.unitPrice)
        )
        break

      case 'expensive':
        this.products = this.products.sort(
          (a, b) =>
            parseFloat(b.calculatedPrice.unitPrice) -
            parseFloat(a.calculatedPrice.unitPrice)
        )
        break
      default:
        this.products
        break
    }
  },
  async getProducts(searchPhrase) {
    this.loading = true

    const url = searchPhrase
      ? `/search?search=${searchPhrase}`
      : '/product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0'

    try {
      const response = await axiosInstance.post(url)

      this.products = response.data.elements.filter(
        (product) => product.name != null
      )
    } catch (error) {
      this.error = error
      console.error(error)
    } finally {
      this.loading = false
    }
  },
})

export default productStore
