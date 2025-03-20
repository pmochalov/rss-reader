import { Card } from "./components/Card/Card";

const Home = () => {
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

export { Home };
