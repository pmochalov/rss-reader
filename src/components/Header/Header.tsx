import { Link } from "react-router-dom";
import common from "./../../styles/common.module.css";
import s from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className={common.container}>
                <Link to='/' className={s.logo} title='Читалка RSS'>
                    Читалка
                </Link>
            </div>
        </header>
    );
};

export { Header };
