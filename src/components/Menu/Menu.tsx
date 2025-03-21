import s from "./Menu.module.css";

const Menu: React.FC = () => {
    return (
        <nav className={s.menu}>
            <a href='/'>Все потоки</a>
            <a href='/'>Новости</a>
            <a href='/'>Спорт</a>
            <a href='/'>Творчество</a>
            <a href='/'>Технлогии</a>
        </nav>
    );
};

export { Menu };
