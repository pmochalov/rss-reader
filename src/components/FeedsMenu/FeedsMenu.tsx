import { useAppSelector } from "../../hooks";
import s from "./FeedsMenu.module.css";
import { FeedAddForm } from "./FeedAddForm";
import { Link } from "react-router-dom";

const FeedsMenu: React.FC = () => {
    const { items } = useAppSelector((state) => state.menufeeds);

    return (
        <>
            <nav className={s.menu}>
                {items.map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id}>
                        {item.title}
                    </Link>
                ))}
            </nav>
            <FeedAddForm />
        </>
    );
};

export { FeedsMenu };
