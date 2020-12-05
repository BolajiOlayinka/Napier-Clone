import React from 'react';
import styled from 'styled-components';
import BannerBackground from "../assets/images/OpenDayBanner.jpg";
import Header from './NewHeader';
// import Hook from '.././Hook';

export default function Home() {
    return (
        <React.Fragment>
            <BannerArea>
            <Container>
            <Header/>
            </Container>
            
            </BannerArea>
            <BannerArea>

            </BannerArea>
           
        </React.Fragment>
    )
}
const BannerArea = styled.div`
  background-image: url(${BannerBackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
`;
const Container = styled.div `
@media(min-width:1220px){
    width:1220px;
    margin:auto;
}
`