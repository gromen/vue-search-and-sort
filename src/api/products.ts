import axiosInstance from './axios'

export async function getProducts(): Promise<void> {
  return await axiosInstance
    .post('/product', null)
    .catch((error: Error) => console.error(error))
}
