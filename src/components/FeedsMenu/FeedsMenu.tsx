import { useAppSelector } from "../../hooks";
import s from "./FeedsMenu.module.css";

const FeedsMenu: React.FC = () => {
    const { items } = useAppSelector((state) => state.menufeeds);

    return (
        <nav className={s.menu}>
            {items.map((item) => (
                <a href={`/${item.id}`}>{item.title}</a>
            ))}
        </nav>
    );
};

export { FeedsMenu };
