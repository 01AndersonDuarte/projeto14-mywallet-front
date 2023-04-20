import FormLogin from "./FormLogin";
import { LinkN, Container } from "../../components/styledForm";

export default function LoginPage() {

    return (
        <Container>
            <p>MyWallet</p>
            <FormLogin />
            <LinkN to="/cadastro"><h2>Primeira vez? Cadastre-se!</h2></LinkN>
        </Container>
    );
}