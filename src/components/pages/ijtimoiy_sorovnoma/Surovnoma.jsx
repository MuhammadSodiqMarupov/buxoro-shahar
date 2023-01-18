import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';

const Surovnoma = (props) => {
    return (
        <div className='surovnoma'>
            <div className="surovnoma__container">
                <DynamicSideBar object={props.data}/>
                <div className="content">
                </div>
            </div>
        </div>
    );
}

export default Surovnoma;