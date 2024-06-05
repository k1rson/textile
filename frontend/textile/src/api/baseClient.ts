// core import
import axios from 'axios'

// types
import type { AxiosInstance } from 'axios'

export const baseAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
