import { GetServerSideProps, NextPage } from 'next/types'
import React from 'react'

import { Todo } from '../../../DB'
import api from '../../../src/api'

interface Props {
  todo: Todo | null
}

const TodoDetail: NextPage<Props> = ({ todo }) => {
  const handleChangeDone = () => {}

  if (!todo) {
    return (
      <section>
        <h3>No matched Todo item</h3>
      </section>
    )
  }

  return (
    <section style={SectionStyle}>
      <input type="checkbox" onChange={handleChangeDone} checked={todo.done} />
      <h3>&nbsp;{todo.title}</h3>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { todoId } = context.params as { todoId: string }

  const { todos } = await api.getTodos()

  const targetTodo = todos.find((todo) => todo.id.toString() === todoId) ?? null

  return {
    props: {
      todo: targetTodo,
    },
  }
}

const SectionStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
}

export default TodoDetail
