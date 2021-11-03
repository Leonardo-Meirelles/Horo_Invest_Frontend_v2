import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import GraphImg from '../../assets/images/graph.jpg';
import TeamImg from '../../assets/images/team.jpg';

export function Home(props: RouteComponentProps) {

    return (
        <Container>
            <Section>
                <TextDiv>
                    <h2>Making your life simpler</h2>

                    <p>
                        In 2021, we observed the lack of simplicity on the stock and cryptocurrency brokers available. Thus, we were born
                        to make your life easier by bringing an application with simple interface but still supporting
                        you with all services you need to invest. Whether you are a new investor or an experienced one,
                        you will find all you need here.
                        <br />
                        Let the complicated part with our team and worry about making your money work for you no matter
                        where you are, be it from the comfort of you house or from your lunch break at work. Let the
                        complicated parts for us.
                    </p>
                </TextDiv>

                <Img src={TeamImg} alt="team" />
            </Section>
            <br />
            <br />
            <Section>
                <Img src={GraphImg} alt="graph" />
                <TextDiv>
                    <h2>Our broker</h2>

                    <p>
                        Our team of economists and developers is working 24 hours a day to guarantee all functions and
                        support you may need. Our mission is to simplify our users' lives and make investments
                        accessible to everyone.
                        <br />
                        We charge no fees for daily and swing trades. For other types of investments, please reach for our
                        support page.
                    </p>
                </TextDiv>

            </Section>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

const Section = styled.section`
    display: flex;
    flex: 1;
    height: 100vh;
`;

const Img = styled.img`
    height: 50rem;
    width: 50rem;
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    text-justify: inter-word;
    padding: 2rem;
    font-size: 24px;
`