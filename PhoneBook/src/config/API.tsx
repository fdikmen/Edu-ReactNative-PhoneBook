import axios from 'axios'

const API = axios.create({
    baseURL: 'https://647f231bc246f166da9026e4.mockapi.io',
    // timeout: 5000
})

export default API