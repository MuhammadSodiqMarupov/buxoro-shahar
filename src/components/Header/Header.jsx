import "./Header.scss";
import logo from "../../Images/logo.jpg";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import search from "../../Images/search.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import home from "../../Images/home.svg";
import Search from "../search";
function Header(props) {
  const [searchModal, setSearchModal] = useState(false);
  const [langShow, setLangShow] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [allNews,setAllNews] = useState([]);
  const [mediaShowFunctions,setMediaShowFunctions] = useState(false);
  const [selectTxt, setSelectTxt] = useState(
    localStorage.getItem("langType")
      ? getFullTxtFromStorage(localStorage.getItem("langType"))
      : "O‘Z"
  );

  const navigate = useNavigate()

  function getFullTxtFromStorage(StringTxt) {
    if (StringTxt === "1") {
      return "O‘Z";
    } else if (StringTxt === "2") {
      return "Cyrl";
    } else if (StringTxt === "3") {
      return "Rus";
    } else if (StringTxt === "4") {
      return "Eng";
    }
  }

  let hamburgerDoc = document.getElementById("hamburger");
  function changeLang(s, fullTxt) {
    setSelectTxt(fullTxt);  
    localStorage.setItem("langType", s);
    props.refresh();
  }

  const menuOpen = () => {
      hamburgerDoc.classList.add("hamburger__active");
      setHamburger(true)
};

const menuBlock = () => {
    hamburgerDoc.classList.remove("hamburger__active");
    setHamburger(false);
  };


  useEffect(()=>{
    setAllNews([...props.navbarData]);
    let copy = [];
    props.navbarData.map(item=>{
      copy.push(false);
    })
    setMediaShowFunctions([...copy]);
  },[props.navbarData])
  return (
    <>
      <div className="hamburger" id="hamburger">
        <div className="hamburger_media">
            {allNews?.map((item,index)=><ul key={index} className={mediaShowFunctions[index]?"active":"un_active"} onClick={()=>{
              mediaShowFunctions[index] = !mediaShowFunctions[index];
              setMediaShowFunctions([...mediaShowFunctions]);
            }} onMouseOver={()=>{
              mediaShowFunctions[index] = true;
              setMediaShowFunctions([...mediaShowFunctions])
            }}
            onMouseLeave={()=>{
              mediaShowFunctions[index] = false;
              setMediaShowFunctions([...mediaShowFunctions])
            }}
            >
                <li>{item.title}</li>
                <ul key={index}>
                {item.items.map((item1,index)=>
                        <li>
                          <Link onClick={()=>menuBlock()} className="link_item" to={item1.page}>
                          {item1.title}
                          </Link>
                        </li>
                )}
                </ul>
            </ul>)}
            <div className="close_menu__media" onClick={()=>menuBlock()}>
              x
            </div>
        </div>
      <div className="hamburger_default">
      {hamburger &&
          props.navSideBar?.map((item, index) => (
            <div className={"part"} key={index}>
              <h1 className={"blue"}>{item.first.title}</h1>
              {item.first.items.map((item1, index1) => (
                props.titlesCopy[index]?.first?.items[index1]?.page.startsWith("http")?<a href={props.titlesCopy[index]?.first?.items[index1]?.page}>
                  <h1 className={item1.isPage ? "blue" : ""}>{item1.title}</h1>
                </a>:
                <Link
                  onClick={() => menuBlock()}
                  key={index1}
                  to={props.titlesCopy[index]?.first?.items[index1]?.page
                    .toLowerCase()
                    .replaceAll(" ", "_")}
                >
                  <h1 className={item1.isPage ? "" : ""}>{item1.title}</h1>
                </Link>
              ))}

              <h1 className={"blue"}>{item.second?.title}</h1>
              {item.second?.items.map((item1, index1) => (
                props.titlesCopy[index]?.second?.items[index1]?.page.startsWith("http")?<a href={props.titlesCopy[index]?.second?.items[index1]?.page}>
                  <h1 className={item1.isPage ? "" : ""}>{item1.title}</h1>
                </a>:
                <Link
                  onClick={() => menuBlock()}
                  key={index1}
                  to={props.titlesCopy[index]?.second?.items[index1]?.page
                    .toLowerCase()
                    .replaceAll(" ", "_")}
                >
                  <h1 className={item1.isPage ? "" : ""}>{item1.title}</h1>
                </Link>
              ))}
            </div>
          ))}
      </div>
      </div>
      <div className="Header">
        <div className="myContainer">
          <div className="left">
            <div>
              <img
                src={logo}
                onClick={() =>
                  hamburger ? menuBlock() : menuOpen()
                }
                width={32}
                height={32}
                alt="Logojon"
              />
              <img
                onClick={() => navigate("/")}
                src={home}
                alt="Homejon"
                className="home__logo"
              />
              {hamburger ? (
                <p className={"close_menu"} onClick={() => menuBlock()}>
                  CLOSE
                </p>
              ) : (
                ""
              )}
            </div>
            {props.navbarData?.length != 0
              ? props.navbarData.map((item, index) => (
                  <Dropdown
                    key={index}
                    onClick={() => menuBlock()}
                    show={props.titles[index]}
                    onMouseOver={() => {
                      props.titles[index] = true;
                      props.set([...props.titles]);
                    }}
                    onMouseLeave={() => {
                      props.titles[index] = false;
                      props.set([...props.titles]);
                    }}
                  >
                    <Dropdown.Toggle caret size="lg" className={"myDropdown"}>
                      {item.title}
                    </Dropdown.Toggle>
                    {item?.items?.length ? (
                      <Dropdown.Menu className="my_dropdown_menu">
                        {item.items.map((item1, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => {
                              if (item1.page.startsWith("http")) {
                                window.location.href = item1.page;
                                return;
                              }
                              navigate(item1.page);
                            }}
                          >
                            {item1.page.startsWith("http") ? (
                              <a className="tdn " href={item1.page}>
                                {item1.title}
                              </a>
                            ) : (
                             
                              item1.title
                            )}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    ) : (
                      ""
                    )}
                  </Dropdown>
                ))
              : ""}
          </div>
          <div className="right ">
            <button className={"searchButton"}>
              <img onClick={()=>{setSearchModal(true)}} width={20} height={24} src={search} alt="Searchjon" />
            </button>
            <Dropdown
              className={"langButton"}
              show={langShow}
              onMouseLeave={() => setLangShow(false)}
              onMouseOverCapture={() => setLangShow(true)}
            >
              <Dropdown.Toggle className={"myDropdown"}>
                {selectTxt}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLang("1", "O‘Z")}>
                  O‘Z
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLang("2", "Cyrl")}>
                  Cyrl
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLang("3", "Rus")}>
                  Rus
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLang("4", "Eng")}>
                  Eng
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to={"/request"} className={"murojaatButton"}>
              Murojjat yuborish
            </Link>
          </div>
          <Search searchModal={searchModal} onClose={()=>setSearchModal(false)}/>
        </div>
      </div>
    </>
  );
}

export default Header;
