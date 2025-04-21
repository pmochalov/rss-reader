import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query';
import type { Feed } from '../@types';

const customBaseQuery = async (
  args: string | FetchArgs, // Аргументы запроса 
  api: BaseQueryApi, // API для доступа к состоянию Redux
  extraOptions: {} // Дополнительные опции (если нужны)
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_API}`,
  });

  // Получаем токен из состояния Redux
  const state = api.getState() as { auth: { token: string | null } };
  const token = state.auth.token;

  if (!token) {
    throw new Error('Токен отсутствует');
  }

  // Добавляем токен в тело запроса
  const adjustedArgs: FetchArgs =
    typeof args === 'string'
      ? { url: args, method: 'POST', body: { token } }
      : {
        ...args,
        body: {
          ...(args.body || {}),
          token,
        },
      };

  return baseQuery(adjustedArgs, api, extraOptions);
};

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: customBaseQuery,
  tagTypes: ['Feeds'],
  endpoints: (build) => ({
    getLinks: build.query<Feed[], Pick<Feed, 'category_id'>>({
      query: ({ category_id }) => ({
        url: 'feeds',
        method: 'POST',
        body: { category_id }
      }),
      providesTags: ['Feeds'],
    }),
    addFeed: build.mutation<Feed, Pick<Feed, 'title' | 'url' | 'category_id'>>({
      query: ({ category_id, title, url }) => ({
        url: 'feeds/add',
        method: 'POST',
        body: { category_id, title, url }, // Токен уже добавлен через customBaseQuery
      }),
      invalidatesTags: ['Feeds'], // Инвалидируем тег после добавления
    }),
  }),
});

export const { useGetLinksQuery, useAddFeedMutation } = feedApi;