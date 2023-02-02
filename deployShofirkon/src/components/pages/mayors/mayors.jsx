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
                    {props.arr.map(item=><div key={item.id} className='cardChiefCard'>
                        <div className="left">
                            <img src={odam} alt="Loading Image....." />
                        </div>
                        <div className="right">
                            <div className="top">
                                <p>{item.tuman}</p>
                                <button>Batafsil</button>
                            </div>
                            <h3 className="Name">{item.firstName}</h3>
                            <small>{item.text}</small>
                            <h1 className="other"><img src={clock} alt="Loading Image....." />{item.time}</h1>
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