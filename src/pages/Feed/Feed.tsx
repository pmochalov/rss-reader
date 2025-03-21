import { useParams } from "react-router-dom";

const Feed: React.FC = () => {
    const { id } = useParams();

    return <>Страница потока с id: {id}</>;
};

export { Feed };
