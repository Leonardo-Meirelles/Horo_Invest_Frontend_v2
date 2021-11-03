import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import GitHub from '../../assets/images/github.png';
import Instagram from '../../assets/images/instagram.png';
import Linkedin from '../../assets/images/linkedin.png';


export function About(props: RouteComponentProps) {
    return (
        <Container>
            <Div>
                <h2>Leonardo Meirelles</h2>
                <a href='https://github.com/Leonardo-Meirelles' target='blank'><Img src={GitHub} alt="github" /></a>
                <a href='https://www.linkedin.com/in/leomeirelles/' target='blank'><Img src={Linkedin} alt="linkedin" /></a>
            </Div>

            <br />
            <br />

            <Div>

                <h2>Giulia Alzuguir</h2>
                <a href='https://github.com/giualz' target='blank'><Img src={GitHub} alt="github" /></a>
                <a href='https://www.linkedin.com/in/giulia-alzuguir/' target='blank'><Img src={Linkedin} alt="linkedin" /></a>
                <a href='https://www.instagram.com/giualz/' target='blank'><Img src={Instagram} alt="instagram" /></a>
            </Div>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 4rem;
`;

const Div = styled.div`
    text-align: center;
`

const Img = styled.img`
margin: 1rem;
    width: 8rem;
    height: 8rem;
`;