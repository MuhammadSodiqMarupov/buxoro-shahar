import React from 'react';
import DynamicSideBar from '../../../SideBar/DynamicSideBar';
import "./malumot.scss"
import xarita from "../../../../Images/shofirkon.svg"
import users from "../../../../Images/users.svg"
import house from "../../../../Images/house.svg"
import area from "../../../../Images/area.svg"
const Malumot = (props) => {
    return (
        <div className='malumot'>
            <div className="malumotContainer">
                <DynamicSideBar object={props.data}/>
                <div className="malumot__content">
                    <img src={xarita} alt="Loading Image....."/>
                    <h2> Shofirkon tuman </h2>
                    <div className="population">
                        <h2>  <img className="icon" src={users} alt="Loading Image....."/>  136 ming kishi  </h2>
                        <h2>  <img className="icon" src={house} alt="Loading Image....."/>  Din tarkibi: Musulmonlar, Xristianlar </h2>
                        <h2>  <img className="icon" src={area} alt="Loading Image....."/> 3,72 ming km² </h2>
                    </div>
                        <p> <span> Buxoro- </span> Oʻzbekiston Respublikasining qadimiy shaharlaridan biri, Buxoro viloyatining maʼmuriy, iqtisodiy va madaniy markazi. Buyuk ipаk yoʻlida yirik tijorat markazlaridan boʻlgan. Oʻzbekistonning janubiy-gʻarbida, Zarafshon daryosi quyi oqimida joylashgan. Toshkentdan 616 km. Buxoro 2 ta shahar rayoni (Fayzulla Xoʻjayev va Toʻqimachilik)ga boʻlingan. Aholisi 290000 (2019). </p>
                        <p>
                            </p>
                </div>
            </div>
        </div>
    );
}

export default Malumot;