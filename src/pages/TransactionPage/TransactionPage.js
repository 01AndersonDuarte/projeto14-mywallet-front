import { useNavigate, useParams } from "react-router-dom";
import { LoadingCircle, Loading } from "../../components/Loading";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledForm } from "../../components/styledForm";

export default function TransactionPage() {
    const { type } = useParams();
    const [transaction, setTransaction] = useState({ value: '', description: '' });
    const [request, setRequest] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (type !== 'saída' && type !== 'entrada') {
            navigate('/home');
        }
    }, []);

    if (type !== 'saída' && type !== 'entrada') {
        return <LoadingCircle />
    }

    function insertTransactionData(event) {
        event.target.setCustomValidity('');

        const value = event.target.value;
        const attribute = event.target.name;

        setTransaction({ ...setTransaction, [attribute]: value });
    }
    return (
        <Container>
            <header>
                <h1>Nova {type} </h1>
            </header>
            <StyledForm onSubmit={() => setRequest(true)}>
                <input
                    disabled={request}
                    type="number"
                    placeholder="Valor"
                    name="value"
                    value={transaction.value}
                    onChange={insertTransactionData}
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
    h1{
        color: #FFFFFF;
        font-weight: 700;
        font-size: 23px;
        line-height: 31px;
    }
`;