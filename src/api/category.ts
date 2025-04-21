import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query';

import type { Category } from '../@types';

const customBaseQuery = async (
  args: string | FetchArgs, // Аргументы запроса (URL или объект с параметрами)
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

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: customBaseQuery,
  tagTypes: ['Categories'], // Определяем типы тегов
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => ({
        url: 'categories',
        method: 'POST',
      }),
      providesTags: ['Categories'],
    }),
    addCategory: build.mutation<Category, Pick<Category, 'title'>>({
      query: ({ title }) => ({
        url: 'categories/add',
        method: 'POST',
        body: { title }, // Токен уже добавлен через customBaseQuery
      }),
      invalidatesTags: ['Categories'], // Инвалидируем тег после добавления
    }),
  }),
});

export const { useGetCategoriesQuery, useAddCategoryMutation } = categoryApi;