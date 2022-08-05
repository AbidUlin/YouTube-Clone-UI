import React from 'react'
import styled from 'styled-components'
import image from '../img/gambar.jpg'
import channel from '../img/shanks.jpeg'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => props.type === "sm" ? "10px" : "35px"};;
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`;

const Image = styled.img`
    width: 80%;
    height: ${(props) => props.type === "sm" ? "100px" : "175px"};;
    background-color: #999;
    flex: 1;
`;

const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== "sm" && "16px"};;
    gap: 12px;
    flex: 1;
`;

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 10px 0;
`;

const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;

const Card = ({type}) => {
    return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
        <Container type={type}>
            <Image src={image} type={type} />
            <Details type={type}>
                <ChannelImage src={channel} type={type} />
                <Texts>
                    <Title>test video</Title>
                    <ChannelName>Kue Balok</ChannelName>
                    <Info>700,00 views • 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
    </Link>
    )
}

export default Card