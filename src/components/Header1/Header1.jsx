import "./Header1.scss"
import twitter from "../../Images/twitter 1.svg"
import instagram from "../../Images/instagram 1.svg"
import facebook from "../../Images/facebook 1.svg"
import youtube from "../../Images/youtube 1.svg"
import warning from "../../Images/warning.svg"
function Header1() {
    return (
        <div className="Header1">
            <div className="h1Container">
                <div className="h1Left">
                    <button>
                        <img src={twitter} alt=""/>
                    </button>
                    <button>
                        <img src={instagram} alt=""/>
                    </button>
                    <button>
                        <img src={facebook} alt=""/>
                    </button>
                    <button>
                        <img src={youtube} alt=""/>
                    </button>
                </div>
                <p><img src={warning} alt=""/> Sayt test rejimida ishlamoqda </p>
                <div className="h1Last">
                    <button> Maxsus imkoniyatlar </button>
                </div>
            </div>
        </div>
    );
}

export default Header1;