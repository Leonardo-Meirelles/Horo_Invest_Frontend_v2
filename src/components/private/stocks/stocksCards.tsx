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
        dispatch(setModalAssets(id, stockName, stockPrice, 'stocks', 'R$'))
        dispatch(toggleModal())
    }

    const { id, stockName, stockPrice, stockPriceBefore } = stockInfo

    const isCheaper = stockPrice < stockPriceBefore ? 'true' : 'false'

    return (
        <SPaper elevation={24} ischeaper={isCheaper}>
            <Content>
                <h1>{stockName}</h1>
                <h2>
                    Today: R$
                    <br />
                    <b>{stockPrice}</b>
                </h2>
                <h2>
                    Yesterday: R$
                    <br />
                    <b>{stockPriceBefore}</b>
                </h2>
                <button type='button' onClick={handleOpen}><AiOutlinePlusSquare /> <br /> Buy now </button>
            </Content>
        </SPaper>
    )
}

interface SPaperProps {
    ischeaper: 'true' | 'false'
}

const SPaper = styled(Paper) <SPaperProps>`
    width: 15rem;
    height: 15rem;
    margin: 1rem;
    text-align: center;
    border: 2px solid;
    border-color: ${(props) => props.ischeaper === 'true' ? 'red' : 'green'};

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
        font-size: 1.20rem;
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