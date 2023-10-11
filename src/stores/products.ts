import type { ProductStoreType, SortByType } from '../types/products.type'
import { reactive } from 'vue'
import type { AxiosError } from 'axios'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import axiosInstance from '@/api/config/axios'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
  sortBy(value: SortByType) {
    productStore.getProducts(this.searchPhrase, value)
  },
  async getProducts(
    this: ProductStoreType,
    searchPhrase = '',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sortBy = ''
  ): Promise<void> {
    let url = `${axiosInstance.defaults.baseURL}${
      searchPhrase ? `/products?name=${searchPhrase}` : '/products'
    }`

    if (sortBy) {
      url = `${url}${searchPhrase ? '&' : '?'}orderby=price&order=${sortBy}`
    }

    try {
      this.products = []
      this.loading = true
      const response = await axiosInstance.get(url)
      console.log(response.data)
      this.products = response.data
    } catch (error) {
      this.error = error as AxiosError
      console.error(error)
    } finally {
      this.loading = false
    }
  },
})

export default productStore
