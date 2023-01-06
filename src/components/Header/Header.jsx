import "./Header.scss"
import logo from "../../Images/logo.jpg"
import {Dropdown} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {useState} from "react";
import search from '../../Images/search.jpg';

function Header(props) {
    const [langShow, setLangShow] = useState(false);
    const [hamburger, setHamburger] = useState(false);

    function changeLang(s) {
        localStorage.setItem("langType", s);
        props.refresh();
    }

    const menuOpen = (height) => {
        document.querySelector(".hamburger").style.height = height
        setHamburger(prev => !prev);
    };
    return (
        <>
            <div className="hamburger">

            </div>
            <div className="Header">
                <div className="myContainer">
                    <div className="left">
                        <div>
                            <img src={logo} onClick={() => hamburger ? menuOpen('0vh') : menuOpen('100vh')} width={32}
                                 height={32} alt="Logojon"/>
                            {hamburger ?
                                <p className={"close_menu"} onClick={() => menuOpen('0')}>CLOSE</p>
                                : ""}
                        </div>
                        {props.navbarData.length != 0 ? props.navbarData.map((item, index) => <Dropdown key={index}
                                                                                                        show={props.titles[index]}
                                                                                                        onMouseOver={() => {
                                                                                                            props.titles[index] = true
                                                                                                            props.set([...props.titles]);
                                                                                                        }}
                                                                                                        onMouseLeave={() => {
                                                                                                            props.titles[index] = false
                                                                                                            props.set([...props.titles]);
                                                                                                        }}>
                            <DropdownToggle className={"myDropdown"}>
                                {item.title}
                            </DropdownToggle>
                            <DropdownMenu>
                                {item.items.map((item1, index) =>
                                    <DropdownItem key={index}>{item1.title}</DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>) : ''}
                    </div>
                    <div className="right">
                        <button className={"searchButton"}>
                            <img width={24} height={24} src={search} alt="Searchjon"/>
                        </button>
                        <Dropdown className={"langButton"} show={langShow} onMouseLeave={() => setLangShow(false)}
                                  onMouseOver={() => setLangShow(true)}>
                            <DropdownToggle className={"myDropdown"}>
                                O‘Z
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => changeLang('1')}>O‘Z</DropdownItem>
                                <DropdownItem onClick={() => changeLang('2')}>Cyrl</DropdownItem>
                                <DropdownItem onClick={() => changeLang('3')}>Rus</DropdownItem>
                                <DropdownItem onClick={() => changeLang('4')}>Eng</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <button className={"murojaatButton"}>
                            Murojjat yuborish
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;