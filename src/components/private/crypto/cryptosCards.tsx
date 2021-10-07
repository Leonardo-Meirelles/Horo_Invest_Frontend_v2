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

    const isCheaper = cryptoPrice < cryptoPriceBefore ? true : false

    const dispatch = useDispatch()
    
    const handleOpen = () => {
        dispatch(setModalAssets(id, cryptoName, cryptoPrice, 'Crypto Currency'))
        dispatch(toggleModal())
    }

    return (
        <SPaper elevation={24} isCheaper={isCheaper}>
            <Content>
                <h2>{cryptoName}</h2>
                <hr />
                <h2>R$ {cryptoPrice}</h2>
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