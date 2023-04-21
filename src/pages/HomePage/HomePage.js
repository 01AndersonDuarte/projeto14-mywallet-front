import { useState } from "react";
import styled from "styled-components";

import { FiLogOut } from "react-icons/fi";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [userName, setUserName] = useState('Anderson');
    const navigate = useNavigate();

    return (
        <ContainerHome>
            <header>
                <h1>Olá, {userName} </h1>
                <LogOffIcon />
            </header>
            <main>
                <p>
                    Não há registros de
                    entrada ou saída
                </p>
            </main>
            <footer>
                <button onClick={()=>navigate("/nova-transacao/entrada")}>
                    <AddIcon />
                    <h3>Nova entrada</h3>
                </button>
                <button onClick={()=>navigate("/nova-transacao/saída")}>
                    <RemoveIcon />
                    <h3>Nova saída</h3>
                </button>
            </footer>
        </ContainerHome>
    );
}

const ContainerHome = styled.div`
    width: 100%;
    padding: 5%;
    font-family: 'Raleway';

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5%;
        h1{
            color: #FFFFFF;
            font-weight: 700;
            font-size: 23px;
            line-height: 31px;
        }
    }
    
    main{
        height: 65vh;
        padding: 10%;
        background-color: #FFFFFF;
        color: #868686;
        font-weight: 400;
        border-radius: 5px;
        margin-bottom: 5%;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    
    footer{
        width: 100%;
        display: flex;
        justify-content: space-between;

        button{
            width: 42vw;
            height: 20vh;

            color: #FFFFFF;
            font-size: 15px;
            font-weight: 700;
            background-color: #bc5ae5;
            border: solid 1px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }
    }
`;
const LogOffIcon = styled(FiLogOut)`
     font-size: 25px;
     color: #FFFFFF;
     /* position: absolute;
     right: 5%;
     top: 8%; */
     cursor: pointer;

`;
const AddIcon = styled(IoMdAddCircleOutline)`
    font-size: 25px;
    color: #FFFFFF;
    cursor: pointer;
`;
const RemoveIcon = styled(IoMdRemoveCircleOutline)`
    font-size: 25px;
    color: #FFFFFF;
    cursor: pointer;
`;
