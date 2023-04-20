import FormRegister from "./FormRegister";
import { LinkN, Container } from "../../components/styledForm";

export default function RegisterPage(){
    return (
        <Container>
            <p>MyWallet</p>
            <FormRegister />
            <LinkN to="/"><h2>Já tem uma conta? Entre agora!</h2></LinkN>
        </Container>
    );
}