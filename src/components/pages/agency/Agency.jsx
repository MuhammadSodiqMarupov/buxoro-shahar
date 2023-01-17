import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';

const Agency = (props) => {
    return (
        <div className='agency'>
            <div className="agency__container">
                <DynamicSideBar object={props.data}/>
                <div className="content">

                </div>
            </div>
        </div>
    );
}

export default Agency;