import type { ProductStoreType } from '../types/products.type'
import { reactive } from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import axiosInstance from '../api/config/axios'
import type { AxiosError } from 'axios'

const productStore: ProductStoreType = reactive({
  selected: null,
  error: null,
  loading: false,
  searchPhrase: '',
  products: [],
  setSearch(value: string) {
    this.searchPhrase = value
  },
  clearSearch() {
    this.searchPhrase = ''
  },
  sortBy(value: string) {
    productStore.getProducts(this.searchPhrase, { order: value })
  },
  async getProducts(
    this: ProductStoreType,
    searchPhrase = '',
    data = null
  ): Promise<void> {
    const url = searchPhrase
      ? `/search?search=${searchPhrase}`
      : '/product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0'

    try {
      this.products = []
      this.loading = true
      const response = await axiosInstance.post(url, data)

      this.products = response.data.elements
    } catch (error) {
      this.error = error as AxiosError
      console.error(error)
    } finally {
      this.loading = false
    }
  },
})

export default productStore
