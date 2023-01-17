import React from 'react';
import './departments.scss'
import DynamicSideBar from '../../../SideBar/DynamicSideBar';
const Deparments = (props) => {
    return (
        <div className='departments'>
            <div className="departments__container">
                <DynamicSideBar object={props.data}/>
                <div className="content">
                </div>
            </div>
        </div>
    );
}

export default Deparments;
