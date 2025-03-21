import { useAppSelector } from "../../hooks";
import s from "./Menu.module.css";

const Menu: React.FC = () => {
    const { items } = useAppSelector((state) => state.menu);

    return (
        <nav className={s.menu}>
            {items.map((item) => (
                <a href={`/${item.id}`}>{item.title}</a>
            ))}
        </nav>
    );
};

export { Menu };
