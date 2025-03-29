import { useAppSelector } from "../../hooks";

const Feedstest: React.FC = () => {
    const { current, items } = useAppSelector((state) => state.sections);

    const itemsfiltered = current
        ? items.filter((section) => section.id === current)
        : items;

    const urls = itemsfiltered.map((i) => i.urls).flat();

    return (
        <div>
            <ul>
                {urls.map((u, i) => (
                    <div key={i}>{u}</div>
                ))}
            </ul>
        </div>
    );
};

export { Feedstest };
