import "./Navbar.scss"
import Gerb from '../../Images/Gerb.svg'
function Navbar({Filter}) {
    const langData = [
        {
            h1: "O‘zbekiston Respublikasi",
            h2: "Shofirkon tuman",
            p: "rasmiy veb sayti"
        },
        {
            h1: "Ўзбекистон Республикаси",
            h2: "Шофиркон туман",
            p: "расмий веб сайти"
        },
        {
            h1: "Республика Узбекистан",
            h2: "Шафирконский район",
            p: "Официальный веб-сайт"
        },
        {
            h1: "Republic of Uzbekistan",
            h2: "Shafirkon district",
            p: "official website"
        },
    ]



    return (
        <div className="Navbar">
            <div className="NavbarContainer">
                <div className="ForImg">
                    <img className="gerb" src={Gerb} alt="Loading Image....."/>
                    <h1 className={"txt-media"}>{Filter(langData).h1}</h1>
                    <h2 className={"txt-media"}> {Filter(langData).h2} </h2>
                    <p className={"txt-media"}> {Filter(langData).p} </p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;