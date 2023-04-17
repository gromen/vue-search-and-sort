import axios from 'axios'

axios.defaults.headers.common['sw-access-key'] = 'SWSCMDV3N2DIOUNZTKNNCTBBCW'

const axiosInstance = axios.create({
  baseURL: 'https://demo.crehler.dev/store-api/',
})

export default axiosInstance
