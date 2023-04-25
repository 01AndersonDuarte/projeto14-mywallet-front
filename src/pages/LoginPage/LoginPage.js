import FormLogin from "./FormLogin";
import { LinkN, Container } from "../../components/styledForm";
import { useEffect } from "react";

export default function LoginPage() {

    useEffect(()=>{
        localStorage.removeItem("user");
    }, [])

    return (
        <Container>
            <p>MyWallet</p>
            <FormLogin />
            <LinkN to="/cadastro"><h2>Primeira vez? Cadastre-se!</h2></LinkN>
        </Container>
    );
}