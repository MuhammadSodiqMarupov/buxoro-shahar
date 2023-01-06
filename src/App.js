import "./App.css"
import React from "react";
import {Routes,Route} from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
const Header = React.lazy(()=>import('./components/Header/Header'))
const Navbar = React.lazy(()=>import('./components/Navbar/Navbar'))
const Section2 = React.lazy(()=>import('./components/Section2/Section2'))
const Section3 = React.lazy(()=>import('./components/Section3/Section3'))
const Section4 = React.lazy(()=>import('./components/Section4/Section4'))
const Section5 = React.lazy(()=>import('./components/Section5/Section5'))
const FOTO_VIDEO_GALERY = React.lazy(()=>import('./components/FOTO_VIDEO_GALERY/FOTO_VIDEO_GALERY'))
const Footer = React.lazy(()=>import("./components/Footer/Footer"));
function App() {
  return (
      <Routes>
        <Route path={"/"} element={   <>
    <Header/>
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
