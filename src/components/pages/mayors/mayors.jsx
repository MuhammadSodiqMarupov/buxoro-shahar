import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './mayors.scss'
import viloyatHokim from "../../../Images/viloyathokim.svg";
import clock from "../../../Images/clock.svg";
import call from "../../../Images/phone-call.svg";
import email from "../../../Images/email.svg";
import odam from "../../../Images/odam.svg"
import RahbarlarList from '../../../data/RahbarlarList';
const Mayors = (props) => {
    return (
        <div className='mayors'>
            <div className="mayorContainer">
                <DynamicSideBar  object={props.data} />
                <div className="content">
                    {RahbarlarList.map(item=><div className='cardChiefCard'>
                        <div className="left">
                            <img src={odam} alt="" />
                        </div>
                        <div className="right">
                            <div className="top">
                                <p>{item.tuman}</p>
                                <button>Batafsil</button>
                            </div>
                            <h3>{item.firstName}</h3>
                            <small>{item.text}</small>
                            <h1 className="other"><img src={clock} alt="" />{item.time}</h1>
                            <div className="bottom">
                                <h2><img src={call} alt="call" />{item.phone}</h2>
                                <h3><img src={email} alt="email" />{item.email}</h3>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default Mayors;