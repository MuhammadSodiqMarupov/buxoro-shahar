import React from 'react';
import './departments.scss'
import DynamicSideBar from '../../../SideBar/DynamicSideBar';
const Deparments = (props) => {
    return (
        <div className='departments'>
            <div className="departments__container">
                <DynamicSideBar object={props.data}/>
                <div className="content">
                    <h1> Hududiy bo‘limlar </h1>
                    <div className="bottomBnts">
                        <button> Viloyat hokimligi </button>
                        <button> Buxoro tuman </button>
                        <button> G‘ijduvon tuman</button>
                        <button> Kogon shahri </button>
                        <button> Kogon tumani </button>
                        <button> Olot tumani </button>
                        <button> Peshku tumani </button>
                        <button> Qorako‘l tumani </button>
                        <button> Qorovulbozor tumani </button>
                        <button> Romitan tumani </button>
                        <button> Shofirkon tumani </button>
                        <button> Viloyat hokimligi </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deparments;
