import { Table } from "reactstrap"
import styled from "styled-components"
import { AiOutlineDelete } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { toggleModal } from "../../../store/openModal/action"

export function OrdersList () {

    const dispatch = useDispatch()
    const handleOpen = () => dispatch(toggleModal())

    return (
        <STable bordered hover dark >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Asset</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Cancel Order</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>OIBR3</td>
                        <td>5,50</td>
                        <td>500</td>
                        <td>
                            <Button
                                color="danger"
                                onClick={handleOpen}>
                                <AiOutlineDelete />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </STable>
    )
}

const STable = styled(Table)`
    width: 100%;
    margin: 4rem;
    text-align: center;
    font-size: 1.25rem;
`

const Button = styled.button`
    border: none;
    background: transparent;
    color: var(--white);
`