import axios from 'axios'
import openSocket from 'socket.io-client'

export const API_URL = process.env.NEXT_PUBLIC_API_URL
export const socket = openSocket(API_URL)
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
