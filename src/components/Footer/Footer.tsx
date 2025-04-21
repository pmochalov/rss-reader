import common from "./../../styles/common.module.css";
import s from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            {" "}
            <div className={common.containerFluid}>
                2025{" "}
                <a href='https://mchlv.ru/projects/rss-reader'>RSS-ридер</a>
            </div>
        </footer>
    );
};

export { Footer };
