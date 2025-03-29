import s from "./Feed.module.css";

import { Feed } from "../../@types";

type FeedInfoProps = Pick<Feed, "title" | "description" | "image" | "link">;

const FeedInfo: React.FC<FeedInfoProps> = ({
    title,
    description,
    image,
    link,
}) => {
    return (
        <div className={s.info}>
            <div className={s.info__image}>
                {image.length !== 0 ? (
                    <a href={link} title={title} target='_blank'>
                        <img src={image} alt={title} />
                    </a>
                ) : (
                    <span>Нет лого</span>
                )}
            </div>
            <div className={s.info__data}>
                <div className={s.feed__title}>{title}</div>
                <div>{description}</div>
                <div>
                    <a href={link} target='_blank'>
                        {link}
                    </a>
                </div>
            </div>
        </div>
    );
};

export { FeedInfo };
