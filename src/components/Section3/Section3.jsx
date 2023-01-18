import "./Section3.scss"
import minor from "../.././Images/minor.jpg"
import magazine from "../../Images/magazine.jpg"
import minor2 from "../../Images/minor2.jpg"
import {LazyLoadImage} from "react-lazy-load-image-component";
import { domen } from "../../headerAPI";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Section3({ getDataFilterByArr , data}) {
    const navigate = useNavigate();
    const [langData,setLangData] = useState([
        {
            txt:"  🆕 Shahar yangiliklari",
            link:"  Barchasi",
        },
        {
            txt:" 🆕 Шахар Йанигиликлари",
            link:"Барчаси",
        },
        {
            txt:"🆕 Новости Города",
            link:"Все",
        },
        {
            txt:"🆕 City News",
            link:"All",
        },
    ])
    return (
        <div className="Section3">
            <div className="S3Container">
                <div className="txt-header">
                    <div className="title">
                        {getDataFilterByArr(langData).txt}
                    </div>
                    <div className="myLink" onClick={()=>navigate("/news")}>
                      {getDataFilterByArr(langData).link}
                    </div>
                </div>
                <div className="api-items">
                    <div className="content">
                         <LazyLoadImage src={data.length!=0?domen+data[0].imageUrl:''} effect={"blur"}/>
                        <button className="calendar-date">
                            {data.length!=0?data[0].date.replaceAll("-","."):''}
                        </button>
                        <div className="brief-descr">
                            {data.length!=0?data[0].title:''}
                        </div>
                        <div className="descr">
                            {data.length!=0?data[0].berifDescription:''}
                        </div>
                    </div>
                    <div className="sideBar">
                        <div className="item">
                            <LazyLoadImage src={data.length!=0?domen+data[1].imageUrl:''} effect={"blur"}/>
                            <div className="calendar-date">
                            {data.length!=0?data[1].date.replaceAll("-","."):''}
                            </div>
                            <div className="brief-descr">
                            {data.length!=0?data[0].title:''}
                            </div>
                        </div>
                        <div className="item">
                            <LazyLoadImage src={data.length!=0?domen+data[2].imageUrl:''} effect={"blur"}/>
                            <div className="calendar-date">
                            {data.length!=0?data[2].date.replaceAll("-","."):''}
                            </div>
                            <div className="brief-descr">
                            {data.length!=0?data[0].title:''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;