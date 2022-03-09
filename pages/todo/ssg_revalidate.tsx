import { GetStaticProps } from 'next/types'
import React from 'react'

import api, { Todo } from '../api'

interface Props {
  requestId: number
  todos: Todo[]
}

const SSGTodoList: React.FC<Props> = ({ requestId, todos }) => {
  return (
    <>
      <h3>Static Site Generation - revalidate 10 sec</h3>
      <h4>Request ID: {requestId}</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await api.getTodos()

  return {
    props: data,
    revalidate: 10,
  }
}

export default SSGTodoList
