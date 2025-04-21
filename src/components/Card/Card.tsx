import s from "./Card.module.css";

type CardProps = {
    title: string;
    description: string;
    link: string;
    pubDate: string;
};

const Card: React.FC<CardProps> = ({ title, description, link, pubDate }) => {
    return (
        <div className={s.card}>
            <a href={link} className={s.card__title}>
                {title}
            </a>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div className={s.card__panel}>
                <div className={s.card__pubdata}>
                    <span>{new Date(pubDate).toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export { Card };
