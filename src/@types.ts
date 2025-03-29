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
    created: number;
    published: number;
    category: string[];
    // enclosures: string[];
    // media: any;
}

export type Section = {
    id: number;
    title: string;
    urls: string[]
}