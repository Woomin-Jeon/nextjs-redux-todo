import { GetServerSideProps, NextPage } from 'next/types'
import React from 'react'

import TodoList from '../../../src/components/TodoList'
import api, { Todo } from '../../api'

interface Props {
  todos: Todo[]
}

const SSRTodoList: NextPage<Props> = ({ todos }) => {
  return (
    <>
      <h3>Server Side Rendering</h3>

      <TodoList todos={todos} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { todos } = await api.getTodos()

  return {
    props: {
      todos,
    },
  }
}

export default SSRTodoList
