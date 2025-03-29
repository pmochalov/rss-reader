import { FeedsList } from "./components/FeedsList/FeedsList";
import { useAppSelector } from "./hooks";

const Home = () => {
    const { items } = useAppSelector((state) => state.sections);

    const urls = items.map((item) => item.urls).flat();

    return (
        <FeedsList title={import.meta.env.VITE_ROOT_MENU_ITEM} urls={urls} />
    );
};
export { Home };
