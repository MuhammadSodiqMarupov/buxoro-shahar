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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875607.4832307764!2d63.88016519152022!3d40.20510139056482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f507b4ef64f21f1%3A0x6a40799d37695596!2sShofirkon!5e0!3m2!1sru!2suk!4v1678185428423!5m2!1sru!2suk"></iframe>
                    <h2 className="manzilH2"> Manzil:Shofirkon shaxar Mustakillik kuchasi 4-uy</h2>
                    <div className="informations">
                       <div className="firstInfo">
                        <h4 className="tel"> Telefon raqamlari </h4>
                        <h5> Yuridik va jismoniy shaxslar murojaatlari uchun:Shofirkon.@exat.uz (65) 502-20-04 </h5>
                    </div>
                        {/* <div className="secondInfo">
                            <h5> Toshkent shahar hokimligi Murojaatlar bilan ishlash bo'limi. </h5>
                            <h5>  71-210-01-63 Matbuot xizmati. </h5>
                            <h5>71-210-03-36 Toshkent shahar hokimligi Umumiy bo'limi. info@toshkent.uz </h5>
                            <h5>  e-xat: toshkent@exat.uz </h5>
                        </div> */}
                        <div className="thirdInfo">
                            <p> Telegram: t.me/Shofirkon_matbuotxizmati </p>
                        <p> Facebook-sahifa://www.facebook.com/shofirkontuman.hokimligi </p>
                            {/* <p> Instagram-sahifa: https://www.instagram.com/toshshaharhokimligi/ </p> */}
                        </div>
                        {/* <div className="fourthInfo">
                            <h3> Ish tartibi: 9:00 - 18:00, tushlik 13:00-14:00 </h3>
                            <h4> Mo'ljal: Toshkent Iqtisodiyot Universiteti </h4>
                            <h4> Bekat: Xalqlar do'stligi </h4>
                            <h4> Jamoat transporti: 51-Avtobus </h4>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Address;
