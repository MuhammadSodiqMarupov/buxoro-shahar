import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './rahbariyat.scss'
const Rahbariyat = (props) => {
    return (
        <div className='rahbariyat'>
            <div className="container">
                <DynamicSideBar object={props.data} setPage={props.set}/>
                <div className="content">

                </div>
            </div>
        </div>
    );
}

export default Rahbariyat;
