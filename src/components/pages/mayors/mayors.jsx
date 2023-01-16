import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './mayors.scss'
const Mayors = (props) => {
    return (
        <div className='mayors'>
            <div className="container">
                <DynamicSideBar  object={props.data} />
                <div className="content">
                </div>
            </div>
        </div>
    );
}

export default Mayors;