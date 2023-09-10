import React from "react";
import {Link} from "react-router-dom";

const AuthLayouts = (props) => {
	const {children, title, type} = props

	return (
		<div className="flex justify-center items-center min-h-screen gap-x-2">
			<div className="w-full max-w-xs">
				<h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
				<p className="font-medium text-slate-500 mb-8">
					Welcome, please enter your details to continue.
				</p>
				{children}
				<Navigation type={type}/>
			</div>
		</div>
	)
}

const Navigation = ({type}) => {
	if (type === "login") {
		return (
			<p className="mt-5 text-center">Dont have an account? {" "}
				<Link to="/register" className="font-bold text-blue-600">Register</Link>
			</p>
		)
	} else {
		return (
			<p className="mt-5 text-center">Have an account? {" "}
				<Link to="/login" className="font-bold text-blue-600">Login</Link>
			</p>
		)
	}
}

export default AuthLayouts