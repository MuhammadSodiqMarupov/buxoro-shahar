import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';

const Savollar = (props) => {
    return (
        <div className='savollar'>
            <div className="savollar__container">
                <DynamicSideBar object={props.data}/>
                <div className="content">
                    <h1>
                    Ijtimoiy so‘rovnoma
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Savollar;