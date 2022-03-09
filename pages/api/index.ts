import { TODOS } from '../../data'

type UnpackArray<T> = T extends (infer E)[] ? E : never

export type Todo = UnpackArray<typeof TODOS>

interface GetTodosResponse {
  requestId: number
  todos: Todo[]
}

const api = {
  getTodos() {
    return new Promise<GetTodosResponse>((resolve, reject) => {
      setTimeout(() => {
        const requestId = Math.round(Math.random() * 1000)

        if (requestId > 800) {
          reject(new Error('API Error'))
        }

        resolve({ requestId, todos: TODOS })
      }, 1000)
    })
  },
}

export default api
