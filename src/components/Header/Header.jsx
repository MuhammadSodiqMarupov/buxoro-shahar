import "./Header.scss"
import logo from "../../Images/logo.jpg"
import {Dropdown} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {useEffect, useState} from "react";
import search from '../../Images/search.jpg';
function Header(props) {
    const [showes,setShowes] = useState([]);
    const [langShow,setLangShow] = useState(false);
    useEffect(()=>{
            showes.push({
                text:"Shahar hokimligi",
                show:false,
            });
        showes.push({
            text:"Shahar haqida",
            show:false,
        });
        showes.push({
            text:"Elektron xizmatlar",
            show:false,
        });
        showes.push({
            text:"Elektron xizmatlar",
            show:false,
        });
        showes.push({
            text:"Meyoriy hujjatlar",
            show:false,
        });
        showes.push({
            text:"Turizm",
            show:false,
        });
        setShowes([...showes]);
    },[])

    function dropDownOpen(index) {
        showes[index].show = true;
        setShowes([...showes]);
    }
    function dropDownClose(index) {
        showes[index].show = false;
        setShowes([...showes]);
    }
    return (
        <div className="Header">
            <div className="myContainer">
            <div className="left">
                <img src={logo} width={32} height={32} alt="Logojon"/>
                {showes.map((item,index)=><Dropdown key={index} show={item.show} onMouseOver={()=>dropDownOpen(index)} onMouseLeave={()=>dropDownClose(index)}>
                    <DropdownToggle className={"myDropdown"}>
                        {item.text}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            test
                        </DropdownItem>
                        <DropdownItem>
                            test
                        </DropdownItem>
                        <DropdownItem>
                            test
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>)}
            </div>
                <div className="right">
                    <button className={"searchButton"}>
                        <img width={24} height={24} src={search} alt="Searchjon"/>
                    </button>
                    <Dropdown className={"langButton"} show={langShow} onMouseLeave={()=>setLangShow(false)} onMouseOver={()=>setLangShow(true)}>
                        <DropdownToggle className={"myDropdown"}>
                            O‘Z
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Cyrl</DropdownItem>
                            <DropdownItem>Rus</DropdownItem>
                            <DropdownItem>Eng</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <button className={"murojaatButton"}>
                        Murojjat yuborish
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;