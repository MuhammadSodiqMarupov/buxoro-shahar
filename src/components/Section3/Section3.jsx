import "./Section3.scss"
import minor from "../.././Images/minor.jpg"
import magazine from "../../Images/magazine.jpg"
import minor2 from "../../Images/minor2.jpg"
import {LazyLoadImage} from "react-lazy-load-image-component";
import { domen } from "../../headerAPI";
function Section3(props) {
    console.log(props);
    return (
        <div className="Section3">
            <div className="S3Container">
                <div className="txt-header">
                    <div className="title">
                        🆕 Shahar yangiliklari
                    </div>
                    <div className="myLink">
                        Barchasi
                    </div>
                </div>
                <div className="api-items">
                    <div className="content">
                        {/* <LazyLoadImage src={props.data.length!=0?domen+props.data[0].imageUrl:''} effect={"blur"}/> */}
                        <button className="calendar-date">
                            {props.data.length!=0?props.data[0].date.replaceAll("-","."):''}
                        </button>
                        <div className="brief-descr">
                            {props.data.length!=0?props.data[0].title:''}
                        </div>
                        <div className="descr">
                            {props.data.length!=0?props.data[0].berifDescription:''}
                        </div>
                    </div>
                    <div className="sideBar">
                        <div className="item">
                            <LazyLoadImage src={magazine} effect={"blur"}/>
                            <div className="calendar-date">
                            {props.data.length!=0?props.data[1].date.replaceAll("-","."):''}
                            </div>
                            <div className="brief-descr">
                            {props.data.length!=0?props.data[0].title:''}
                            </div>
                        </div>
                        <div className="item">
                            <LazyLoadImage src={minor2} effect={"blur"}/>
                            <div className="calendar-date">
                            {props.data.length!=0?props.data[2].date.replaceAll("-","."):''}
                            </div>
                            <div className="brief-descr">
                            {props.data.length!=0?props.data[0].title:''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;