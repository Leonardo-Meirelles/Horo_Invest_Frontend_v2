import { Paper } from "@mui/material"
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
        stockPriceBefore: number
    }
}

export function StockCard({ stockInfo }: StockCardProps) {

    const dispatch = useDispatch()
    const handleOpen = () => {
        dispatch(setModalAssets(id, stockName, stockPrice, 'Trading Stocks'))
        dispatch(toggleModal())
    }

    const { id, stockName, stockPrice, stockPriceBefore } = stockInfo

    const isCheaper = stockPrice < stockPriceBefore ? true : false

    return (
        <SPaper elevation={24} isCheaper={isCheaper}>
            <Content>
                <h2>{stockName}</h2>
                <hr />
                <h2>R$ {stockPrice}</h2>
                <hr />
                <button type='button' onClick={handleOpen}><AiOutlinePlusSquare /> <br /> Buy now </button>
            </Content>
        </SPaper>
    )
}

interface SPaperProps {
    isCheaper: boolean
}

const SPaper = styled(Paper)<SPaperProps>`
    width: 15rem;
    height: 15rem;
    text-align: center;
    border: 2px solid;
    border-color: ${(props) => props.isCheaper === true ? 'red' : 'green'};

    &:hover {
        
        filter: brightness(0.97);
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
        
    button {
        text-decoration: none;
        color: var(--yellow);
        border: none;
        background: transparent;
            
        &:hover {
            filter: brightness(0.85);
            }
    }
`