import "./Header1.scss"
import twitter from "../../Images/twitter 1.svg"
import instagram from "../../Images/instagram 1.svg"
import facebook from "../../Images/facebook 1.svg"
import youtube from "../../Images/youtube 1.svg"
import warning from "../../Images/warning.svg"
import getData from "../../lang/langTypeFilter"
import { useEffect } from "react"
const data = [
    {
        text:"Sayt test rejimda ishlamoqda",
        btn:"Murojjat yuborish"
    },
    {
        text:"Сайт тест режимда ишламоқда",
        btn:"Мурожжат юбориш"
    },
    {
        text:"Сайт находится в тестовом режиме",
        btn:"Отправить запрос"
    },
    {
        text:"The site is in test mode",
        btn:"Send a request"
    }
]
function Header1() {
    useEffect(()=>{
        },[])
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
                <p><img src={warning} alt=""/>123 </p>
                <div className="h1Last">
                    <button>123</button>
                </div>
            </div>
        </div>
    );
}

export default Header1;