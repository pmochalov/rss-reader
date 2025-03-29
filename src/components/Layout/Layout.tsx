import { useEffect } from "react";

import { Outlet, useMatch } from "react-router-dom";

import s from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { FeedsMenu } from "../FeedsMenu/FeedsMenu";
import { Feedstest } from "../FeedsTest/Feedstest";
import { useAppDispatch } from "../../hooks";
import { setCurrentSection } from "../../slices/sectionsSlice";

const Layout = () => {
    const match = useMatch("/feed/:id");

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentSection(match ? Number(match.params.id) : null));
    }, [match]);

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
