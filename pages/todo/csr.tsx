import React, { useEffect, useState } from 'react'

import api, { Todo } from '../api'

const CSRTodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    api.getTodos().then((todos) => {
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
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export default CSRTodoList
