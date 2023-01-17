import React from 'react';
import './address.scss';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import map from "../../../Images/map.svg"
const Address = (props) => {
    return (
        <div className='address'>
            <div className="container">
                <DynamicSideBar object={props.data}/>
                <div className="address-content">
                    <img src={map} alt=""/>
                    <h2> Manzil: 100066, Chilonzor tumani, Islom Karimov ko‘chasi 51 </h2>
                </div>
            </div>
        </div>
    );
}

export default Address;
