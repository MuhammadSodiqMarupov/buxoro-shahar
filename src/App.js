import "./App.scss";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Outlet } from "react-router-dom";
import headerAPI from "./headerAPI";
import Header1 from "./components/Header1/Header1";
import Xizmatlar from "./components/pages/xizmatlar/xizmatlar";
import Address from "./components/pages/manzil/address";
import Rahbariyat from "./components/pages/rahbariyat/rahbariyat";
import Mayors from "./components/pages/mayors/mayors";
import Request from "./components/pages/request/Request";
import { useLocation } from "react-router-dom";
import Malumot from "./components/pages/shahar-haqida/malumot/Malumot";
import Deparments from "./components/pages/shahar-haqida/reginal_departments/Deparments";
import Surovnoma from "./components/pages/ijtimoiy_sorovnoma/Surovnoma";
import Savollar from "./components/pages/savollar/Savollar";
import Hotels from "./components/pages/hotels/Hotels";
import Agency from "./components/pages/agency/Agency";
import News from "./components/pages/News/News";
import Tenders from "./components/pages/tenders/Tenders";
import Lectures from "./components/pages/lectures/Lectures";
import CurrentNew from "./components/pages/currentNew/CurrentNew";
import NotFoundPage from "./Error/NotFoundPage";
import FormalAttitude from "./components/pages/formal_attitude/FormalAttitude";
import FotoGallery from "./components/pages/foto_gallery/Foto_Gallery";
import VideoGallery from "./components/pages/video_gallery/Video_gallery";
const Header = React.lazy(() => import("./components/Header/Header"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Section2 = React.lazy(() => import("./components/Section2/Section2"));
const Section3 = React.lazy(() => import("./components/Section3/Section3"));
const Section4 = React.lazy(() => import("./components/Section4/Section4"));
const Section5 = React.lazy(() => import("./components/Section5/Section5"));
const FOTO_VIDEO_GALERY = React.lazy(() =>
  import("./components/FOTO_VIDEO_GALERY/FOTO_VIDEO_GALERY")
);
const Footer = React.lazy(() => import("./components/Footer/Footer"));
function App() {
  const [news, setNews] = useState([]);
  const [anotherPage, setAnotherPage] = useState(false);
  const [navSideBar, setNavSideBar] = useState([]);
  const [titles, setTitltes] = useState([]);
  const [navbarData, setNavbarData] = useState([]);
  const [showes, setShowes] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [services, setServices] = useState([]);
  const [rahbarlar, setRahbarlar] = useState([]);
  const [surovnomalar,setSurovnomalar] = useState([]);
  const [hokimlar,setHokimlar] = useState([]);
  const [currentItem,setCurrentItem] = useState({});
  const [elonlar,setElonlar] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const getDataFilterByArr = (dataArr) => dataArr[parseInt(localStorage.getItem("langType") ?? "1") - 1];

  function getDataFilter(stringTitle) {
    let FOUND_OBJECT = {};
    navbarData.map((item) => {
      item.items.map((item1) => {
        if (item1.page === stringTitle) {
          FOUND_OBJECT = item;
          return FOUND_OBJECT;
        }
      });
    });
    return FOUND_OBJECT;
  }

  function getBackendData() {
    let docURL = document.URL;
    let pageNavigation = docURL.substring(docURL.lastIndexOf("/") + 1);
    setNews([]);
    let localLangType = localStorage.getItem("langType");
    let langType = localLangType ?? "1";
    console.log(pageNavigation)
    headerAPI("api/home/menus", langType).then((res) => {
      let copyShowes = [];
      setNavbarData([...res.data.data]);
      res.data.data.map((item) => {
        copyShowes.push(false);
      });
      setShowes([...copyShowes]);
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
      console.log([...titles]);
      setTitltes([...copy2]);
    });

    let copy = [];
    headerAPI("api/post/1", langType).then(({ data }) => {
      for (let i = 0; i < 3; i++) {
        let list = data.data.list;
        copy.push(list[i]);
      }
      setTotalPage(data.data.maxPageNumber);
      setNews([...copy]); 
      setAllNews([...data.data.list]);
    });
    if(pageNavigation==="information-service") {
      headerAPI("api/employee/3", langType).then(({ data }) => {
        setServices(data.data);
      });
      return
    }else if(pageNavigation==="mayors-of-cities-and-districts") {
      headerAPI("api/employee/2", langType).then(({ data }) => {
        setRahbarlar(data.data);
      });
      return
    }else if(pageNavigation==="the-leadership-of-the-regional-administration") {
      headerAPI("api/employee/1",langType).then(({data})=>{
        setHokimlar(data.data)
      }) 
      return
    }else if(pageNavigation==="social-questionnaire") {
      headerAPI("api/survey/getAll",langType).then(({data})=>{
        let realData = data.data;
        setSurovnomalar([...realData]);
      })
    }
    if(pageNavigation==="announcements-and-tenders") {
      headerAPI("api/post/2",langType).then(({data})=>{
        let realData = data.data.list;
        setElonlar([...realData]);
        console.log(realData)
      })
    }
  }

  function checkPage() {
    let docURL = document.URL;
    let pageNavigation = docURL.substring(docURL.lastIndexOf("/") + 1);
    if (pageNavigation != "") {
      setAnotherPage(true);
    } else {
      setAnotherPage(false);
    }
  }

  useEffect(() => {
    checkPage();
    getBackendData();
    window.scroll(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    checkPage();
    getBackendData();
  }, []);
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <>
            <div className={"sticky__header"}>
              <Header1 getDataFilterByArr={getDataFilterByArr} />
              <Header
                titlesCopy={titles}
                refresh={getBackendData}
                navSideBar={navSideBar}
                navbarData={navbarData}
                titles={showes}
                set={setShowes}
              />
            </div>
            {anotherPage ? (
              ""
            ) : (
              <>
                <Navbar />
                <Section2 Filter={getDataFilterByArr} />
                <Section3 getDataFilterByArr={getDataFilterByArr} data={news} />
                <Section4 />
                <FOTO_VIDEO_GALERY />
                <Section5 />
              </>
            )}
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route
          path="/information-service"
          element={
            <Xizmatlar
              arr={services}
              data={getDataFilter("information-service")}
            />
          }
        />
        <Route
          path="/address"
          element={<Address data={getDataFilter("address")} />}
        />
        <Route
          path="/the-leadership-of-the-regional-administration"
          element={
            <Rahbariyat arr={rahbarlar}
              data={getDataFilter(
                "the-leadership-of-the-regional-administration"
              )}
            />
          }
        />
        <Route
          path="/mayors-of-cities-and-districts"
          element={ 
            <Mayors arr={hokimlar} data={getDataFilter("mayors-of-cities-and-districts")} />
          }
        />
        <Route path={"/request"} element={<Request />} />
        <Route
          path="/information-about-the-province"
          element={
            <Malumot data={getDataFilter("information-about-the-province")} />
          }
        />
        <Route
          path="/regionaldepartments"
          element={<Deparments data={getDataFilter("regionaldepartments")} />}
        />
        <Route
          path="/answers-to-frequently-asked-questions"
          element={
            <Surovnoma 
              data={getDataFilter("answers-to-frequently-asked-questions")}
            />
          }
        />
        <Route
          path="/social-questionnaire"
          element={<Savollar arr={surovnomalar} getDataFilterByArr={getDataFilterByArr} data={getDataFilter("social-questionnaire")} />}
        />
        <Route
          path="/hotels"
          element={<Hotels data={getDataFilter("hotels")} />}
        />
        <Route
          path="/travel-agencies"
          element={<Agency data={getDataFilter("travel-agencies")} />}
        />
        <Route
          path="/news"
          element={
            <News
              set={setCurrentItem}
              currentItem={currentItem}
              getDataFilterByArr={getDataFilterByArr}
              totalPage={totalPage}
              news={allNews}
              data={getDataFilter("news")}
            />
          }
        />
        <Route
          path="/announcements-and-tenders"
          element={
            <Tenders arr={elonlar} data={getDataFilter("announcements-and-tenders")} />
          }
        />
        <Route
          path="/official-lectures"
          element={<Lectures data={getDataFilter("official-lectures")} />}
        />
        <Route path="/new" element={<CurrentNew set={setCurrentItem} currentNew={currentItem} allNews={allNews}/>}/>
        <Route path="/404" element={<NotFoundPage />}/>
        <Route path="/formal-attitude" element={<FormalAttitude data={getDataFilter("formal-attitude")}/>}/>
        <Route path="/gallery/photo" element={<FotoGallery data={getDataFilter("gallery/photo")}/>}/>
        <Route path="/gallery/video" element={<VideoGallery data={getDataFilter("gallery/video")}/>}/>
      </Route>
    </Routes>
  );
}

export default App;
