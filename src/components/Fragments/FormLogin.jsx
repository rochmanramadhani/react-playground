import InputForm from "../Elements/Input/index.jsx";
import React from "react";
import Button from "../Elements/Button/index.jsx";

const FormLogin = () => {
	const handleLogin = (event) => {
		localStorage.setItem("email", event.target.email.value)
		localStorage.setItem("password", event.target.password.value)

		event.preventDefault()

		console.log(event.target.email.value)
		console.log(event.target.password.value)
		console.log("Login")

		window.location.href = "/product"
	}

	return (
		<form onSubmit={handleLogin}>
			<InputForm label="Email" type="email" placeholder="example@email.com" name="email"/>
			<InputForm label="Password" type="password" placeholder="********" name="password"/>
			<Button classname="bg-blue-600 w-full" type="submit">Login</Button>
		</form>
	)
}

export default FormLogin;
