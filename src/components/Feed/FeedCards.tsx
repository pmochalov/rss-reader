import s from "./Feed.module.css";
import { Card } from "../Card/Card";

import { FeedItem } from "../../@types";

type FeedListProps = {
    items: FeedItem[];
};

const FeedCards: React.FC<FeedListProps> = ({ items }) => {
    return (
        <div className={s.feed__list}>
            {items.map((item: FeedItem, i) => (
                <Card
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    published={item.published}
                    author={item.author}
                    key={i}
                />
            ))}
        </div>
    );
};

export { FeedCards };
