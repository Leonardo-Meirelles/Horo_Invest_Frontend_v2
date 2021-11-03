import { Paper } from "@mui/material"
import styled from "styled-components"
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../store/openModal/action";
import { setModalAssets } from "../../../store/buyModalAssets/action";

interface CryptoCardProps {
    key: number
    cryptoInfo: {
        id: number
        cryptoName: string
        cryptoPrice: number
        cryptoPriceBefore: number
    }
}

export function CryptoCard({ cryptoInfo }: CryptoCardProps) {

    const { id, cryptoName, cryptoPrice, cryptoPriceBefore } = cryptoInfo

    const isCheaper = cryptoPrice < cryptoPriceBefore ? 'true' : 'false'

    const dispatch = useDispatch()

    const handleOpen = () => {
        dispatch(setModalAssets(id, cryptoName, cryptoPrice, 'cryptos', 'USD'))
        dispatch(toggleModal())
    }

    return (
        <SPaper elevation={24} ischeaper={isCheaper}>
            <Content>
                <h1>{cryptoName}</h1>
                <h2>
                    Today: USD 
                    <br />
                    <b>{cryptoPrice}</b>
                </h2>
                <h2>
                    Yesterday: USD 
                    <br />
                    <b>{cryptoPriceBefore}</b>
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
    justify-content: space-between;
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