import common from "./../../styles/common.module.css";
import s from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            {" "}
            <div className={common.containerFluid}>
                <footer className={s.footer}>
                    2025 <a href='/'>Читалка</a>
                </footer>
            </div>
        </footer>
    );
};

export { Footer };
