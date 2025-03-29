import { useEffect, useRef, useState } from "react";

import s from "./Feed.module.css";
import { FeedInfo } from "./FeedInfo";

import { parse } from "rss-to-json";
import { FeedList } from "./FeedList";
import { Feed } from "../../@types";

type FeedProps = {
    url: string;
};

const FeedBlock: React.FC<FeedProps> = ({ url }) => {
    const [data, setData] = useState<Feed | null>();
    const [loading, setLoading] = useState<boolean>(true);

    const elemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const fetchData = async (url: string): Promise<Feed | null> => {
            try {
                const data = await parse(
                    `${import.meta.env.VITE_APP_PROXY}?url=${url}`
                );
                return data as Feed;
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
                            // target.style.minHeight = "inherit";
                            // target.style.border = "#000 1px solid";
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
                <div>Загрузка...</div>
            ) : (
                data && (
                    <section className={s.feed}>
                        <FeedInfo
                            title={data.title}
                            description={data.description}
                            image={data.image}
                            link={data.link}
                        />
                        <FeedList items={data.items} />
                    </section>
                )
            )}
        </div>
    );
};

export { FeedBlock };
