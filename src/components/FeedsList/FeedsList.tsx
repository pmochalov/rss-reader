import { Category } from "../../@types";
import { FeedBlock } from "../Feed/FeedBlock";
import s from "./FeedsList.module.css";

type FeedListProps = {
    urls: Category["urls"];
};

const FeedsList: React.FC<FeedListProps> = ({ urls }) => {
    return (
        <div className={s.feeds}>
            <div className={s.feeds__list}>
                {urls.map((url, index) => (
                    <FeedBlock url={url} key={index} />
                ))}
            </div>
        </div>
    );
};

export { FeedsList };
