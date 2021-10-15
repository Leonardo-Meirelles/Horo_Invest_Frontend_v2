import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'

export function UserInfoTableList() {


    return (
        <SCard>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="WindowText" gutterBottom>
                    Profile
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </SCard>
    )
}

const SCard = styled(Card)`
    width: 80%;
    margin-top: 2rem;
    text-align: center;
`
