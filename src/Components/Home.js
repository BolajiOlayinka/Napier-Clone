import React from 'react';
import styled from 'styled-components';
import BannerBackground from "../assets/images/OpenDayBanner.jpg";
import Header from './Header';

export default function Home() {
    return (
        <React.Fragment>
            <BannerArea>
            <Header/>
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