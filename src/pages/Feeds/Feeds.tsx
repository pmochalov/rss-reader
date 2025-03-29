import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { Section } from "../../@types";

import { FeedsList } from "../../components/FeedsList/FeedsList";

const Feeds: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [section, setSection] = useState<Section | null>();

    const { items } = useAppSelector((state) => state.sections);

    useEffect(() => {
        setSection(items.find((item) => item.id === Number(id)) || null);

        return () => setSection(null);
    }, [id]);

    if (!section) {
        return <h1>Такой категории нет.</h1>;
    }

    return <FeedsList title={section.title} urls={section.urls} />;
};

export { Feeds };
