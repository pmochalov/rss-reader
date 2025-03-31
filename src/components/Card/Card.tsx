import s from "./Card.module.css";

type CardProps = {
    title: string;
    description: string;
    link: string;
    published: number;
    author: string;
};

const Card: React.FC<CardProps> = ({
    title,
    description,
    link,
    published,
    author,
}) => {
    return (
        <div className={s.card}>
            <a href={link} className={s.card__title}>
                {title}
            </a>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div className={s.card__panel}>
                <div className={s.card__pubdata}>
                    <span>{new Date(published).toLocaleString()}</span>
                    <span>Автор: {author}</span>
                </div>
                <div className={s.card__links}>
                    <a href='/'>Читать потом</a>
                    <a href='/'>В избранное</a>
                </div>
            </div>
        </div>
    );
};

export { Card };
