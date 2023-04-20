import axios from 'axios'
import type { ProductsTypes } from '@/types/products.type'

export const productsGet = async (
  url: string,
  data: { order: string } | null
): Promise<ProductsTypes> => await axios.post(url, data)
