//  https://economia.awesomeapi.com.br/all/USD-BRL
import axios from 'axios'

const api = () =>
  axios.create({ baseURL: 'https://economia.awesomeapi.com.br/all/USD-BRL' })

export const getUSDToBRL = () => api.get('/')
