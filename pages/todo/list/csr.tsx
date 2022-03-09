import { NextPage } from 'next/types'
import React, { useEffect, useState } from 'react'

import { Todo } from '../../../DB'
import api from '../../../src/api'
import TodoList from '../../../src/components/TodoList'

const CSRTodoList: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    api.getTodos().then(({ todos }) => {
      setTodos((prev) => [...prev, ...todos])
    })
  }, [])

  if (todos.length === 0) {
    return (
      <>
        <h3>Client Side Rendering</h3>
        <h4>Loading...</h4>
      </>
    )
  }

  return (
    <>
      <h3>Client Side Rendering</h3>

      <TodoList todos={todos} />
    </>
  )
}

export default CSRTodoList
