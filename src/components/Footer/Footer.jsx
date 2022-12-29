import "./Footer.scss"
import twitter from "../../Images/twitter.svg"
import facebook from "../../Images/facebook.svg"
import youtube from "../../Images/youtube.svg"
import instagram from "../../Images/instagram.svg"
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
                        <button><img src={twitter} alt=""/> </button>
                        <button><img src={instagram} alt=""/> </button>
                        <button><img src={facebook} alt=""/> </button>
                        <button><img src={youtube} alt=""/> </button>
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
            </div>
        </div>
    );
}

export default Footer;