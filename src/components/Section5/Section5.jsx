import "./Section5.scss"
import check from "../../Images/check.jpg"
import emblem from "../../Images/Embel_Of_Uzbekistan.jpg"
import adliya from "../../Images/adlya.jpg"
import lexuz from "../../Images/lex (1).jpg"
import {LazyLoadImage} from "react-lazy-load-image-component";


function Section5() {
    return (
        <div className="Section5">
            <div className="s5Container">
                <h1 className="title"> ✅ Foydali havolalar </h1>
                <div className="bottom">
                    <div className="card1">
                        <LazyLoadImage src={check} effect={"blur"}/>
                        <p> Yagona interaktiv davlat xizmatlari portali </p>
                    </div>
                    <div className="card2">
                        <LazyLoadImage src={emblem} effect={"blur"} />
                        <p> Davlat xaridlari elektron tizimi </p>
                    </div>
                    <div className="card2">
                        <LazyLoadImage src={adliya} effect={"blur"}/>
                        <p> O‘zbekiston Respublikasi Adliya Vazirligi </p>
                    </div>
                    <div className="card2">
                        <LazyLoadImage src={emblem} effect={"blur"}/>
                        <p> Tadbirkorlar virtual ofisi </p>
                    </div>
                    <div className="card2">
                        <LazyLoadImage src={lexuz} effect={"blur"}/>
                        <p> Oʻzbekiston Respublikasi Qonun hujjatlari maʼlumotlari milliy bazasi </p>
                    </div>
                    <div className="card2">
                        <LazyLoadImage src={emblem} effect={"blur"}/>
                        <p> Ijro intizomi Idoralararo yagona elektron tizim </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section5;