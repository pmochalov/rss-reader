// Категория
export type Category = {
    id: number;
    title: string;
    urls: string[]
}

// Поток
export type Feed = {
    id: number;
    user_id: number;
    category_id: number | null;
    title: string | null;
    url: string;
    description: string | null;
    image: string | null;
    link: string | null;
    items: FeedItem[];
    datetime_added: string;
}


// Поток, который добавляется в БД
export type FeedCandidate = Pick<Feed, "category_id" | "title" | "url">

//
export type FeedItem = {
    title: string;
    link: string;
    pubDate: string;
    description: string;
}



