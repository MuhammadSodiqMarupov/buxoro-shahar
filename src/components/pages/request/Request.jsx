import "./request.scss"

function Request() {
    return (
        <div className="request">
            <div className="requestContainer">
                <div className="card">
                    <h1> Buxoro hokimligiga murojaat yuborish </h1>
                    <p> Kengash uchun ariza, taklif, shikoyat va boshqa turdagi murojjatingiz bo'lsa bizga yozing. Murojaatingiz albatta hokimlik tomonidan ko'rib chiqiladi. Tashakkur! </p>
                    <div className="fio">
                        <h3> FIO* </h3>
                        <input placeholder="|" type="text"/>
                    </div>
                    <div className="two_inp">
                       <div className="left">
                           <h3> Telefon* </h3>
                           <input placeholder="+998 |" type="text"/>
                       </div>
                        <div className="left">
                            <h3> E-mail* </h3>
                            <input placeholder="Eshmat1991@gmail.com" type="text"/>
                        </div>
                    </div>
                    <div className="fio">
                        <h3> Murojaat sarlavhasi* </h3>
                        <input placeholder="Mahalla ko‘chalarini asfalt qilish" type="text"/>
                    </div>
                    <div className="last">
                        <h3> Murojaat matni* </h3>
                        <textarea placeholder="Bu yerda mavzuga oid kattagina matn bo‘ladi" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="lastBnts">
                        <h3>Mavzuga oid fayl</h3>
                        <div className="btns">
                            <button> Faylni tanlang </button>
                            <button>  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Request;