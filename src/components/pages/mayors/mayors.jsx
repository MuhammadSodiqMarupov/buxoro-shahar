import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './mayors.scss'
import viloyatHokim from "../../../Images/viloyathokim.svg";
import clock from "../../../Images/clock.svg";
import call from "../../../Images/phone-call.svg";
import email from "../../../Images/email.svg";
import odam from "../../../Images/odam.svg"
import { domen } from '../../../headerAPI';
import RahbarlarList from '../../../data/RahbarlarList';
const Mayors = (props) => {
    // console.log("arr", props.arr);
    return (
        <div className='mayors'>
            <div className="mayorContainer">
                <DynamicSideBar  object={props.data} />
                <div className="content">
                    {props.arr.map((item)=>(
                    <div key={item.id} className='cardChiefCard'>
                        <div className="left">
                            <img src={domen + item.imageUrl} alt="Loading Image....." />
                        </div>
                        <div className="right">
                            <div className="top">
                                <p>{item.tuman}</p>
                                <button>Batafsil</button>
                            </div>
                            <h3 className="Name">{item.fio}</h3>
                            <p>{item.position}</p>
                            <small>{item.briefly}</small>
                            {/* <h1 className="other"><img src={clock} alt="Loading Image....." />{item.time}</h1>
                            <div className="bottom">
                                <h2><img src={call} alt="call" />{item.phone}</h2>
                                <h3><img src={email} alt="email" />{item.email}</h3>
                            </div> */}
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
}

export default Mayors;