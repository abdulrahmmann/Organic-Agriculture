import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/Home/HomePage.tsx";
import {AboutPage} from "./pages/About/AboutPage.tsx";

const root = createBrowserRouter([
    {
        path: '/', element: <HomePage/>
    },
    {
        path: '/about', element: <AboutPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
         <RouterProvider router={root}/>
    </React.StrictMode>,
)
