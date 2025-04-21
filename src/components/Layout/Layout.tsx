import { useEffect } from "react";

import { Outlet, useMatch } from "react-router-dom";

import s from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Categories } from "../Categories/Categories";
import { Feeds } from "../Feeds/Feeds";

import { setCurrentSection } from "../../slices/categoriesSlice";
import { fetchToken } from "../../slices/authSlice";

import { useAppDispatch, useAppSelector } from "../../hooks";

const Layout = () => {
    const match = useMatch("/category/:id");

    const dispatch = useAppDispatch();
    const { status: tokenStatus } = useAppSelector((state) => state.auth);

    useEffect(() => {
        dispatch(setCurrentSection(match ? Number(match.params.id) : null));
    }, [match]);

    useEffect(() => {
        if (tokenStatus === "idle") {
            dispatch(fetchToken());
        }
    }, [dispatch, tokenStatus]);

    return (
        <>
            <Header />

            <div className={s.main__aside}>
                <Categories />
            </div>
            <div className={s.main__feedslist}>
                <Feeds />
            </div>
            <div className={s.main__outlet}>
                <Outlet />
            </div>

            <Footer />
        </>
    );
};

export { Layout };
