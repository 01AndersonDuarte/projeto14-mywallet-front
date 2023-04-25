import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { LoadingLines } from "../../components/Loading";
import { LogOffIcon, AddIcon, RemoveIcon } from "./iconsStyle";
import Operations from "./Operations";

export default function HomePage() {
    const [userActive, setUserActive] = useState(null);
    const [userTransactions, setUserTransactions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("user"));
        if (!token) return navigate('/');
        const config = { headers: { Authorization: `Bearer ${token.token}` } };

        const url = process.env.REACT_APP_GET_TRANSACTIONS;

        axios.get(url, config).then((response) => {
            const transactions = [];
            let over = 0;
            console.log(response);

            response.data.transactions.map((t) => {
                if (t.type === 'inflow') {
                    over += parseFloat(t.value);
                } else {
                    over -= parseFloat(t.value);
                };
            });
            // response.data.transactions.outflow.map((t) => {
            //     transactions.push({ type: 'Saída', ...t });
            //     over -= parseFloat(t.value);
            // });

            // const transactionsArray = transactions.sort((a, b) => {
            //     const dataA = new Date(`2023/${a.date.split('/').reverse().join('/')}`);
            //     const dataB = new Date(`2023/${b.date.split('/').reverse().join('/')}`);
            //     return dataA - dataB;
            // });

            setUserActive({ over: parseFloat(over).toFixed(2), ...response.data});
        }).catch((error) => {
            alert(error);
        });
    }, []);

    if (!userActive) {
        return (
            <ContainerHome>
                <LoadingLines />
            </ContainerHome>
        );
    }

    return (
        <ContainerHome>
            <header>
                <h1>Olá, {userActive.name} </h1>
                <LogOffIcon onClick={() => navigate('/')} />
            </header>
            <main>
                {userActive.transactions === [] ?
                    <p>
                        Não há registros de
                        entrada ou saída
                    </p>
                    :
                    <>
                        <Operations transactions={userActive.transactions} />
                        <FooterOperations value={userActive.over}>
                            <h1>SALDO</h1>
                            <h2>{userActive.over}</h2>
                        </FooterOperations>
                    </>
                }
            </main>
            <footer>
                <button onClick={() => navigate("/nova-transacao/entrada")}>
                    <AddIcon />
                    <h3>Nova entrada</h3>
                </button>
                <button onClick={() => navigate("/nova-transacao/saída")}>
                    <RemoveIcon />
                    <h3>Nova saída</h3>
                </button>
            </footer>
        </ContainerHome >
    );
}
const FooterOperations = styled.footer`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;

    padding: 3%;
    h1{
        color: #000000;
    }
    h2{
        color: ${({ value }) => value > 0 ? '#03AC00' : '#C70000'};
    }

`;
const ContainerHome = styled.div`
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
        padding: 5% 1.5% 0% 1.5%;
        background-color: #FFFFFF;
        color: #868686;
        font-weight: 400;
        border-radius: 5px;
        margin-bottom: 5%;
        text-align: center;
        position: relative;
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