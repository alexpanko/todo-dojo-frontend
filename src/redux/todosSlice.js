import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      todoAdded(state, action) {
        state.push({
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        })
      },
      todoToggled(state, action) {
        const todo = state.find(todo => todo.id === action.payload.id)
        todo.completed = !todo.completed
      },
      todoDeleted(state, action) {
        return state.filter((todo) => todo.id !== action.payload.id)
      }
    }
  })
  
  export const { todoAdded, todoToggled, todoDeleted } = todosSlice.actions
  export default todosSlice.reducer