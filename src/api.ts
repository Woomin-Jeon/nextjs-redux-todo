import axios from 'axios'

import { Todo } from '../DB'

const domain = process.env.DOMAIN

const req = axios.create({ baseURL: domain })

const request = async <D = unknown>(url: string) => {
  const response = await req.get<{ data: D }>(url)

  return response.data.data
}

const api = {
  getTodos: async () => {
    const data = await request<{ requestId: number; todos: Todo[] }>('/api/todos/list')

    return data
  },
}

export default api
