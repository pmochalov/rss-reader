import s from "./Feeds.module.css";

import { useParams, Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { FeedAddForm } from "./FeedAddForm";
import { useGetLinksQuery } from "../../api/feed";

const Feeds: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const category_id = id ? +id : 0;

    const { token } = useAppSelector((state) => state.auth);

    const { data, isLoading, error } = useGetLinksQuery(
        { category_id },
        {
            skip: !token, // Пропускаем запрос, если токен отсутствует
        }
    );

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    // Обработка ошибок
    if (error) {
        return <div>Ошибка загрузки потока.</div>;
    }

    return (
        <div className={s.feeds}>
            {data && data.length > 0 ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <Link to={`?id=${item.id}`}>
                                {item.title ?? item.url}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className={s.feeds__empty}>
                    Добавьте хотя бы один rss-источник.
                </div>
            )}

            <FeedAddForm />
        </div>
    );
};

export { Feeds };
