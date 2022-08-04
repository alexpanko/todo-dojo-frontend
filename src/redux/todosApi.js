import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://todo-dojo-api.herokuapp.com/api/v1/',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `todo`,
    }),
    // deleteTodo: builder.mutation({
    //   query: (id) => ({
    //     url: `todo/${id}`,
    //     method: 'DELETE',
    //   }),
    // }),
  }),
});

export const { useGetTodosQuery } = todoApi;