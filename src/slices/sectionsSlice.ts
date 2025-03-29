import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Section } from '../@types';
// import type { PayloadAction } from '@reduxjs/toolkit'

const data = [
    { id: 1, title: "Блоги", urls: ["https://www.maximilyahov.ru/blog/rss/", "http://www.underworldmagazines.com/feed/", "https://feeds2.feedburner.com/webdesignerdepot?format=html", "https://lifehacker.ru/feed/", "https://cloud.mave.digital/51724", "https://webdesignerdepot.com/feed/"] },
    { id: 2, title: "Дизайн", urls: ["http://ilyabirman.ru/meanwhile/rss/", "https://www.awwwards.com/feed/"] },
    { id: 3, title: "Программирование", urls: ["https://thecode.media/feed/", "https://thecode.media/feed/"] },
    { id: 4, title: "Интересно", urls: ["https://www.nasa.gov/feeds/iotd-feed/", "https://tympanus.net/codrops/feed/", "https://davidwalsh.name/feed", "https://www.smashingmagazine.com/feed"] },
];

type SectionsState = {
    items: Section[]
}

const initialState: SectionsState = {
    items: [...data]
}

export const sectionsSlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {
        addSection: (state, action: PayloadAction<Section>) => {
            state.items = [...state.items, action.payload];
        },
    },
})

export const { addSection } = sectionsSlice.actions;

export default sectionsSlice.reducer;