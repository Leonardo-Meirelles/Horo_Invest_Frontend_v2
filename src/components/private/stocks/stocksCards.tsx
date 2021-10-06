import { Button, Paper } from "@mui/material"
import styled from "styled-components"
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../store/openModal/action";
import { setModalAssets } from "../../../store/buyModalAssets/action";

interface StockCardProps {
    key: number;
    stockInfo: {
        id: number;
        stockName: string;
        stockPrice: number;
    }
}

export function StockCard({ stockInfo }: StockCardProps) {

    const dispatch = useDispatch()
    const handleOpen = () => {
        dispatch(setModalAssets(id, stockName, stockPrice, 'stock'))
        dispatch(toggleModal())
    }

    const { id, stockName, stockPrice } = stockInfo

    return (
        <SPaper elevation={24}>
            <Content>
                <h2>{stockName}</h2>
                <hr />
                <h2>R$ {stockPrice}</h2>
                <hr />
                <a href="#"><AiOutlinePlusSquare /> <br /> More Info </a>
                <Button onClick={handleOpen}>Open modal</Button>
            </Content>
        </SPaper>
    )
}

const SPaper = styled(Paper)`
    width: 15rem;
    height: 15rem;
    text-align: center;
    border: 2px solid green;

    &:hover {
        
        filter: brightness(0.97);
    }
/* Retirar depois */
    &:first-child{
        border: 2px solid red;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    padding: 1rem;

    h2 {
        font-size: 1.5rem;
    }
        
    a {
        text-decoration: none;
        color: var(--yellow);
            
        /* &:hover {
            filter: brightness(0.9);
            } */
    }

`