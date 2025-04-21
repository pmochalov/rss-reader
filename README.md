# Rss-ридер

**Rss-ридер** — агрегатор Rss-потоков.

**[Демо](https://mchlv.ru/projects/rss-reader/) 🔗**

## Стек

-   React.js + TypeScript
-   Redux Toolkit (RTK Query)
-   CSS modules
-   Vite

## Сделано

-   добавление категорий (например: музыка, программирование, кино и т.п.) ✅
-   добавление новых Rss ✅
-   редактирование категорий, Rss: правка, удаление ⌛
-   оптимизация загрузки данных⌛
-   ...

## Запуск

```bash
  npm install rss-reader
  cd rss-reader
```

## RSS. Получение и обработка данных

Для получения данных по конкретному источнику rss, необходимо передать url в get-запросе. Например, так:

```
https://mchlv.ru/apis/rss/?url=https://thecode.media/feed/

```
