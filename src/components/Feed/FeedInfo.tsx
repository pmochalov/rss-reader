import s from "./Feed.module.css";

import { Feed } from "../../@types";

type FeedInfoProps = Pick<Feed, "title" | "description" | "link">;

const FeedInfo: React.FC<FeedInfoProps> = ({ title, description, link }) => {
    return (
        <div className={s.info}>
            <div className={s.feed__title}>{title}</div>
            <div className={s.feed__description}>{description}</div>
            <div>
                <a href={link ?? ""} target='_blank'>
                    {link}
                </a>
            </div>
        </div>
    );
};

export { FeedInfo };
