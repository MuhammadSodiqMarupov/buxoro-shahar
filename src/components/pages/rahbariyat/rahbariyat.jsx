import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './rahbariyat.scss'
import viloyatHokim from "../../../Images/viloyathokim.svg";
import clock from "../../../Images/clock.svg";
import call from "../../../Images/phone-call.svg";
import email from "../../../Images/email.svg";
const Rahbariyat = (props) => {
    return (
        <div className='chief'>
            <div className="chiefContainer">
                <DynamicSideBar object={props.data} setPage={props.set}/>
                <div className="content">
                    {props.arr.map(item=>  <div className="cardChiefCard">
                        <div className="left">
                            <img src={viloyatHokim} alt="Loading Image....."/>
                        </div>
                        <div className="right">
                            <div className="top">
                                <p> Buxoro viloyati hokimi </p>
                                <button> Batafsil </button>
                            </div>
                            <h3 className="Name"> Botir Komilovich Zaripov </h3>
                            <small> (1969-yil 20-noyabr, G‘ijduvon tumani, Buxoro viloyati, O‘zbekiston SSR, SSSR) — O‘zbekistonlik moliyachi va davlat arbobi. </small>
                            <div className="bottom">
                                <h1><img src={clock} alt="Loading Image....."/> 08.00 dan 17.00 gacha </h1>
                                <h2><img src={call} alt="Loading Image....."/> (99) 567 91 49 </h2>
                                <h3><img src={email} alt="Loading Image....."/> zaripovbotir1969</h3>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default Rahbariyat;
