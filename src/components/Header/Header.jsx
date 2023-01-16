import "./Header.scss"
import logo from "../../Images/logo.jpg"
import {Dropdown} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {useState} from "react";
import search from '../../Images/search.jpg';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header(props) {
    const [langShow, setLangShow] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [selectTxt,setSelectTxt] = useState(localStorage.getItem("langType")?getFullTxtFromStorage(localStorage.getItem("langType")):"O‘Z");

    const navigate = useNavigate();

    function getFullTxtFromStorage(StringTxt) {
        if(StringTxt==='1') {
            return "O‘Z";
        }else if(StringTxt==='2') {
            return "Cyrl"
        }else if(StringTxt==='3') {
            return 'Rus'
        }else if(StringTxt==='4') {
            return "Eng"
        }
    }

    function changeLang(s,fullTxt) {
        setSelectTxt(fullTxt);
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
            {hamburger && props.navSideBar?.map((item, index) => <div className={"part"} key={index}>
                        <h1 className={"blue"}>{item.first.title}</h1>
                        {item.first.items.map((item1, index1) => <Link onClick={()=>{
                            menuOpen("0vh");
                            props.setPage(true);
                        }} key={index1}
                            to={props.titlesCopy[index]?.first.items[index1].page.toLowerCase().replaceAll(" ", "_")}>
                            <h1 className={item1.isPage ? "blue" : ""}>{item1.title}</h1>
                        </Link>)}
                        <h1 className={"blue"}>{item.second.title}</h1>
                        {item.second.items.map((item1, index1) => item1.title ?
                            <Link onClick={()=>{
                                menuOpen("0vh");
                                props.setPage(true);
                            }} key={index1} to={props.titlesCopy[index]?.second.items[index1].page.toLowerCase().replaceAll(" ", "_")}>
                                <h1 className={item1.isPage ? "blue" : ""}>{item1.title}</h1>
                            </Link> : "")}
                    </div>)}
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
                        {props.navbarData?.length != 0 ? props.navbarData.map((item, index) => <Dropdown key={index}
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
                            {item?.items?.length ? <DropdownMenu>
                                {item.items.map((item1, index) =>
                                    <DropdownItem key={index} onClick={()=>{
                                        navigate(item1.page);
                                    }}>{item1.title}</DropdownItem>
                                )}
                            </DropdownMenu> : ""}
                        </Dropdown>) : ''}
                    </div>
                    <div className="right">
                        <button className={"searchButton"}>
                            <img width={24} height={24} src={search} alt="Searchjon"/>
                        </button>
                        <Dropdown className={"langButton"} show={langShow} onMouseLeave={() => setLangShow(false)}
                                  onMouseOver={() => setLangShow(true)}>
                            <DropdownToggle className={"myDropdown"}>
                                {selectTxt}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => changeLang('1',"O‘Z")}>O‘Z</DropdownItem>
                                <DropdownItem onClick={() => changeLang('2',"Cyrl")}>Cyrl</DropdownItem>
                                <DropdownItem onClick={() => changeLang('3',"Rus")}>Rus</DropdownItem>
                                <DropdownItem onClick={() => changeLang('4',"Eng")}>Eng</DropdownItem>
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