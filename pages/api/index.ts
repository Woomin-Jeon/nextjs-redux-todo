import { TODOS } from '../../data'

type UnpackArray<T> = T extends (infer E)[] ? E : never

export type Todo = UnpackArray<typeof TODOS>

const api = {
  getTodos() {
    return new Promise<typeof TODOS>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error('API Error'))
        }

        resolve(TODOS)
      }, 1000)
    })
  },
}

export default api
