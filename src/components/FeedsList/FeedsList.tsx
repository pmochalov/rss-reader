import { Section } from "../../@types";
import { FeedBlock } from "../Feed/FeedBlock";
import s from "./FeedsList.module.css";

type FeedListProps = {
    title: Section["title"];
    urls: Section["urls"];
};

const FeedsList: React.FC<FeedListProps> = ({ title, urls }) => {
    return (
        <div className={s.feeds}>
            <h1>{title}</h1>
            <div className={s.feeds__list}>
                {urls.map((url, index) => (
                    <FeedBlock url={url} key={index} />
                ))}
            </div>
        </div>
    );
};

export { FeedsList };
