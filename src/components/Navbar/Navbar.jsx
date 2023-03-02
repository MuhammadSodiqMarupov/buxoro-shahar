import "./Navbar.scss"
import Gerb from '../../Images/Gerb.svg'
function Navbar({Filter}) {
    const langData = [
        {
            h1: "Buxoro viloyati",
            h2: "Shofirkon tuman hokimligi",
            p: "rasmiy veb sayti"
        },
        {
            h1: "Бухоро вилояти",
            h2: "Шофиркон туман ҳокимлиги",
            p: "расмий веб сайти"
        },
        {
            h1: "Бухарская область",
            h2: "Администрация Шафирконского района",
            p: "Официальный веб-сайт"
        },
        {
            h1: "Bukhara region",
            h2: "Shafirkon district administration",
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