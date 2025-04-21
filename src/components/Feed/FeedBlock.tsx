import { useEffect, useRef, useState } from "react";

import s from "./Feed.module.css";
import { FeedInfo } from "./FeedInfo";
import { FeedCards } from "./FeedCards";
import { Feed } from "../../@types";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type FeedProps = {
    url: string;
};

const FeedBlock: React.FC<FeedProps> = ({ url }) => {
    const [data, setData] = useState<Feed | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const elemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const fetchData = async (url: string): Promise<Feed | null> => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_APP_PROXY}?url=${encodeURIComponent(
                        url
                    )}`
                );

                // Проверяем статус ответа
                if (!response.ok) {
                    console.error("Ошибка HTTP:", response.status);
                    return null;
                }

                // Парсим JSON
                const rawData = await response.json();

                return rawData as Feed;
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
                return null;
            }
        };

        const callback: IntersectionObserverCallback = (entries) => {
            if (entries.length === 0) return;

            const entry = entries[0];

            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                const target = entry.target;

                fetchData(url)
                    .then((data) => {
                        if (data) {
                            setData(data);
                            target.classList.remove("feeds_loading");
                        }
                        if (elemRef.current) {
                            observer.unobserve(elemRef.current);
                        }
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        };

        const observer = new IntersectionObserver(callback, {
            rootMargin: "0px",
            threshold: 0.3, // 30%
        });

        if (elemRef.current) {
            observer.observe(elemRef.current);
        }

        return () => {
            if (elemRef.current) {
                observer.unobserve(elemRef.current);
            }
            observer.disconnect();
            setData(null);
        };
    }, [url]);

    return (
        <div ref={elemRef} className={s.feeds}>
            {loading ? (
                <Skeleton count={5} height={"10rem"} />
            ) : (
                data && (
                    <section className={s.feed}>
                        <FeedInfo
                            title={data.title}
                            description={data.description}
                            link={data.link}
                        />
                        <FeedCards items={data.items} />
                    </section>
                )
            )}
        </div>
    );
};

export { FeedBlock };
