import AuthLayouts from "../components/Layouts/AuthLayouts.jsx";
import FormRegister from "../components/Fragments/FormRegister.jsx";

const RegisterPage = () => {
	return (
		<AuthLayouts title="Register" type="register">
			<FormRegister/>
		</AuthLayouts>
	)
}

export default RegisterPage