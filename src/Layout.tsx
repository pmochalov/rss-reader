import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

import common from "./styles/Common.module.css";

const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <div className={common.container}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export { Layout };
