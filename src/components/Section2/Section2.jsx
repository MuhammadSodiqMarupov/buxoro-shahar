import "./Section2.scss"
import galochka from "../../Images/galochka.svg"
import boshliq from "../../Images/boshliq.jpg"
import {LazyLoadImage} from "react-lazy-load-image-component";
function Section2() {
    return (
        <div className="Section2">
            <div className="S2Container">
                <div className="left_part">
                <h1>
                    <LazyLoadImage src={galochka} effect={"blur"}/>
                    Jamol Shuhratovich Nosirov </h1>
                    <h1> Buxoro shahar hokimi </h1>
                    <div className="TextsCard">
                        <p> ☑️ Jamol Nosirov 1985 yil 12 iyunda Buxoro shahrida tavallud topgan. </p>
                        <p> ☑️ 2005 yili Buxoro davlat universitetining jismoniy madaniyat va jismoniy tarbiya o'qituvchisi psixolog mutaxassisligi bo'yicha tamomlangan </p>
                        <p> ☑️ 2008 yili esa universitetning magistraturasi tugatgan </p>
                        <p> ☑️ Bir muddat «Kamolot» YoIH Buxoro viloyat Kengashi raisi lavozimida ham mehnat qilgan  </p>
                        <p> ☑️ 27-Jilvon saylov okrugidan Oliy Majlis Qonunchilik palatasiga deputat etib saylangan. </p>
                        <p> ☑️ Tadbirkorlar va ishbilarmonlar harakati – O‘zbekiston Liberal-Demokratik partiyasining fraksiyasi a’zosi bo‘lgan </p>
                        <p> ☑️ 2017 yildan 2020 yilga qadar Buxoro viloyati hokimining yoshlar siyosati, ijtimoiy rivojlantirish va ma'naviy-ma'rifiy ishlar bo‘yicha o‘rinbosari lavozimida faoliyat yuritgan. </p>
                        <p> ✅ 2021-yil 5-mayda Xalq deputatlari Buxoro shahar kengashining navbatdan tashqari sessiyasida Jamol Nosirov shahar hokimi lavozimiga tasdiqlandi</p>
                    </div>
                </div>
                <div className="right_part">
                    <img src={boshliq} className={"boshliq"} alt=""/>
                    <button><i className="fa-regular fa-envelope"></i>  Elektron murojjat </button>
                </div>
            </div>
        </div>
    );
}

export default Section2;