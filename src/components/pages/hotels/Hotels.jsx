import './hotels.scss'
import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';

const Hotels = (props) => {
    const hotelarr = [
        {
            price:"4.7",
            name:"Sahid Zarafshon Hotel",
            txt:"Buxoro Shahar Muhammad iqbol ko‘chasi 7-uy",
            txt2:"sahidzarafshon.uz",
            txt3:"(95) 220 1000",
            txt4:"nimadir@gmail.com"
        },
        {
            price:"5",
            name:"Mehmonxona Nomi",
            txt:"Manzil Massa iaculis magna est vestibulum in tortor gravida. Pharetra posuere mauris amet augue nisi. Consequat neque enim vestibulum tempus praesent.",
            txt2:"saytmanzili.uz",
            txt3:"(95) 220 1000",
            txt4:"nimadir@gmail.com"
        },
        {
            price:"5",
            name:"Mehmonxona Nomi",
            txt:"Manzil Massa iaculis magna est vestibulum in tortor gravida. Pharetra posuere mauris amet augue nisi. Consequat neque enim vestibulum tempus praesent.",
            txt2:"saytmanzili.uz",
            txt3:"(95) 220 1000",
            txt4:"nimadir@gmail.com"
        }
    ]
    return (
        <div className='hotels'>
            <div className="hotels__container">
                <DynamicSideBar object={props.data}/>
                    <div className="content">
                    <h1> Mehmonxonalar </h1>
                    <div className="hotelCard">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotels;