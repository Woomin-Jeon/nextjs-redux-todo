import { createAction, createReducer } from '@reduxjs/toolkit'

interface Todo {
  id: number
  title: string
  done: boolean
}

const createTodoActionCreator = createAction<Todo>('todo/create')

const initialState: { todos: Todo[] } = { todos: [] }

export const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(createTodoActionCreator, (state, action) => {
    state.todos.push(action.payload)
  })
})
