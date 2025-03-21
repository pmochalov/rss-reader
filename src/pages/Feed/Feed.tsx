import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { List } from "../../components/List/List";

type Feed = {
    id: number;
    title: string;
};

const Feed: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [feed, setFeed] = useState<Feed | null>();

    const { items } = useAppSelector((state) => state.menufeeds);

    useEffect(() => {
        const c = items.find((c) => c.id === Number(id)) || null;
        setFeed(c);
    }, [id]);

    if (!feed) {
        return <h1>Такой категории нет.</h1>;
    }

    return (
        <>
            <h1>{feed.title}</h1>
            <List />
        </>
    );
};

export { Feed };
