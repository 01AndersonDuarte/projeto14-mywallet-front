import FormRegister from "./FormRegister";
import { LinkN, Container } from "../../components/styledForm";
import { useEffect } from "react";

export default function RegisterPage(){

    useEffect(()=>{
        localStorage.removeItem("user");
    }, [])
    
    return (
        <Container>
            <p>MyWallet</p>
            <FormRegister />
            <LinkN to="/"><h2>Já tem uma conta? Entre agora!</h2></LinkN>
        </Container>
    );
}