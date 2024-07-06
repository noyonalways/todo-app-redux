import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TTodo } from "../features/todoSlice";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo-app-server-delta.vercel.app",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query<{ status: boolean; data: TTodo[] }, string>({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation<
      Record<string, never>,
      { id: string; data: Partial<TTodo> }
    >({
      query: (options) => ({
        url: `/tasks/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = baseApi;
