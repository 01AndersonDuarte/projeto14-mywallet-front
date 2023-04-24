import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";

export const LogOffIcon = styled(FiLogOut)`
    font-size: 25px;
    color: #FFFFFF;
    /* position: absolute;
    right: 5%;
    top: 8%; */
    cursor: pointer;
`;
export const AddIcon = styled(IoMdAddCircleOutline)`
    font-size: 25px;
    color: #FFFFFF;
    cursor: pointer;
`;
export const RemoveIcon = styled(IoMdRemoveCircleOutline)`
    font-size: 25px;
    color: #FFFFFF;
    cursor: pointer;
`;