import { useAppSelector } from "../../hooks";
import s from "./FeedsMenu.module.css";
import { FeedAddForm } from "./FeedAddForm";
import { NavLink, useLocation } from "react-router-dom";

const FeedsMenu: React.FC = () => {
    const { pathname } = useLocation();

    const { items } = useAppSelector((state) => state.sections);
    const count = items.map((item) => item.urls).flat().length;

    return (
        <>
            <nav className={s.menu}>
                <NavLink
                    to='/'
                    className={`${pathname === "/" ? s.active : ""}`}
                >
                    {import.meta.env.VITE_ROOT_MENU_ITEM}{" "}
                    <small className={s.count}>{count}</small>
                </NavLink>
                {items.map((item) => (
                    <NavLink
                        to={`/feed/${item.id}`}
                        className={({ isActive }) =>
                            `${isActive ? s.active : ""}`
                        }
                        key={item.id}
                    >
                        {item.title}{" "}
                        <small className={s.count}>{item.urls.length}</small>
                    </NavLink>
                ))}
            </nav>
            <FeedAddForm />
        </>
    );
};

export { FeedsMenu };
