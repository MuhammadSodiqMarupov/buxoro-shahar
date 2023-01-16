import React from 'react';
import './address.scss';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import viloyatHokim from "../../../Images/viloyathokim.svg"
const Address = (props) => {
    return (
        <div className='address'>
            <div className="AddressContainer">
                <DynamicSideBar object={props.data}/>
                <div className="address-content">
                    <div className="cardChiefCard">
                        <div className="left">
                            <img src={viloyatHokim} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address;
