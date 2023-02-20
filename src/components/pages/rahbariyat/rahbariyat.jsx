import React, { useState } from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './rahbariyat.scss'
import viloyatHokim from "../../../Images/viloyathokim.svg";
import clock from "../../../Images/clock.svg";
import call from "../../../Images/phone-call.svg";
import email from "../../../Images/email.svg";
import { domen } from '../../../headerAPI';
import * as DOMPurify from 'dompurify';

const Rahbariyat = (props) => {
    const [popupcontent, setPopupcontent] = useState({});
    const [popuptoggle, setPopuptoggle] = useState(false);

    const changeContent = (item) =>{
        setPopupcontent({...item});
        setPopuptoggle(!popuptoggle);
    }
    return (
        <>        
        <div className='chief'>
            <div className="chiefContainer">
                <DynamicSideBar object={props.data} setPage={props.set}/>
                <div className="content">
                    {props.arr.map(item=>  <div className="cardChiefCard">
                        <div className="left">
                            <img src={domen + item.imageUrl} alt="Loading Image....."/>
                        </div>
                        <div className="right">
                            <div className="top">
                                <p>{item.fio}</p>
                                <button onClick={()=>changeContent(props.item)} > Batafsil </button>
                            </div>
                            <h3 className="Name">{item.position}</h3>
                            <small>{item.briefly}</small>
                            {/* <div className="bottom">
                                <h1><img src={clock} alt="Loading Image....."/> 08.00 dan 17.00 gacha </h1>
                                <h2><img src={call} alt="Loading Image....."/> (99) 567 91 49 </h2>
                                <h3><img src={email} alt="Loading Image....."/> zaripovbotir1969</h3>
                            </div> */}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>

        {
            popuptoggle && <div className="pop_up_container">
            <div className="pop_up_body">
                <div className="pop_up_header" onClick={changeContent}><i className="ri-close-line">close</i></div>
                <div className="pop_up_content">
                            <div className="pop_up_card">
                                <h3>{popupcontent.fio}</h3>
                                <h4>{popupcontent.position}</h4>
                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(popupcontent.biography) }} />
                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(popupcontent.obligation) }} />
                            </div>
                </div>
            </div>
        </div>
        }
        </>
    );
}

export default Rahbariyat;
