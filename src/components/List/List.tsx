import { Card } from "../Card/Card";

const List: React.FC = () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "auto",
                gap: "28px",
            }}
        >
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export { List };
