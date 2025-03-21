import { Outlet } from "react-router-dom";

import s from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Menu } from "../Menu/Menu";

const Layout = () => {
    return (
        <>
            <Header />
            <div className={s.main}>
                <div className={s.main__aside}>
                    <Menu />
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
