import React, { useState } from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './Savollar.scss'
const Savollar = ({arr,getDataFilterByArr,data}) => {
    const [langData,setLangData] = useState(['Ijtimoiy so‘rovnoma',"Ижтимоий сўровнома","Социальная анкета","Social questionnaire"]);
    const [buttonData,setButtonData] = useState(["Jo'natish","Жунатиш","Отправить","Submit"]);
    const [liked,setLiked] = useState(JSON.parse(localStorage.getItem("liked"))??undefined); 

    const submit = (e)=>{
        e.target.disabled = true;
        e.target.classList.remove('can_submit');
        e.target.classList.add("submited");
        localStorage.setItem("liked",liked);
    }
    return (
        <div className='savollar'>
            <div className="savollar__container">
                <DynamicSideBar object={data}/>
                <div className="savollar_content">
                    <h1>{getDataFilterByArr(langData)}</h1>
                    <div className="surovnoma_content">
                        {arr.map(item=><div className='item_savol'>
                            <p className='title'>{item.title}</p>
                            <p className="brief_description">{item.berifDescription}</p>
                            <p className="descr_full">{item.description}</p>
                            <div className="like_content">
                                <button className='like' onClick={()=>localStorage.getItem("liked")??setLiked(true)}>
                                    {liked?
                                    <i class="fa-solid fa-thumbs-up"></i>:
                                    <i class="fa-regular fa-thumbs-up"></i>}
                                </button>
                                <button className='dislike' onClick={()=>localStorage.getItem("liked")??setLiked(false)}>
                                    {liked===false?
                                    <i class="fa-solid fa-thumbs-down"></i>
                                    :
                                    <i class="fa-regular fa-thumbs-down"></i>
                                    }
                                </button>
                                <button onClick={submit} className={localStorage.getItem("liked")!=null?"submited":"can_submit"}>{getDataFilterByArr(buttonData)}</button>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Savollar;