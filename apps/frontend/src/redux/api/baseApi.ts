import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //   // Attach auth tokens here when available
    //   return headers;
    // },
  }),
  tagTypes: ['Health'],
  endpoints: () => ({}),
});
