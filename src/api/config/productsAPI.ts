// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import axiosInstance from './axios.js'
import type { ProductsTypes } from '@/types/products.type'

export const productsGet = async (
  url: string,
  data: { order: string } | null
): Promise<ProductsTypes> => await axiosInstance.post(url, data)
