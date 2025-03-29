import { useState } from "react";
import { useAppDispatch } from "../../hooks";

import { addSection } from "../../slices/sectionsSlice";

import s from "./../../styles/forms.module.css";
import b from "./../../styles/buttons.module.css";

const LinkAddForm: React.FC = () => {
    const [url, setUrl] = useState<string>("");

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // dispatch(
        //     addSection({
        //         id: Date.now(),
        //         title,
        //         urls: [],
        //     })
        // );
        // setTitle("");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = e.target;

        setUrl(value);
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <input
                type='text'
                value={url}
                onChange={handleChange}
                className={s.input}
                placeholder='URL feed'
            />
            <button
                type='submit'
                disabled={url.trim().length === 0}
                className={b.button}
            >
                Добавить
            </button>
        </form>
    );
};

export { LinkAddForm };
