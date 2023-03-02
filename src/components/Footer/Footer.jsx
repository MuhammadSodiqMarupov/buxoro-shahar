import "./Footer.scss"
import {Link} from "react-router-dom"
import twitter from "../../Images/twitter 1.svg"
import facebook from "../../Images/facebook 1.svg"
import youtube from "../../Images/youtube 1.svg"
import instagram from "../../Images/instagram 1.svg"
import {LazyLoadImage} from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom"
function Footer() {
    const navigate = useNavigate();
    return (
        <div className="Footer">
            <div className="footerContainer">
                <div className="lastLeft">
                   <div className="top">
                        <p className="call"> Telefon </p>
                        <h1 className="callNumber"> (65) 502-20-04</h1>
                   </div>
                    <div className="apps">
                        <button><LazyLoadImage src={twitter} effect={"blur"}/></button>
                        <button><LazyLoadImage src={instagram} effect={"blur"}/> </button>
                        <Link to={"//www.facebook.com/shofirkontuman.hokimligi"}>
                        <button><LazyLoadImage src={facebook} effect={"blur"} /> </button>
                        </Link>
                        <button><LazyLoadImage src={youtube} effect={"blur"}/> </button>
                    </div>
                    <button onClick={()=>navigate("/request")} className="btn"> <i className="fa-regular fa-envelope"></i>  Elektron murojjat</button>
                </div>
                <div className="lastMiddle">
                    <div className="other">
                         <h1> Manzil </h1>
                          <p> Шофиркон шахар Мустакиллик кучаси 4-уй </p>
                    </div>
                       <div className="other">
                           <h1> E-mail </h1>
                           <p> Shofirkon.@exat.uz </p>
                       </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;