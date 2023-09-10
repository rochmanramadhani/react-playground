import InputForm from "../Elements/Input/index.jsx";
import React from "react";
import Button from "../Elements/Button/index.jsx";

const FormLogin = () => {
	return (
		<form action="">
			<InputForm label="Email" type="email" placeholder="example@email.com" name="email"/>
			<InputForm label="Password" type="password" placeholder="********" name="password"/>
			<Button classname="bg-blue-600 w-full">Login</Button>
		</form>
	)
}

export default FormLogin;