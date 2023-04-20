import styled from "styled-components";
import FormLogin from "./FormLogin";
import { Link } from "react-router-dom";

export default function LoginPage() {

    return (
        <Container>
            <p>MyWallet</p>
            <FormLogin />
            <LinkN to="/cadastro"><h2>Primeira vez? Cadastre-se!</h2></LinkN>
        </Container>
    );
}
const LinkN = styled(Link)`
    text-decoration: none;
`;
const Container = styled.div`
    width: 100%;
    padding: 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-family: 'Saira Stencil One';
        color: #FFFFFF;
        font-weight: 400;
        font-size: 32px;
        margin-bottom: 10%;
    }
    h2{
        font-family: 'Raleway';
        font-size: 15px;
        font-weight: 700;
        color: #FFFFFF;
        margin-top: 5%;
    }
`;