import "./App.css"
import React, {useEffect,useState} from "react";
import {Routes,Route} from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
import headerAPI from "./headerAPI";
const Header = React.lazy(()=>import('./components/Header/Header'))
const Navbar = React.lazy(()=>import('./components/Navbar/Navbar'))
const Section2 = React.lazy(()=>import('./components/Section2/Section2'))
const Section3 = React.lazy(()=>import('./components/Section3/Section3'))
const Section4 = React.lazy(()=>import('./components/Section4/Section4'))
const Section5 = React.lazy(()=>import('./components/Section5/Section5'))
const FOTO_VIDEO_GALERY = React.lazy(()=>import('./components/FOTO_VIDEO_GALERY/FOTO_VIDEO_GALERY'))
const Footer = React.lazy(()=>import("./components/Footer/Footer"));
function App() {
  const [navbarData,setNavbarData] = useState([]);
  const [showes,setShowes] = useState([]);
  function getBackendData() {
    let localLangType = localStorage.getItem("langType");
    headerAPI("/api/home/menus",localLangType?localLangType:'1').then(res=>{
      setNavbarData([...res.data.data]);
      res.data.data.map(item=>{
        showes.push(false);
      })
      setShowes([...showes]);
    })
  }
  useEffect(()=>{
    getBackendData();
  },[]);
  return (
      <Routes>
        <Route path={"/"} element={   <>
    <Header refresh={getBackendData} navbarData={navbarData} titles={showes} set={setShowes}/>
      <Navbar/>
        <Section2/>
        <Section3/>
        <Section4/>
        <FOTO_VIDEO_GALERY/>
        <Section5/>
        <Footer/>
      </>}/>
      </Routes>
  );
}

export default App;
