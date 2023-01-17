import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './mayors.scss'
import viloyatHokim from "../../../Images/viloyathokim.svg";
import clock from "../../../Images/clock.svg";
import call from "../../../Images/phone-call.svg";
import email from "../../../Images/email.svg";
import odam from "../../../Images/odam.svg"
import 
const Mayors = (props) => {
    return (
        <div className='mayors'>
            <div className="container">
                <DynamicSideBar  object={props.data} />
                <div className="content">
                    <div className="cardChiefCard">
                        <div className="left">
                            <img src={odam} alt=""/>
                        </div>
                        <div className="right">
                            <div className="top">
                                <p> Buxoro viloyati hokimi </p>
                                <button> Batafsil </button>
                            </div>
                            <h3> Ism Familiya Otasining ismi </h3>
                            <small> Buxoro Shahar Alpomish ko‘chasi nechanchidir uy </small>
                            <h1 className="other"><img src={clock} alt=""/> 08.00 dan 17.00 gacha </h1>
                            <div className="bottom">
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

export default Mayors;