import { Card } from "../Card/Card";
import s from "./List.module.css";

type ListProps = {
    title: string;
};

const List: React.FC<ListProps> = ({ title }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <h1>{title}</h1>
            <div className={s.list}>
                <Card />
                <Card />
            </div>
        </div>
    );
};

export { List };
