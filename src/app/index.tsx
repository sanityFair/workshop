import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import { ThemeProvider, router } from "./providers";

export const App = () => (
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
);
