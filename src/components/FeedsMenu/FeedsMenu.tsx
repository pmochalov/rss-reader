import { useAppSelector } from "../../hooks";
import s from "./FeedsMenu.module.css";
import { FeedAddForm } from "./FeedAddForm";

const FeedsMenu: React.FC = () => {
    const { items } = useAppSelector((state) => state.menufeeds);

    return (
        <>
            <nav className={s.menu}>
                {items.map((item) => (
                    <a href={`/${item.id}`} key={item.id}>
                        {item.title}
                    </a>
                ))}
            </nav>
            <FeedAddForm />
        </>
    );
};

export { FeedsMenu };
