import { GetStaticProps, NextPage } from 'next/types'
import React from 'react'

import TodoList from '../../../src/components/TodoList'
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

      <TodoList todos={todos} />
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
