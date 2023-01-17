import "./App.scss"
import React, {useEffect,useState} from "react";
import {Routes,Route} from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Outlet } from "react-router-dom";
import headerAPI from "./headerAPI";
import Header1 from "./components/Header1/Header1";
import DynamicSideBar from "./components/SideBar/DynamicSideBar";
import Xizmatlar from "./components/pages/xizmatlar/xizmatlar";
import Address from "./components/pages/manzil/address";
import Rahbariyat from "./components/pages/rahbariyat/rahbariyat";
import Mayors from "./components/pages/mayors/mayors";
import Request from "./components/pages/request/Request";
import {useLocation} from "react-router-dom";
import Malumot from "./components/pages/shahar-haqida/malumot/Malumot";
import Deparments from "./components/pages/shahar-haqida/reginal_departments/Deparments";
const Header = React.lazy(()=>import('./components/Header/Header'))
const Navbar = React.lazy(()=>import('./components/Navbar/Navbar'))
const Section2 = React.lazy(()=>import('./components/Section2/Section2'))
const Section3 = React.lazy(()=>import('./components/Section3/Section3'))
const Section4 = React.lazy(()=>import('./components/Section4/Section4'))
const Section5 = React.lazy(()=>import('./components/Section5/Section5'))
const FOTO_VIDEO_GALERY = React.lazy(()=>import('./components/FOTO_VIDEO_GALERY/FOTO_VIDEO_GALERY'))
const Footer = React.lazy(()=>import("./components/Footer/Footer"));
function App() {
  const [news,setNews] = useState([]);
  const [anotherPage,setAnotherPage] = useState(false);
  const [navSideBar,setNavSideBar] = useState([]);
  const [titles,setTitltes] = useState([]);
  const [navbarData,setNavbarData] = useState([]);
  const [showes,setShowes] = useState([]);

    const location = useLocation();

  function getDataFilter(stringTitle) {
    let FOUND_OBJECT = {};
    navbarData.map(item=>{
      item.items.map(item1=>{
        if(item1.page===stringTitle) {
          FOUND_OBJECT = item;
          return FOUND_OBJECT;
        }
      })
    })
    return FOUND_OBJECT;
  }


  function getBackendData() {
    setShowes([]);
      setNews([])
    let localLangType = localStorage.getItem("langType");
    let langType = localLangType??'1';
    headerAPI("api/home/menus",langType).then(res=>{
      setNavbarData([...res.data.data]);
      res.data.data.map(item=>{
        showes.push(false);
      })
      setShowes([...showes]);
      setNavbarData([...res.data.data]);
      
      let copy = [];
      let data = res.data.data;
      for (let i = 0; i < data.length; i += 2) {
          copy.push({
              first: data[i],
              second: data[i + 1],
          });
      }
      setNavSideBar([...copy]);
      let copy2 = [];
      for (let i = 0; i < data.length; i += 2) {
          copy2.push({
              first: data[i],
              second: data[i === data.length ? i : i + 1],
          });
      }
      setTitltes([...copy2]);
    })

      let copy = [];
    headerAPI("api/post/1",langType).then(({data})=>{
      for(let i = 0;i < 3;i++) {
        let list = data.data.list;
        copy.push(list[i]);
      }
      setNews([...copy]);
    })
  }

  function checkPage() {
    let docURL = document.URL;
    let pageNavigation = docURL.substring(docURL.lastIndexOf("/")+1);
    if(pageNavigation!="") {
      setAnotherPage(true)
    }else {
      setAnotherPage(false)
    }
  }
  useEffect(()=>{
      checkPage()
      window.scroll(0,0);
  },[location.pathname])
  useEffect(()=>{
    checkPage();
    getBackendData();
  },[]);
  return (
      <Routes>
        <Route path={"/"} element={   <>
          <div className={"sticky__header"}>

            <Header1/>
            <Header  titlesCopy={titles} refresh={getBackendData} navSideBar={navSideBar} navbarData={navbarData} titles={showes} set={setShowes}/>
          </div>
         { anotherPage?"":  <><Navbar/>
        <Section2/>
        <Section3 data={news}/>
        <Section4/>
        <FOTO_VIDEO_GALERY/>
        <Section5/>
        </>}
        <Outlet/>
        <Footer/>
      </>}>
      <Route path="/information-service" element={<Xizmatlar data={getDataFilter("information-service")}/>}/>
      <Route path="/address" element={<Address data={getDataFilter("address")}/>}/>
      <Route path="/the-leadership-of-the-regional-administration" element={<Rahbariyat data={getDataFilter("the-leadership-of-the-regional-administration")}/>}/>
      <Route path="/mayors-of-cities-and-districts" element={<Mayors data={getDataFilter("mayors-of-cities-and-districts")}/>}/>
      <Route path={"/request"} element={<Request/>}/>
      <Route path="/information-about-the-province" element={<Malumot data={getDataFilter("information-about-the-province")}/>}/>
      <Route path="/regionaldepartments" element={<Deparments data={getDataFilter("regionaldepartments")}/>}/>
      </Route>
      </Routes>
  );
}

export default App;
