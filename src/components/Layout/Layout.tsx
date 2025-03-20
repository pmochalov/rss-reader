import { Outlet } from "react-router-dom";

import s from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <div className={s.main}>
                <div className={s.main__aside}>
                    <nav className={s.main__categories}>
                        <a href='/'>Все потоки</a>
                        <a href='/'>Новости</a>
                        <a href='/'>Спорт</a>
                        <a href='/'>Творчество</a>
                        <a href='/'>Технлогии</a>
                    </nav>
                </div>
                <div className={s.main__outlet}>
                    <Outlet />
                </div>
                <div className={s.main__empty}></div>
            </div>
            <Footer />
        </>
    );
};

export { Layout };
