import { useState } from "react";
import { useAppDispatch } from "../../hooks";

import { addFeedItem } from "../../slices/menuFeedsSlice";

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
        <form onSubmit={handleSubmit}>
            <input type='text' value={title} onChange={handleChange} />
            <button type='submit' disabled={title.trim().length === 0}>
                Добавить
            </button>
        </form>
    );
};

export { FeedAddForm };
