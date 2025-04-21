import { createRoot } from "react-dom/client";
import "./index.css";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";

import { store } from "./store.ts";
import { Provider } from "react-redux";

import { Layout } from "./components/Layout/Layout.tsx";
import { Feeds } from "./pages/Feeds/Feeds.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            element={<Layout />}
            errorElement={<>Страница ошибки</>}
        >
            <Route index element={<Feeds />} />
            <Route path='category/:id' element={<Feeds />} />
        </Route>
    ),
    {
        // basename: import.meta.env.VITE_BASENAME,
    }
);

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
