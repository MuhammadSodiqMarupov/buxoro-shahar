import './hotels.scss'
import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import hotelezaraf from "../../../Images/zarafshon.svg"
import yellowstar from "../../../Images/yellowstar.svg"
const Hotels = (props) => {
    const hotelarr = [
        {
            img:hotelezaraf,
            price:"4.7",
            name:"Sahid Zarafshon Hotel",
            txt:"Buxoro Shahar Muhammad iqbol ko‘chasi 7-uy",
            txt2:"sahidzarafshon.uz",
            txt3:"(95) 220 1000",
            txt4:"nimadir@gmail.com"
        },
        {
            img:hotelezaraf,
            price:"5",
            name:"Mehmonxona Nomi",
            txt:"Buxoro Shahar Muhammad iqbol ko‘chasi 7-uy",
            txt2:"saytmanzili.uz",
            txt3:"(95) 220 1000",
            txt4:"nimadir@gmail.com"
        },
        {
            img:hotelezaraf,
            price:"5",
            name:"Mehmonxona Nomi",
            txt:"Buxoro Shahar Muhammad iqbol ko‘chasi 7-uy",
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
                        {hotelarr.map((item,index)=><div className="hotelCard">
                            <img src={item.img} alt=""/>
                            <div className="right">
                                <h3>  <img className="starYellow" src={yellowstar} alt=""/> {item.price} </h3>
                                <h1> {item.name} </h1>
                                <small> {item.txt} </small>
                                <div className="bottom">
                                <p> {item.txt2} </p>
                                 <p> {item.txt3} </p>
                                 <p>{item.txt4}</p>
                                </div>
                            </div>
                            </div>
                        )}

                </div>
            </div>
        </div>
    );
}

export default Hotels;