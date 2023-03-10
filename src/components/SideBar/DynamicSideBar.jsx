import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { useLocation } from "react-router-dom";
const DynamicSideBar = ({ object}) => {
    const [FOUND,setFOUND] = useState("");
    const location = useLocation();
    useEffect(()=>{
        let url = location.pathname;
        object?.items?.map(item=>{
            if('/'+item.page===url) {
                setFOUND(item.page);
                return
            }
        })
    },[object])
  return (
    <>
      <div className="sidebar">
        <div className="header">
          <h1>{object.hasOwnProperty('title')?object.title:"Loading...."}</h1>
        </div>
        <div className="content">
            {object?.items?.map((item,index)=>item.page.startsWith('http')?<a href={item.page} key={index} className={FOUND===item.page?"current_page":""}>{item.title}</a>:<Link key={index} className={FOUND===item.page?"current_page":""} to={"/"+item.page}>{item.title}</Link>)}
        </div>
      </div>
    </>
  );
};

export default DynamicSideBar;
