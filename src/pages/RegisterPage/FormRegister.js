import { useState } from "react";
import { StyledForm } from "../../components/styledForm";
import { Loading } from "../../components/Loading";

export default function FormRegister() {
    const [registrationData, setRegistrationData] = useState({ name: "", email: "", password: "", passwordConfirm: "" });
    const [request, setRequest] = useState(false);

    function registerRequest(event){
        event.preventDefault();
        setRequest(true);
        // Requisição aqui

    }

    function insertRegistrationData(event) {
        event.target.setCustomValidity('');
        const value = event.target.value;
        const attribute = event.target.name;

        setRegistrationData({ ...registrationData, [attribute]: value });
    }

    return (
        <StyledForm onSubmit={registerRequest}>
            <input
                disabled={request}
                type="text"
                placeholder="Nome"
                name="name"
                value={registrationData.name}
                onChange={insertRegistrationData}
                required
                onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
            />
            <input
                disabled={request}
                type="email"
                placeholder="Email"
                name="email"
                value={registrationData.email}
                onChange={insertRegistrationData}
                required
                onInvalid={(event) => event.target.setCustomValidity('Por favor, insira um email válido.')}
            />
            <input
                disabled={request}
                type="password"
                placeholder="Senha"
                name="password"
                value={registrationData.password}
                onChange={insertRegistrationData}
                required
                onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
            />
            <input
                disabled={request}
                type="password"
                placeholder="Confirme a senha"
                name="passwordConfirm"
                value={registrationData.passwordConfirm}
                onChange={insertRegistrationData}
                required
                onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
            />
            <button type="submit" disabled={request}>{request ? <Loading /> : 'Cadastrar'}</button>
        </StyledForm>
    );
}