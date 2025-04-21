import s from "./Categories.module.css";

import { NavLink, useLocation } from "react-router-dom";
import { useGetCategoriesQuery } from "../../api/category";

import { useAppSelector } from "../../hooks";
import { CategoryAddForm } from "./CategoryAddForm";

const Categories: React.FC = () => {
    const { pathname } = useLocation();

    const { token } = useAppSelector((state) => state.auth);

    const { data, isLoading, error } = useGetCategoriesQuery(undefined, {
        skip: !token,
    });

    if (isLoading) {
        return <div className={s.loader}>Загрузка...</div>;
    }

    if (error) {
        return <div className={s.error}>Ошибка загрузки категорий.</div>;
    }

    return (
        <div className={s.categories}>
            <nav className={s.menu}>
                <NavLink
                    to='/'
                    className={`${pathname === "/" ? s.active : ""}`}
                >
                    {import.meta.env.VITE_ROOT_MENU_ITEM || "Главная"}
                </NavLink>

                {data && data.length > 0 ? (
                    data.map((item) => (
                        <NavLink
                            key={item.id}
                            to={`/category/${item.id}`}
                            className={({ isActive }) =>
                                `${isActive ? s.active : ""}`
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))
                ) : (
                    <div className={s.noSections}>Нет доступных категорий.</div>
                )}
            </nav>

            <CategoryAddForm />
        </div>
    );
};

export { Categories };
