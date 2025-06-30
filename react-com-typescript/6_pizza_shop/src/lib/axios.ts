import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
    baseURL: env.VITE_API_URL,
    withCredentials: true, //envia o cookie para o back-end (EXTREMAMENTE IMPORTANTE)
})