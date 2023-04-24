import { useState } from "react";
import { StyledForm } from "../../components/styledForm";
import { Loading } from "../../components/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
    const [registrationData, setRegistrationData] = useState({ name: "", email: "", password: "", passwordConfirm: "" });
    const [request, setRequest] = useState(false);
    const navigate = useNavigate();

    async function registerRequest(event) {
        event.preventDefault();
        setRequest(true);

        const url = process.env.REACT_APP_SIGN_UP_URL;
        const { passwordConfirm, ...register } = registrationData;

        if (registrationData.password !== registrationData.passwordConfirm) {
            setRequest(false);
            return alert("Senhas diferentes");
        }

        try {
            await axios.post(url, register);

            const { name, ...loginData } = register;
            // const loginData = {email: "asdhgs@asdasd.com", password: "123"} para testar mensagens de erro no catch
            const urlLogin = process.env.REACT_APP_SIGN_IN_URL;

            const userRegister = await axios.post(urlLogin, loginData);
            navigate("/home");

        } catch (error) {
            setRequest(false);
            alert(error.response.data);
        }
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