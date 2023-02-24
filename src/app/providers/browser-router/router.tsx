import { createBrowserRouter } from "react-router-dom";
import { Auth, Chat, Finances, GeneralReport, NotFoundPage, Settings, Shops, Stocks } from "pages";


export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/finances",
                element: <Finances />
            },
            {
                path: "/general-report",
                element: <GeneralReport />
            },
            {
                path: "/settings",
                element: <Settings />
            },
            {
                path: "/shops",
                element: <Shops />
            },
            {
                path: "/stocks",
                element: <Stocks />
            },
            {
                path: "/chat",
                element: <Chat />
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);
