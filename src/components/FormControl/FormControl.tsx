import React, { ChangeEventHandler, useState } from "react";
import "./styles.scss";

interface FormControlProps {
	name: string;
	id: string | number;
	type?: string;
	placeholder?: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	errorMessage: string;
	required?: boolean;
}

export function FormControl({
	label,
	id,
	type = "text",
	placeholder = "",
	onChange,
	errorMessage,
	name,
	required
}: FormControlProps) {
	const [inputIsDirty, setInputIsDirty] = useState(false);

	function handleBlur() {
		setInputIsDirty(true);
	}

	return (
		<div className="form-ctrl">
			<label htmlFor={String(id)}>
				<span className="sr-only">{label}</span>
			</label>
			<input
				className="input-cadastro"
				name={name}
				type={type}
				placeholder={placeholder}
				id={String(id)}
				onChange={onChange}
				required={required}
				data-dirty={inputIsDirty}
				onBlur={handleBlur}
			/>
			<span role="alert">{errorMessage}</span>
		</div>
	);
}

