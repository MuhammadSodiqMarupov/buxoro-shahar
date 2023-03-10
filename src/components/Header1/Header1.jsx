import "./Header1.scss"
import twitter from "../../Images/twitter 1.svg"
import instagram from "../../Images/instagram 1.svg"
import facebook from "../../Images/facebook 1.svg"
import youtube from "../../Images/youtube 1.svg"
import warning from "../../Images/warning.svg"
import Modalka from "../pages/modalca/modalka"
import { useState } from "react"

const data = [
    {
        text:"Sayt test rejimda ishlamoqda",
        btn:"Maxsus imkoniyatlar"
    },
    {
        text:"Сайт тест режимда ишламоқда",
        btn:"Махсус имкониятлар"
    },
    {
        text:"Сайт находится в тестовом режиме",
        btn:"Специальные возможности"
    },
    {
        text:"The site is in test mode",
        btn:"Special opportunities"
    }
]
function Header1({ getDataFilterByArr }) {
    const [modal, setModal] = useState(false);
    return (
        <div className="Header1">
            <div className="h1Container">
                <div className="h1Left">
                    <button>
                        <img src={twitter} alt="Loading Image....."/>
                    </button>
                    <button>
                        <img src={instagram} alt="Loading Image....."/>
                    </button>
                    <button>
                        <img src={facebook} alt="Loading Image....."/>
                    </button>
                    <button>
                        <img src={youtube} alt="Loading Image....."/>
                    </button>
                </div>
                <p><img src={warning} alt="Loading Image....."/>{getDataFilterByArr(data).text}</p>
                <div className="h1Last">
                    <button onClick={()=>setModal(true)}>{getDataFilterByArr(data).btn}</button>
                    <Modalka modal={modal} onClose={()=>setModal(false)} />
                </div>
            </div>
        </div>
    );
}

export default Header1;