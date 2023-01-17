import React from 'react';
import './address.scss';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import map from "../../../Images/map.svg"
const Address = (props) => {
    return (
        <div className='address'>
            <div className="addressContainer">
                <DynamicSideBar object={props.data}/>
                <div className="address-content">
                    <h1> Manzil </h1>
                    <img src={map} alt=""/>
                    <h2 className="manzilH2"> Manzil: 100066, Chilonzor tumani, Islom Karimov ko‘chasi 51 </h2>
                    <div className="informations">
                    <div className="firstInfo">
                        <h4 className="tel"> Telefon raqamlari </h4>
                        <h5> Yuridik va jismoniy shaxslar murojaatlari uchun: murojaatlar@tashkent.uz 71-210-03-47 </h5>
                    </div>
                        <div className="secondInfo">
                            <h5> Toshkent shahar hokimligi Murojaatlar bilan ishlash bo'limi. </h5>
                            <h5>  71-210-01-63 Matbuot xizmati. </h5>
                            <h5>71-210-03-36 Toshkent shahar hokimligi Umumiy bo'limi. info@toshkent.uz </h5>
                            <h5>  e-xat: toshkent@exat.uz </h5>
                        </div>
                        <div className="thirdInfo">
                            <p> Telegram-kanal: https://t.me/poytaxt_uz </p>
                        <p> Facebook-sahifa: https://www.facebook.com/Toshkenthokimligi </p>
                            <p> Instagram-sahifa: https://www.instagram.com/toshshaharhokimligi/ </p>
                        </div>
                        <div className="fourthInfo">
                            <h3> Ish tartibi: 9:00 - 18:00, tushlik 13:00-14:00 </h3>
                            <h4> Mo'ljal: Toshkent Iqtisodiyot Universiteti </h4>
                            <h4> Bekat: Xalqlar do'stligi </h4>
                            <h4> Jamoat transporti: 51-Avtobus </h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Address;
