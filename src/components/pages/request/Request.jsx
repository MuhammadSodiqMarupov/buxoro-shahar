import "./request.scss"
import file from '../../../Images/Frame.svg'
function Request() {
    return (
        <div className="request">
            <div className="requestContainer">
                <div className="myCard">
                    <h1> Buxoro hokimligiga murojaat yuborish </h1>
                    <p> Kengash uchun ariza, taklif, shikoyat va boshqa turdagi murojjatingiz bo'lsa bizga yozing. Murojaatingiz albatta hokimlik tomonidan ko'rib chiqiladi. Tashakkur! </p>
                    <div className="fio">
                        <h3> FIO* </h3>
                        <input className="big_input" placeholder="|" type="text"/>
                    </div>
                    <div className="two_inp">
                       <div className="left">
                           <h3> Telefon* </h3>
                           <input defaultValue={"+998"} className="mini_input" placeholder="+998 |" type="text"/>
                       </div>
                        <div className="left">
                            <h3> E-mail* </h3>
                            <input defaultValue={"@gmail.com"} className="mini_input" placeholder="Eshmat1991@gmail.com" type="text"/>
                        </div>
                    </div>
                    <div className="fio">
                        <h3> Murojaat sarlavhasi* </h3>
                        <input placeholder="Mahalla ko‘chalarini asfalt qilish"  className="mini_input" type="text"/>
                    </div>
                    <div className="last">
                        <h3> Murojaat matni* </h3>
                        <textarea placeholder="Bu yerda mavzuga oid kattagina matn bo‘ladi" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="lastBtns">
                        <h3>Mavzuga oid fayl</h3>
                        <div className="btn__box">
                                <input type="file" id="input__file" hidden/>
                                <button onClick={()=>{
                                    document.getElementById("input__file").click();
                                }} className="file">
                                <span>
                                    <img src={file} alt="Loading Image....." className="file__svg"/>
                                </span>
                                 Faylni tanlang </button>
                            <button className="send">Murojjatni yuborish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Request;