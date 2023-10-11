import type { AxiosError } from 'axios'

export interface SortByType {
  value: 'asc' | 'desc' | ''
}

export interface ProductStoreType {
  error: null | AxiosError
  getProducts: (search?: string, sortBy?: SortByType) => void
  sortBy: (selected: string) => void
  setSearch: (search: string) => void
  clearSearch: () => void
  products?: Element[]
  loading: boolean
  searchPhrase: string
  selected: string | null
}

export interface ProductsTypes {
  data?: {
    elements: Element[]
  }
}

export interface Element {
  id: string
  image: string
  name: null | string
  description: null | string
  price: number
}
