import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import NotFoundPage from "./pages/not-found.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>hello world</div>,
		errorElement: <NotFoundPage/>
	},
	{
		path: "/login",
		element: <LoginPage/>
	},
	{
		path: "/register",
		element: <RegisterPage/>
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>,
)
