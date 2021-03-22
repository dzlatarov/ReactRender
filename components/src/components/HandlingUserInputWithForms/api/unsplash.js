import axios from 'axios'
import { CLIENT_ID } from '../Config'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            `Client-ID ${CLIENT_ID}`
    }
})