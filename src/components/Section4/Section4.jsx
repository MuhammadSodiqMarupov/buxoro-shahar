import "./Section4.scss"
import pencil from "../../Images/Pencil.svg"
import star from "../../Images/star.svg"
import bloknot from "../../Images/Bloknot.svg"
import car from "../../Images/car.svg"
import {LazyLoadImage} from "react-lazy-load-image-component";
function Section4(props) {
    return (
        <div className="Section4">
            <div className="S4Container">
                <div className="LeftCardsMy">
                <div className="item">
                    <LazyLoadImage src={pencil} effect={"blur"}/>
                    <p> Fuqaro murojaatlari bilan ishlash (Virtual qabulxona) </p>
                </div>
                    <div className="item">
                        <LazyLoadImage src={bloknot} effect={"blur"}/>
                        <p> Fuqarolardan taklif va mulohazalarini olish </p>
                    </div>
                    <div className="item">
                        <LazyLoadImage src={star} effect={"blur"}/>
                        <p> Hududlarni rivojlantirish xizmati </p>
                    </div>
                    <div className="item">
                        <LazyLoadImage src={car} effect={"blur"}/>
                        <p> Shahar transporti bo‘yicha ma’lumot </p>
                    </div>
                </div>
                {/* <div className="RightBigCard">
                    <h1 className="text1"> ❓So‘rovnoma </h1>
                    <p className="text2"> Biz boshqa saytlar kabi sayt dizayni sizga yoqdimi degan savolni qoldirmasligimiz kerak! Chunki hammani fikri har xil, foydalanuvchi dizayner emas! Bo‘ladigan so‘rov qoyish kk  </p>
                    <div className="Line1">
                    <h1 className="CardTitle"> To‘ppa to‘g‘ri  -  74% </h1>
                    </div>
                    <div className="Line2">
                        <h1 className="CardTitle"> Yo‘q bu xato fikr  -  3% </h1>
                    </div>
                    <div className="Line3">
                        <h1 className="CardTitle"> Yo‘q bu xato fikr  -  3% </h1>
                    </div>
                    <div className="Line4">
                        <h1 className="CardTitle"> Yo‘q bu xato fikr - 3% </h1>
                    </div>
                    <h3 className="LastTitle"> Umumiy ovozlar: 1554 ta </h3> */}
                {/* </div> */}
            </div>
        </div>
    );
}

export default Section4;