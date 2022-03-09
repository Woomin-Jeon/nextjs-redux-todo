import { GetStaticProps, NextPage } from 'next/types'
import React from 'react'

import { Todo } from '../../../DB'
import api from '../../../src/api'
import TodoList from '../../../src/components/TodoList'

interface Props {
  requestId: number
  todos: Todo[]
}

const SSGTodoList: NextPage<Props> = ({ requestId, todos }) => {
  return (
    <>
      <h3>Static Site Generation - revalidate 10 sec</h3>
      <h4>Request ID: {requestId}</h4>

      <TodoList todos={todos} />
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
