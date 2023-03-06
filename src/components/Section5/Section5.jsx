import "./Section5.scss"
import { Link } from "react-router-dom"
import check from "../../Images/check.svg"
import emblem from "../../Images/Embel_Of_Uzbekistan.jpg"
import adliya from "../../Images/adlya.jpg"
import pmgov from "../../Images/icon/pm.gov.png"
import openbudjet from "../../Images/icon/openbudjet.png"
import mitsoft from "../../Images/icon/mitsoft.png"
import egov from "../../Images/icon/egov.png"
import murojat from "../../Images/icon/murojat.png"
import {LazyLoadImage} from "react-lazy-load-image-component";


function Section5() {
    return (
        <div className="Section5">
            <div className="s5Container">
                <h1 className="title"> ✅ Foydali havolalar </h1>
                <div className="bottom">
                        <a href="https://my.gov.uz/ru">
                    <div className="card2">
                        <LazyLoadImage className="card3" src={check} effect={"blur"}/>
                        <p> Yagona interaktiv davlat xizmatlari portali </p>
                    </div>
                        </a>
                    <a href="https://president.uz">
                    <div className="card2">
                        <LazyLoadImage  className="card3" src={emblem} effect={"blur"} />
                        <p> O‘zbekiston Respublikasi Prezidentining rasmiy veb-sayti </p>
                    </div>
                    </a>
                    <a href="https://e-qaror.gov.uz">
                    <div className="card2">
                        <LazyLoadImage  className="card3"src={adliya} effect={"blur"}/>
                        <p> E-QAROR elektron portali  </p>
                    </div>
                    </a>
                  <a href="https://regulation.gov.uz">

                    <div className="card2">
                        <LazyLoadImage className="card3" src={emblem} effect={"blur"}/>
                        <p> Hujjatlar loyihalari muhokamasi portali </p>
                    </div>
                  </a>
                    <a href="https://xarid.uzex.uz">
                    <div className="card2">
                        <LazyLoadImage className="card3" src={emblem} effect={"blur"}/>
                        <p> Davlat xaridlari elektron tizimi </p>
                    </div>
                       </a>
                    <a href="https://data.egov.uz">
                    <div className="card2">
                        <LazyLoadImage  className="card3 " src={egov} effect={"blur"}/>
                        <p> Ochiq ma'lumotlar portali</p>
                    </div>
                    </a>
                    <a href="https://pm.gov.uz">
                    <div className="card2">
                        <LazyLoadImage className="card3" src={pmgov} effect={"blur"}/>
                        <p>  Prezident virtual qabulxonasi</p>
                    </div>
                    </a>
                   <a href="https://murojaat.gov.uz">
                    <div className="card2">
                        <LazyLoadImage className="card3" src={murojat} effect={"blur"}/>
                        <p>Murojaatlar bilan ishlash platformasi</p>
                    </div>
                    </a>
                    <a href="https://openbudget.uz">
                    <div className="card2">
                        <LazyLoadImage className="card3" src={openbudjet} effect={"blur"}/>
                        <p>Ochiq byudjet portali</p>
                    </div>
                    </a>
                   <a href="https://mitsoft.uz">
                    <div className="card2">
                        <LazyLoadImage className="card3" src={mitsoft} effect={"blur"}/>
                        <p>MITSOFT dasturchilar akademiyasi</p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Section5;