import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway';

    input{
        width: 100%;
        margin: 2%;
        padding: 5%;
        border: solid 1px rgba(212, 212, 212, 1);
        border-radius: 5px;
        outline: 0;
        font-weight: 400;
    }
    input:focus{
        transform: scale(1.07);
    }
    input:focus::-webkit-input-placeholder {
        color: transparent;
    }
    button{
        color: #FFFFFF;
        font-weight: 700;
        font-size: 18px;
        background-color: #bc5ae5;
          

        width: 100%;
        margin: 2%;
        padding: 3%;
        
        border: solid 1px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
    }
`;

export const LinkN = styled(Link)`
    text-decoration: none;
`;

export const Container = styled.div`
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