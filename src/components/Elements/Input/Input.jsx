const Input = (prop) => {
	const {type, placeholder, name} = prop;
	return (
		<input
			className="text-sm border rounded w-full py-2 px-3 text-slate-700"
			type={type}
			name={name}
			id={name}
			placeholder={placeholder}
		/>
	)
}

export default Input