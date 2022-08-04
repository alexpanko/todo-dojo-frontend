import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://todo-dojo-api.herokuapp.com/api/v1/' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `todo`,
    }),
  }),
})

export const { useGetTodosQuery } = todoApi

// const todosSlice = createSlice({
//     name: 'todos',
//     initialState: [],
//     reducers: {
//       todoAdded(state, action) {
//         state.push({
//           id: action.payload.id,
//           text: action.payload.text,
//           completed: false,
//         })
//       },
//       todoToggled(state, action) {
//         const todo = state.find(todo => todo.id === action.payload.id)
//         todo.completed = !todo.completed
//       },
//       todoDeleted(state, action) {
//         return state.filter((todo) => todo.id !== action.payload.id)
//       }
//     }
//   })
  
//   export const { todoAdded, todoToggled, todoDeleted } = todosSlice.actions
//   export default todosSlice.reducer