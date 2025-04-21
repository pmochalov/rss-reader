import { useState } from "react";

import s from "./../../styles/forms.module.css";
import b from "./../../styles/buttons.module.css";
import { useAddCategoryMutation } from "../../api/category";

const CategoryAddForm: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [addSection, { isLoading }] = useAddCategoryMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await addSection({ title }).finally(() => setTitle(""));
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
                disabled={isLoading}
            />
            <button
                type='submit'
                disabled={isLoading || title.trim().length === 0}
                className={b.button}
            >
                {isLoading ? "Загрузка..." : "Добавить"}
            </button>
        </form>
    );
};

export { CategoryAddForm };
