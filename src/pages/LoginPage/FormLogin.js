import { useState } from "react";
import { StyledForm } from "../../components/styledForm";
import { Loading } from "../../components/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const [request, setRequest] = useState(false);
    const navigate = useNavigate();

    function insertLoginData(event) {
        event.target.setCustomValidity('');
        const value = event.target.value;
        const attribute = event.target.name;

        setLoginData({ ...loginData, [attribute]: value });
    }
    function loginRequest(event) {
        event.preventDefault();
        setRequest(true);

        const url = process.env.REACT_APP_SIGN_IN_URL;

        axios.post(url, loginData).then((response) => {
            const objectSerial = JSON.stringify({token: response.data.token});
            localStorage.setItem("user", objectSerial);
            navigate("/home");
            
        }).catch((error) => {
            setRequest(false);
            alert(error.response.data);
        });
    }
    return (
        <StyledForm onSubmit={loginRequest}>
            <input
                disabled={request}
                type="email"
                placeholder="E-mail"
                name="email"
                value={loginData.email}
                onChange={insertLoginData}
                required
                onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha um endereço de e-mail válido.')}
            />
            <input
                disabled={request}
                type="password"
                placeholder="Senha"
                name="password"
                value={loginData.password}
                onChange={insertLoginData}
                required
                onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha todos os campos.')}
            />
            <button type="submit" disabled={request}>{request ? <Loading /> : 'Entrar'}</button>
        </StyledForm>
    );
}