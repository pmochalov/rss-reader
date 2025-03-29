import { FeedsList } from "./components/FeedsList/FeedsList";
import { useAppSelector } from "./hooks";

const Home = () => {
    const { items } = useAppSelector((state) => state.sections);

    const urls = items.map((item) => item.urls).flat();

    return <FeedsList title={"Все потоки"} urls={urls} />;
};
export { Home };
