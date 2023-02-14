import { FormEvent, useState } from "react";
import { FormControl } from "../../components/FormControl/FormControl";
import "../../sass/pages/cadastro.scss";

const inputs = [
	{
		id: 1,
		name: "nome",
		type: "text",
		placeholder: "Nome completo",
		errorMessage: "Campo nome é obrigatório",
		label: "Nome completo",
		required: true,
	},
	{
		id: 2,
		name: "email",
		type: "email",
		placeholder: "Email",
		errorMessage: "Campo email é obrigatório",
		label: "Email",
		required: true,
	},
	{
		id: 3,
		name: "cpf",
		type: "text",
		placeholder: "CPF",
		errorMessage: "Campo CPF é obrigatório",
		label: "CPF",
		required: true,
	},
	{
		id: 4,
		name: "telefone",
		type: "text",
		placeholder: "Telefone",
		errorMessage: "Campo telefone é obrigatório",
		label: "Telefone",
		required: true,
	},
	{
		id: 5,
		name: "senha",
		type: "password",
		placeholder: "Senha",
		errorMessage: "Campo senha é obrigatório",
		label: "Senha",
		required: true,
	},
	{
		id: 6,
		name: "confirmarSenha",
		type: "password",
		placeholder: "Confirmar Senha",
		errorMessage: "Campo senha é obrigatório",
		label: "Confirmar senha",
		required: true,
	},
];

export function CadastroPage() {
	const [formData, setFormData] = useState({
		nome: "",
		email: "",
		senha: "",
		confirmarSenha: "",
		cpf: "",
		telefone: "",
	})

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if(formData.senha !== formData.confirmarSenha) {
			alert("As senhas não são iguais")
		}
		console.log(formData);
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	}

	return (
		<main>
			<div className="formulario-container">
				<form
					onSubmit={handleSubmit}
					className="formulario-cadastro"
				>
					<h2 className="mensagem-cadastro">
						Bem vindo a tela de cadastro
					</h2>
					<div className="input-container">
						{inputs.map(({ label, errorMessage, id, name, placeholder, type, required }) => (
							<FormControl key={id} label={label} errorMessage={errorMessage} id={id} name={name} placeholder={placeholder} onChange={handleChange} type={type} required={required} />
						))}
					</div>
					<div className="botao-formulario">
						<button className="botaoEscuroMenor">Finalizar</button>
					</div>
				</form>
			</div>
		</main>
	);
}

