import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/RootLayout/RootLayout.tsx";
import {Content} from "./components/Content/Content.tsx";
import {Homepage} from "./components/Homepage/Homepage.tsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path={"/"} element={<RootLayout/>}>
        <Route index element={<Homepage/>}></Route>
        <Route path={"content/:id"} element={<Content/>}></Route>
    </Route>
))
const App: React.FC = () => {
    return (
        <>
            <div>
                <RouterProvider router={router}/>
            </div>
        </>)
}

export default App
