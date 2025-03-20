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

import { Home } from "./Home.tsx";
import { Layout } from "./Layout.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            element={<Layout />}
            errorElement={<>Страница ошибки</>}
        >
            <Route index element={<Home />} />
            {/* <Route path='category/:id' element={<Category />} /> */}
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
