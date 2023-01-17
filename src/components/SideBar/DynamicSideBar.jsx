import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const DynamicSideBar = ({ object}) => {
    const [FOUND,setFOUND] = useState("");
    useEffect(()=>{
        let docURL = document.URL;
        let url = docURL.substring(docURL.lastIndexOf("/")+1)
        object?.items?.map(item=>{
            if(item.page===url) {
                setFOUND(item.page);
                return
            }
        })
    },[object])
  return (
    <>
      <div className="sidebar">
        <div className="header">
          <h1>{object.title}</h1>
        </div>
        <div className="content">
            {object?.items?.map((item,index)=>item.page.startsWith('http')?<a href={item.page} key={index} className={FOUND===item.page?"current_page":""}>{item.title}</a>:<Link key={index} className={FOUND===item.page?"current_page":""} to={"/"+item.page}>{item.title}</Link>)}
        </div>
      </div>
    </>
  );
};

export default DynamicSideBar;
