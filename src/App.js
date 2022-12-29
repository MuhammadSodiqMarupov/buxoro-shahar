import "./App.css"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
// import FOTO_VIDEO_GALERY from "./components/FOTO_VIDEO_GALERY/FOTO_VIDEO_GALERY";
import Section5 from "./components/Section5/Section5";
import Footer from "./components/Footer/Footer";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route path={"/"} element={   <>
    <Header/>
      <Navbar/>
        <Section2/>
        <Section3/>
        <Section4/>
        {/*<FOTO_VIDEO_GALERY/>*/}
        <Section5/>
        <Footer/>
      </>}/>
      </Routes>
  );
}

export default App;
