import Label from "./Label.jsx";
import Input from "./Input.jsx";

const InputForm = (props) => {
	const {label, type = "text", placeholder = "Input", name} = props
	return (
		<div className="mb-6">
			<Label htmlFor={name}>{label}</Label>
			<Input name={name} type={type} placeholder={placeholder}/>
		</div>
	)
}

export default InputForm;