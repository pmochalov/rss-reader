import { useState } from "react";
import { useAppDispatch } from "../../hooks";

import { addFeedItem } from "../../slices/menuFeedsSlice";

import s from "./../../styles/forms.module.css";
import b from "./../../styles/buttons.module.css";

const FeedAddForm: React.FC = () => {
    const [title, setTitle] = useState<string>("");

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(
            addFeedItem({
                id: Date.now(),
                title,
            })
        );
        setTitle("");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = e.target;

        setTitle(value);
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <input
                type='text'
                value={title}
                onChange={handleChange}
                className={s.input}
                placeholder='Название категории'
            />
            <button
                type='submit'
                disabled={title.trim().length === 0}
                className={b.button}
            >
                Добавить
            </button>
        </form>
    );
};

export { FeedAddForm };
