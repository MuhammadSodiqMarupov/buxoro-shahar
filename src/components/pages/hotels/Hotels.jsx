import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';

const Hotels = (props) => {
    return (
        <div className='hotels'>
            <div className="hotels__container">
                <DynamicSideBar object={props.data}/>
                <div className="content"></div>
            </div>
        </div>
    );
}

export default Hotels;