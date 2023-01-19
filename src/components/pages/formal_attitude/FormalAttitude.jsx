import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';

const FormalAttitude = ({ data}) => {
    
    return (
        <div className='attitude'>
            <div className="attitude_container">
                <DynamicSideBar object={data}/>
                <div className="attitude_content">

                </div>
            </div>
        </div>
    );
}

export default FormalAttitude;