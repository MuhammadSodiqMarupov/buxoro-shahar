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
                    <Link to={"my.gov.uz"}>
                    <div className="card2">
                        <LazyLoadImage className="card3" src={check} effect={"blur"}/>
                        <p> Yagona interaktiv davlat xizmatlari portali </p>
                    </div>
                    </Link>
                    <Link to={"https://president.uz"}>
                    <div className="card2">
                        <LazyLoadImage  className="card3" src={emblem} effect={"blur"} />
                        <p> O‘zbekiston Respublikasi Prezidentining rasmiy veb-sayti </p>
                    </div>
                    </Link>
                    <Link to={"e-qaror.gov.uz"}>
                    <div className="card2">
                        <LazyLoadImage  className="card3"src={adliya} effect={"blur"}/>
                        <p> E-QAROR elektron portali  </p>
                    </div>
                    </Link>
                    <Link to={"regulation.gov.uz"}>
                    <div className="card2">
                        <LazyLoadImage className="card3" src={emblem} effect={"blur"}/>
                        <p> Hujjatlar loyihalari muhokamasi portali </p>
                    </div>
                    </Link>
                    {/* <Link to={"*"}> 
                    <div className="card2">
                        <LazyLoadImage src={lexuz} effect={"blur"}/>
                        <p> Oʻzbekiston Respublikasi Qonun hujjatlari maʼlumotlari milliy bazasi </p>
                    </div>
                    </Link> */}
                    <Link to={"xarid.uzex.uz"}>

                    <div className="card2">
                        <LazyLoadImage className="card3" src={emblem} effect={"blur"}/>
                        <p> Davlat xaridlari elektron tizimi </p>
                    </div>
                    </Link>
                    <Link to={"data.egov.uz"}>
                    <div className="card2">
                        <LazyLoadImage  className="card3 " src={egov} effect={"blur"}/>
                        <p> Ochiq ma'lumotlar portali</p>
                    </div>
                    </Link>
                    <Link to={"pm.gov.uz"}>
                    <div className="card2">
                        <LazyLoadImage className="card3" src={pmgov} effect={"blur"}/>
                        <p>  Prezident virtual qabulxonasi</p>
                    </div>
                    </Link>
                    <Link to={"murojaat.gov.uz"}>
                    <div className="card2">
                        <LazyLoadImage className="card3" src={murojat} effect={"blur"}/>
                        <p>Murojaatlar bilan ishlash platformasi</p>
                    </div>
                    </Link>
                    <Link to={"openbudget.uz"}>
                    <div className="card2">
                        <LazyLoadImage className="card3" src={openbudjet} effect={"blur"}/>
                        <p>Ochiq byudjet portali</p>
                    </div>
                    </Link>
                    <Link to={"mitsoft.uz"}>
                    <div className="card2">
                        <LazyLoadImage className="card3" src={mitsoft} effect={"blur"}/>
                        <p>MITSOFT dasturchilar akademiyasi</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Section5;