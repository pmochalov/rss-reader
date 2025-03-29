export type Feed = {
    title: string;
    description: string;
    link: string;
    image: string;
    category: string[];
    items: FeedItem[];
}

export type FeedItem = {
    id: any;
    title: string;
    description: string;
    link: string;
    author: string;
    published: number;
}

export type Section = {
    id: number;
    title: string;
    urls: string[]
}