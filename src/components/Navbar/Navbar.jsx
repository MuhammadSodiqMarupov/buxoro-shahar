import "./Navbar.scss"
import Gerb from '../../Images/Gerb.svg'
function Navbar() {
    return (
        <div className="Navbar">
            <div className="NavbarContainer">
                <div className="ForImg">
                    <img className="gerb" src={Gerb} alt=""/>
                    <h1 className={"txt-media"}> O‘zbekiston Respublikasi</h1>
                    <h2 className={"txt-media"}> Buxoro shahar </h2>
                    <p className={"txt-media"}> rasmiy veb sayti </p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;