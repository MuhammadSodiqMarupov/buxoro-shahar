import "./Footer.scss"
import twitter from "../../Images/twitter 1.svg"
import facebook from "../../Images/facebook 1.svg"
import youtube from "../../Images/youtube 1.svg"
import instagram from "../../Images/instagram 1.svg"
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
                <div className="right_map">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12208.338012514056!2d64.65412035095811!3d40.09582884831204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5069cd1745df59%3A0x237f48f2c7ce0cff!2sG%60ijduvon%20Tuman%20Ichki%20Ishlar%20Bo%60limi!5e0!3m2!1sru!2suk!4v1671468877396!5m2!1sru!2suk" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Footer;