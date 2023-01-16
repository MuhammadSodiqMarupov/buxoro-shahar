import React from 'react';
import './address.scss';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import viloyatHokim from "../../../Images/viloyathokim.svg"
import clock from "../../../Images/clock.svg"
import call from "../../../Images/phone-call.svg"
import email from "../../../Images/email.svg"
const Address = (props) => {
    return (
        <div className='address'>
            <div className="container">
                <DynamicSideBar object={props.data}/>
                <div className="address-content">
                    <div className="cardChiefCard">
                        <div className="left">
                            <img src={viloyatHokim} alt=""/>
                        </div>
                        <div className="right">
                            <div className="top">
                                <p> Buxoro viloyati hokimi </p>
                                <button> Batafsil </button>
                            </div>
                            <h3> Botir Komilovich Zaripov </h3>
                            <small> (1969-yil 20-noyabr, G‘ijduvon tumani, Buxoro viloyati, O‘zbekiston SSR, SSSR) — O‘zbekistonlik moliyachi va davlat arbobi. </small>
                            <div className="bottom">
                                <h1><img src={clock} alt=""/> 08.00 dan 17.00 gacha </h1>
                                <h2><img src={call} alt=""/> (99) 567 91 49 </h2>
                                <h3><img src={email} alt=""/> zaripovbotir1969@buxdu.uz </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Address;
