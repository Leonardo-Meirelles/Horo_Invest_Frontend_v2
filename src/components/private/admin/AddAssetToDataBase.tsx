import { Button, Card, CardContent, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"
import styled from "styled-components"
import { addAssetToDataBaseService } from "../../../services/adminService"

interface AssetProps {
    type: string
    name: string
}

export function AddAssetToDataBase() {

    const [asset, setAsset] = useState<AssetProps>({
        type: '',
        name: ''
    })

    const handleChangeAssetName = (event: ChangeEvent<HTMLInputElement>) => {
        setAsset(() => ({
            ...asset,
            name: event.target.value
        }))
    }

    const handleChangeAssetType = (event: any) => {
        setAsset(() => ({
            ...asset,
            type: event.target.value
        }))
    }

    const handleClickSend = () => {
        addAssetToDataBaseService(asset)
    }
    
    const isNotValid = 
        asset.type === '' ||
        asset.name === ''

    return (
        <Container>
            <SCard>
                <SCardContent>
                    <SRadioGroup row >
                        <FormControlLabel
                            value="stocks"
                            control={<Radio />}
                            label="Stock"
                            onClick={(event: any) => handleChangeAssetType(event)}
                        />
                        <FormControlLabel
                            value="currency"
                            control={<Radio />}
                            label="Currency"
                            onClick={(event: any) => handleChangeAssetType(event)}
                        />
                        <FormControlLabel
                            value="cryptocurrency"
                            control={<Radio />}
                            label="Crypto"
                            onClick={(event: any) => handleChangeAssetType(event)}
                        />
                    </SRadioGroup>

                    <TextField
                        label="New Asset"
                        color="primary"
                        variant="filled"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChangeAssetName(event)}
                    />

                    <Button
                        variant="outlined"
                        color="success"
                        onClick={() => handleClickSend}
                        disabled={isNotValid}
                    >
                        Send
                    </Button>
                </SCardContent>
            </SCard>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SCard = styled(Card)`
    margin: 2rem; 
    width: 50%;
    height: 50vh;
`
const SCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
`

const SRadioGroup = styled(RadioGroup)`
    display: flex;
    justify-content: center;
`