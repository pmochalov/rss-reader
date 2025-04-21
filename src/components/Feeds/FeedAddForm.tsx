import { useState } from "react";

import s from "./../../styles/forms.module.css";
import b from "./../../styles/buttons.module.css";

import { useAddFeedMutation } from "../../api/feed";
import { useAppSelector } from "../../hooks";

const FeedAddForm: React.FC = () => {
    const [url, setUrl] = useState<string>("");

    const [addFeed, { isLoading }] = useAddFeedMutation();

    const { current } = useAppSelector((state) => state.categories);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await addFeed({ category_id: current, url, title: null }).finally(() =>
            setUrl("")
        );
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = e.target;

        setUrl(value);
    };

    if (isLoading) {
        return <div className={s.loader}>Загрузка...</div>;
    }

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <input
                type='text'
                value={url}
                onChange={handleChange}
                className={s.input}
                placeholder='https://'
            />
            <button
                type='submit'
                disabled={url.trim().length === 0}
                className={b.button}
            >
                {isLoading ? "Загрузка..." : "Добавить поток"}
            </button>
        </form>
    );
};

export { FeedAddForm };
