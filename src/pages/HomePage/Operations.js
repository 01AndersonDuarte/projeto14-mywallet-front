import styled from "styled-components";

export default function Operations({ transactions }) {
    return (
        <List>
            {transactions.map((t, index) => <OperationsList key={index} operation={t} />)}
        </List>
    );
}
const List = styled.div`
    height: 90%;
    overflow-y: auto;
`;
function OperationsList({ operation }) {
    return (
        <DivOperation type={operation.type}>
            <h1>{operation.date}</h1>
            <p>{operation.description}</p>
            <h3>{operation.value}</h3>
        </DivOperation>
    );
}
const DivOperation = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 4% 2% 4% 2%;
    text-align: left;
    font-family: 'Raleway';

    h1{
        color: #868686;
        margin-right: 10px;
    }
    p{
        color: #000000;
        margin-right: 5px;
    }
    h3{
        color: ${({ type }) => type === 'Entrada' ? '#03AC00' : '#C70000'};
        margin-left: auto;
    }
`;