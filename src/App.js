import "./App.scss"
import React, {useEffect,useState} from "react";
import {Routes,Route} from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Outlet } from "react-router-dom";
import headerAPI from "./headerAPI";
import Header1 from "./components/Header1/Header1";
import DynamicSideBar from "./components/SideBar/DynamicSideBar";
import Xizmatlar from "./components/pages/viloyat-hokimligi/xizmatlar";
import Address from "./components/pages/manzil/address";
import Rahbariyat from "./components/pages/rahbariyat/rahbariyat";
import Mayors from "./components/pages/mayors/mayors";
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
    let localLangType = localStorage.getItem("langType");
    let langType = localLangType??'1';
    headerAPI("api/home/menus",langType).then(res=>{
      setNavbarData([...res.data.data]);
      res.data.data.map(item=>{
        showes.push(false);
      })
      setShowes([...showes]);
      console.log(res.data.data);
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


    headerAPI("api/post/1",langType).then(({data})=>{
      for(let i = 0;i < 3;i++) {
        let list = data.data.list;
        news.push(list[i]);
      }
      setNews([...news]);
    })
  }

  function checkPage() {
    let docURL = document.URL;
    let pageNavigation = docURL.substring(docURL.lastIndexOf("/")+1);
    if(pageNavigation) {
      setAnotherPage(true)
    }else {
      setAnotherPage(false)
    }
  }
  useEffect(()=>{
    checkPage();
    getBackendData();
  },[]);
  return (
      <Routes>
        <Route path={"/"} element={   <>
          <div className={"sticky__header"}>
            <Header1/>
            <Header setPage={setAnotherPage} titlesCopy={titles} refresh={getBackendData} navSideBar={navSideBar} navbarData={navbarData} titles={showes} set={setShowes}/>
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
      <Route path="/information-service" element={<Xizmatlar set={setAnotherPage} data={getDataFilter("information-service")}/>}/>
      <Route path="/address" element={<Address set={setAnotherPage} data={getDataFilter("address")}/>}/>
      <Route path="/the-leadership-of-the-regional-administration" element={<Rahbariyat set={setAnotherPage} data={getDataFilter("the-leadership-of-the-regional-administration")}/>}/>
      <Route path="/mayors-of-cities-and-districts" element={<Mayors set={setAnotherPage} data={getDataFilter("mayors-of-cities-and-districts")}/>}/>
      </Route>
      </Routes>
  );
}

export default App;
