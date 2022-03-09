import { GetStaticProps, NextPage } from 'next/types'
import React from 'react'

import api, { Todo } from '../../api'

interface Props {
  requestId: number
  todos: Todo[]
}

const SSGTodoList: NextPage<Props> = ({ requestId, todos }) => {
  return (
    <>
      <h3>Static Site Generation</h3>
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
  }
}

export default SSGTodoList
