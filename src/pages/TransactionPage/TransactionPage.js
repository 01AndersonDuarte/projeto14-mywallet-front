import { useNavigate, useParams } from "react-router-dom";
import { LoadingCircle, Loading } from "../../components/Loading";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledForm } from "../../components/styledForm";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";

export default function TransactionPage() {
    const { type } = useParams();
    const [transaction, setTransaction] = useState({ value: '', description: '' });
    const [request, setRequest] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (type !== 'saída' && type !== 'entrada') {
            navigate('/home');
        }
        const token = JSON.parse(localStorage.getItem("user"));
        if(!token) return navigate('/');
    }, []);

    if (type !== 'saída' && type !== 'entrada') {
        return <LoadingCircle />
    }

    function insertTransactionData(event) {
        event.target.setCustomValidity('');

        const value = event.target.value;
        const attribute = event.target.name;

        setTransaction({ ...transaction, [attribute]: value });
    }

    function handleInput(event) {
        let inputValue = event.target.value.replace(/\D/g, ''); // Remove tudo que não é número

        if (inputValue === '') {
            return setTransaction({ ...setTransaction, value: parseFloat(0).toFixed(2) });
        }

        let str = inputValue.split('');
        const t = inputValue.length - 2;
        str.splice(t, 0, '.');
        str = str.join('');

        setTransaction({ ...transaction, value: parseFloat(str).toFixed(2) });
    };
    function addTransaction(event) {
        event.preventDefault();
        setRequest(true);

        let url;
        const value_send = Number(transaction.value);
        const body = { value: value_send, description: transaction.description };

        const token = JSON.parse(localStorage.getItem("user"));
        const config = { headers: { Authorization: `Bearer ${token.token}` } };

        if (type !== 'entrada') {
            url = process.env.REACT_APP_TRANSACTIONS_OUTFLOW;
        } else {
            url = process.env.REACT_APP_TRANSACTIONS_INFLOW;
        }

        axios.post(url, body, config).then((response) => {
            alert(response.data);
            setRequest(false);
            setTransaction({ value: '', description: '' });
        }).catch((error) => {
            alert(error.response.data);
            setRequest(false);
        })
    }


    return (
        <Container>
            <div>
                <ArrowBack onClick={() => navigate('/home')} />
            </div>
            <header>
                <h1>Nova {type} </h1>
            </header>
            <StyledForm onSubmit={addTransaction}>
                <input
                    disabled={request}
                    type="text"
                    placeholder="Valor"
                    name="value"
                    value={transaction.value}
                    onChange={handleInput}
                    required
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, insira com um valor válido.')}
                />
                <input
                    disabled={request}
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    value={transaction.description}
                    onChange={insertTransactionData}
                    required
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, insira uma descrição.')}
                />
                <button type="submit" disabled={request}>{request ? <Loading /> : `Salvar ${type}`}</button>
            </StyledForm>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    padding: 10%;
    font-family: 'Raleway';
    position: relative;
    
    div{
        position: absolute;
        left: 5%;
        top: 5%;
    }
    header{
        margin-top: 5%;
        h1{
            color: #FFFFFF;
            font-weight: 700;
            font-size: 23px;
            line-height: 31px;
        }
    }
    
`;

const ArrowBack = styled(BiArrowBack)`
    font-size: 25px;
    color: #FFFFFF;
    cursor: pointer;
`;