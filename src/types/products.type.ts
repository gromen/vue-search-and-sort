import type { AxiosError } from 'axios'

export interface ProductStoreType {
  error: null | AxiosError
  getProducts: (search?: string, data?: { order: string } | null) => void
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
  name: null | string
  description: null | string
  calculatedPrice: CalculatedPrice
}

export interface CalculatedPrice {
  unitPrice: number
}
