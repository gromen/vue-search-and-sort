import axios from 'axios'

axios.defaults.headers.common['sw-access-key'] = 'SWSCMDV3N2DIOUNZTKNNCTBBCW'

const axiosInstance = axios.create({
  baseURL: 'https://6526e561917d673fd76d2d40.mockapi.io/api',
})

export default axiosInstance
