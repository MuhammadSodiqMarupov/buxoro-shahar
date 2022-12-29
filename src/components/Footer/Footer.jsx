import "./Footer.scss"
import twitter from "../../Images/twitter 1.svg"
import facebook from "../../Images/facebook 1.svg"
import youtube from "../../Images/youtube 1.svg"
import instagram from "../../Images/instagram 1.svg"
import {YMaps , Map ,Placemark} from "react-yandex-maps";
import {LazyLoadImage} from "react-lazy-load-image-component";

function Footer() {
    return (
        <div className="Footer">
            <div className="footerContainer">
                <div className="lastLeft">
                   <div className="top">
                        <p className="call"> Telefon </p>
                        <h1 className="callNumber"> +998 90 123 45 67 </h1>
                   </div>
                    <div className="apps">
                        <button><LazyLoadImage src={twitter} effect={"blur"}/></button>
                        <button><LazyLoadImage src={instagram} effect={"blur"}/> </button>
                        <button><LazyLoadImage src={facebook} effect={"blur"} /> </button>
                        <button><LazyLoadImage src={youtube} effect={"blur"}/> </button>
                    </div>
                    <button className="btn"> <i className="fa-regular fa-envelope"></i>  Elektron murojjat</button>
                </div>
                <div className="lastMiddle">
                    <div className="other">
                         <h1> Manzil </h1>
                          <p> Mustaqillik ko‘chasi, 15-uy </p>
                    </div>
                       <div className="other">
                           <h1> E-mail </h1>
                           <p> bukhara_shahar@gmail.com </p>
                       </div>

                </div>
                <YMaps>
                    <div className="yandex_map">
                        <Map defaultState={{
                            center : [39.763972, 64.439139] ,
                            zoom: 15
                        }}>
                            <Placemark geometry={[39.763972, 64.439139]} />

                        </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    );
}

export default Footer;