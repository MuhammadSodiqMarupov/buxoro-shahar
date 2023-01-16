import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './xizmatlar.scss'
const Xizmatlar = (props) => {
    return (
        <div className='xizmatlar'>
            <div className="container">
            <DynamicSideBar setPage={props.set} object={props.data}/>
            <div className='xizmatlar_content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a nulla doloribus, beatae ratione doloremque. Nam sint assumenda similique natus culpa ea ducimus. Blanditiis, iusto sequi quaerat incidunt excepturi laudantium?
            </div>
            </div>
        </div>
    );
}

export default Xizmatlar;