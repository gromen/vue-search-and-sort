import { ref } from 'vue'
import axiosInstance from '../api/axios'

const productStore = ref({
  selected: null,
  error: null,
  loading: false,
  products: [],
  setSelected(value) {
    this.selected = value
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
  async getProducts() {
    this.loading = true
    try {
      const response = await axiosInstance.post('/product')

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
