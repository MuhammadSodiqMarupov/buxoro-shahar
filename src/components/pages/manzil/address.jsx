import React from 'react';
import './address.scss';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
const Address = (props) => {
    return (
        <div className='address'>
            <div className="container">
                <DynamicSideBar object={props.data}/>
                <div className="address-content">
                    
                </div>
            </div>
        </div>
    );
}

export default Address;
