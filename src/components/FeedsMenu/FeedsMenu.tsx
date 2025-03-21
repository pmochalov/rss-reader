import { useState } from "react";
import { useAppSelector } from "../../hooks";
import s from "./FeedsMenu.module.css";

const FeedsMenu: React.FC = () => {
    const { items } = useAppSelector((state) => state.menufeeds);

    return (
        <>
            <nav className={s.menu}>
                {items.map((item) => (
                    <a href={`/${item.id}`}>{item.title}</a>
                ))}
            </nav>
            <FeedAddForm />
        </>
    );
};

const FeedAddForm: React.FC = () => {
    const [title, setTitle] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = e.target;

        setTitle(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' title={title} onChange={handleChange} />
            <button type='submit' disabled={title.trim().length === 0}>
                Добавить
            </button>
        </form>
    );
};

export { FeedsMenu };
