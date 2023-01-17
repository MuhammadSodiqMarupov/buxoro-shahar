import React from 'react';
import DynamicSideBar from '../../../SideBar/DynamicSideBar';

const Malumot = (props) => {
    return (
        <div className='malumot'>
            <div className="malumot__container">
                <DynamicSideBar object={props.data}/>
                <div className="malumot__content">
                    
                </div>
            </div>
        </div>
    );
}

export default Malumot;