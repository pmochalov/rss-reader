import { useAppSelector } from "../../hooks";

const Feedstest: React.FC = () => {
    // const { current, items } = useAppSelector((state) => state.sections);

    // const urls =
    //     current !== null
    //         ? items.find((section) => section.id === current).urls
    //         : items.map((s) => s.urls).flat();

    return (
        <div>
            Меню с потоками
            {/* <ul>
                {urls.map((u, i) => (
                    <div key={i}>{u}</div>
                ))}
            </ul> */}
        </div>
    );
};

export { Feedstest };
