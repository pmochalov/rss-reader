import common from "./../../styles/common.module.css";
import s from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className={common.container}>
                <a href='/' className={s.logo} title='Читалка RSS'>
                    Читалка
                </a>
            </div>
            <button className={s.toggleButton}>+</button>
        </header>
    );
};

export { Header };
