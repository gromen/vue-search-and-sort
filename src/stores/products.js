import { ref } from 'vue'
import axiosInstance from '../api/axios'

const productStore = ref({
  selected: null,
  error: null,
  products: [],
  setSelected(value) {
    this.selected = value
  },
  sortBy(value) {
    switch (value) {
      case 'cheapest':
        this.products = this.products.sort(
          (a, b) => a.calculatedPrice.unitPrice - b.calculatedPrice.unitPrice
        )
        break

      case 'expensive':
        this.products = this.products.sort(
          (a, b) => b.calculatedPrice.unitPrice - a.calculatedPrice.unitPrice
        )
        break
      default:
        this.products
        break
    }
  },
  getProducts() {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.post('/product')

        this.products = response.data.elements.filter(
          (product) => product.name != null
        )
      } catch (error) {
        this.error = error
        console.error(error)
      }
    }

    return {
      fetchProducts,
    }
  },
})

export default productStore
