import { baseApi } from './baseApi';

export type Health = { status: string; nodeEnv: string };

export const healthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHealth: builder.query<Health, void>({
      query: () => ({ url: 'health', method: 'GET' }),
      providesTags: ['Health'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetHealthQuery, useLazyGetHealthQuery } = healthApi;
