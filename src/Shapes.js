import React from 'react';
import styled from './Shapes.module.css';
import medicine from './assets/images/Med.png';
import diamond from './assets/images/uni10.jpg';
import School from './assets/images/uni7.jpg'
import Skool from './assets/images/uni11.jpg'
import Barbados from './assets/images/barbados.jpg'

export default function Shapes() {
    return (
        <div>
            <div className={styled.halfTriTop}>
            <img src={medicine} className={styled.medicine} alt="medicine"/>
            </div>
            <div className={styled.diamondBox}>
            <img src={Barbados} className={styled.diamond} alt='caps'/>

            </div>
            <div className={styled.diamondBox2}>
            <img src={diamond} className={styled.diamond2} alt='caps'/>

            </div>
            <div className={styled.diamondBox3}>
            <img src={diamond} className={styled.diamond2} alt='caps'/>

            </div>
            <div className={styled.diamondBox4}>
            <img src={School} className={styled.diamond2} alt='caps'/>

            </div>
            <div className={styled.diamondBox5}>
            <img src={Skool} className={styled.diamond} alt='caps'/>

            </div>
        </div>
    )
}
