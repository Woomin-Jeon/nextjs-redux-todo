export const TODOS = [
  {
    id: 1,
    title: 'NextJS, Redux 공부하기',
    done: true,
  },
  {
    id: 2,
    title: '이벤트 개편 관련 논의 자료 준비하기',
    done: false,
  },
  {
    id: 3,
    title: '점심 설거지 하기',
    done: false,
  },
]

type UnpackArray<T> = T extends (infer E)[] ? E : never

export type Todo = UnpackArray<typeof TODOS>

const DB = {
  getTodos() {
    return new Promise<Todo[]>((resolve) => {
      setTimeout(() => {
        resolve(TODOS)
      }, 1000)
    })
  },
}

export default DB
