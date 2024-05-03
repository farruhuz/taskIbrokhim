import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://66260426052332d553214ba8.mockapi.io/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `/users`,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = usersApi;
