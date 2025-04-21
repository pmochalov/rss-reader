import { FeedsList } from "../../components/FeedsList/FeedsList";

import { useGetLinksQuery } from "../../api/feed";
import { useParams } from "react-router-dom";

const Feeds: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const category_id = id ? +id : 0;

    const linksData = useGetLinksQuery({ category_id });
    const { data, isLoading } = linksData;

    if (isLoading) {
        return <>Загрузка...</>;
    }

    return (
        <div>
            {data && data.length > 0 ? (
                <FeedsList urls={data.map((item) => item.url)} />
            ) : (
                <div>Ничего не найдено.</div>
            )}
        </div>
    );
};

export { Feeds };
