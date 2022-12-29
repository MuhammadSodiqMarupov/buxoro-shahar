import "./Section5.scss"
import check from "../../Images/check.svg"
import emblem from "../../Images/Emblem_of_Uzbekistan.svg"
import adliya from "../../Images/adliya.svg"
import lexuz from "../../Images/lex.svg"


function Section5() {
    return (
        <div className="Section5">
            <div className="s5Container">
                <h1 className="title"> ✅ Foydali havolalar </h1>
                <div className="bottom">
                    <div className="card1">
                        <img src={check} alt=""/>
                        <p> Yagona interaktiv davlat xizmatlari portali </p>
                    </div>
                    <div className="card2">
                        <img src={emblem} alt=""/>
                        <p> Davlat xaridlari elektron tizimi </p>
                    </div>
                    <div className="card2">
                        <img src={adliya} alt="adliyajon"/>
                        <p> O‘zbekiston Respublikasi Adliya Vazirligi </p>
                    </div>
                    <div className="card2">
                        <img src={emblem} alt=""/>
                        <p> Tadbirkorlar virtual ofisi </p>
                    </div>
                    <div className="card2">
                        <img src={lexuz} alt=""/>
                        <p> Oʻzbekiston Respublikasi Qonun hujjatlari maʼlumotlari milliy bazasi </p>
                    </div>
                    <div className="card2">
                        <img src={emblem} alt=""/>
                        <p> Ijro intizomi Idoralararo yagona elektron tizim </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section5;