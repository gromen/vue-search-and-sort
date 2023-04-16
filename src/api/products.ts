// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO add TS type checking

import { ref } from 'vue'
import axiosInstance from './axios'

export function useProducts() {
  const products = ref([])
  // const status: StatusMessage = ref('loading')
  const error = ref({})

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.post('/product', null)
      products.value = response.data.elementss.filter(
        (product) => product.name != null
      )
    } catch (err) {
      error.value = err
      console.error(error.value)
    }
  }

  return {
    fetchProducts,
    products,
    error,
  }
}
