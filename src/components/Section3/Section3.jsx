import "./Section3.scss"
import minor from "../.././Images/minor.jpg"
import magazine from "../../Images/magazine.jpg"
import minor2 from "../../Images/minor2.jpg"
import {LazyLoadImage} from "react-lazy-load-image-component";
function Section3() {
    return (
        <div className="Section3">
            <div className="S3Container">
                <div className="txt-header">
                    <div className="title">
                        🆕 Shahar yangiliklari
                    </div>
                    <div className="myLink">
                        Barchasi
                    </div>
                </div>
                <div className="api-items">
                    <div className="content">
                        <LazyLoadImage src={minor} effect={"blur"}/>
                        <button className="calendar-date">
                            12.12.2022
                        </button>
                        <div className="brief-descr">
                            Milliy universitetdan yo‘qolgan nodir qo‘lyozmalar ishi: kutubxona rahbari ozod qilindi va yana nimadir yozilishi kerak bu yerda. Jami 3 qatorli sarlavha
                        </div>
                        <div className="descr">
                            Apellyatsiya sudi O‘zMU Axborot-resurs markazi rahbari Irina Kislitsina kitoblarni o‘zlashtirgani tasdiqlanmagan deb topdi. Sudlanuvchining harakatlari JK 167-moddasi (talon-toroj)dan 207-moddasi (mansabga sovuqqonlik)ga qayta kvalifikatsiya qilindi.
                            6 dekabr kuni Jinoyat ishlari bo‘yicha Toshkent shahar sudi sudlov hay’ati apellyatsiya instansiyasida O‘zbekiston Milliy universiteti Axborot-resurs markazi rahbari Irina Kislitsinaga oid ish yuzasidan apellyatsiya shikoyati ko‘rib chiqildi.
                        </div>
                    </div>
                    <div className="sideBar">
                        <div className="item">
                            <LazyLoadImage src={magazine} effect={"blur"}/>
                            <div className="calendar-date">
                                12.12.2022
                            </div>
                            <div className="brief-descr">
                                WordPress News Magazine Charts the Most Chic and Max 2 qator yozuv bo‘lad...                            </div>
                        </div>
                        <div className="item">
                            <LazyLoadImage src={minor2} effect={"blur"}/>
                            <div className="calendar-date">
                                12.12.2022
                            </div>
                            <div className="brief-descr">
                                WordPress News Magazine Charts the Most Chic and Max 2 qator yozuv bo‘lad...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;