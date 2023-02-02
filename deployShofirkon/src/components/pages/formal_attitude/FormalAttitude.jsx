import "./attitude.scss"
import DynamicSideBar from '../../SideBar/DynamicSideBar';

const FormalAttitude = ({ data}) => {
    
    return (
        <div className='attitude'>
            <div className="attitude_container">
                <DynamicSideBar object={data}/>
                <div className="attitude_content">
                    <h1> Rasmiy munosabat </h1>
                    <p> “Qonun doirasida” MChJ tomonidan 2022 yil 15 avgustda viloyat hokimligiga yuborilgan № 08/15 sonli soʼrovnomaga javob berilmagani boʼyicha ijtimoiy tarmoqda eʼlon qilingan tanqidiy chiqish yuzasidan shuni maʼlum qilamizki, viloyat hokimligida 2022 yil 24 iyunь kuni oʼtkazilgan yigʼilishning 373-sonli bayoni “Qonun doirasida” MChJning pochta manziliga yuborilgan.</p>
                    <h2> Buxoro viloyati hokimligi matbuot xizmati </h2>
                    <div className="attitudeCard">
                        <h5> Fikringizni yozib qoldirishingiz mumkin </h5>
                        <div className="inpes">
                            <div className="firstInp">
                                <p> FIO* </p>
                                <input placeholder="Ism Familiya Otasining ismi" type="text"/>
                            </div>
                            <div className="firstInp">
                                <p> E-mail* </p>
                                <input placeholder="Eshmat1991@gmail.com" type="text"/>
                            </div>
                        </div>
                        <div className="bottomAttitudeInp">
                            <p> Murojaat matni* </p>
                            <textarea></textarea>
                            <button> Yuborish </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormalAttitude;