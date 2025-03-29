import { Outlet } from "react-router-dom";

import s from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { FeedsMenu } from "../FeedsMenu/FeedsMenu";
import { Feedstest } from "../FeedsTest/Feedstest";

const Layout = () => {
    return (
        <>
            <Header />

            <div className={s.main__aside}>
                <FeedsMenu />
            </div>
            <div className={s.main__feedslist}>
                <Feedstest />
            </div>
            <div className={s.main__outlet}>
                <Outlet />
            </div>

            <Footer />
        </>
    );
};

export { Layout };
