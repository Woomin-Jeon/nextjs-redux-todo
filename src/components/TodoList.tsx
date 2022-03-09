import Link from 'next/link'
import React from 'react'

import { Todo } from '../../DB'

interface Props {
  todos: Todo[]
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link
            href={{
              pathname: `/todo/detail/${todo.id}`,
            }}>
            {todo.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
