import { useAppSelector } from "../../hooks";
import s from "./FeedsMenu.module.css";
import { FeedAddForm } from "./FeedAddForm";
import { Link, NavLink, useLocation } from "react-router-dom";

const FeedsMenu: React.FC = () => {
    const { pathname } = useLocation();

    const { items } = useAppSelector((state) => state.menufeeds);

    return (
        <>
            <nav className={s.menu}>
                <NavLink
                    to='/'
                    className={`${pathname === "/" ? s.active : ""}`}
                >
                    Все потоки
                </NavLink>
                {items.map((item) => (
                    <NavLink
                        to={`/feed/${item.id}`}
                        className={({ isActive }) =>
                            `${isActive ? s.active : ""}`
                        }
                        key={item.id}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </nav>
            <FeedAddForm />
        </>
    );
};

export { FeedsMenu };
