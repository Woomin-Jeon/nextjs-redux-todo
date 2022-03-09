import { GetStaticProps } from 'next/types'
import React from 'react'

import api, { Todo } from '../api'

interface Props {
  todos: Todo[]
}

const SSGTodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      <h3>Static Site Generation - revalidate 10 sec</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const todos = await api.getTodos()

  return {
    props: {
      todos,
    },
    revalidate: 10,
  }
}

export default SSGTodoList
