import './agency.scss'
import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';

const Agency = (props) => {
    return (
        <div className='agency'>
            <div className="agency__container">
                <DynamicSideBar object={props.data}/>
                <div className="content">
                <h1> Sayyohlik agentliklari </h1>
                    <div className="tashkilotCard">
                    <p> <span> Tashkilot nomi: </span> “Ulli Xovli turizm” xususiy firmasi  </p>
                    <p>  <span> Rahbar F.I.O: </span> Rajabov Davlatnazar </p>
                    <p> <span>  Manzili: </span> Urganch tumani Gʼoybu qishlogʼi </p>
                    <p>  <span> Tel/Faks:  </span> +998937509002 </p>
                    <p>  <span> Elektron manzili: </span> - </p>
                    <p> <span> Faoliyat turi: </span> Sayyoxlik firmasi </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agency;