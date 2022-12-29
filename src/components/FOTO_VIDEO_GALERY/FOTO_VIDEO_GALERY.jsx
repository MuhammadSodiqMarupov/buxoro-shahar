import "./Foto.scss"
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css'
import minor from '../../Images/minor.svg';
import {Link} from "react-router-dom";
function FotoVideoGalery(props) {
    const [switcher,setSwitcher] = useState(false);
    const [slides,setSlides] = useState([
        {
            date:"12.12.2022",
            descr:"Contrary to popular belief, Lorem Ipsum is not simply random text."
        },
        {
            date:"12.12.2022",
            descr:"Contrary to popular belief, Lorem Ipsum is not simply random text."
        },
        {
            date:"12.12.2022",
            descr:"Contrary to popular belief, Lorem Ipsum is not simply random text."
        },   {
            date:"12.12.2022",
            descr:"Contrary to popular belief, Lorem Ipsum is not simply random text."
        },   {
            date:"12.12.2022",
            descr:"Contrary to popular belief, Lorem Ipsum is not simply random text."
        },   {
            date:"12.12.2022",
            descr:"Contrary to popular belief, Lorem Ipsum is not simply random text."
        },   {
            date:"12.12.2022",
            descr:"Contrary to popular belief, Lorem Ipsum is not simply random text."
        },   {
            date:"12.12.2022",
            descr:"Contrary to popular belief, Lorem Ipsum is not simply random text."
        },
    ])
    return (
        <div className="photoVideo">
            <div className="photoContainer">
                <div className="title">
                    🎞 Mediagalereya
                </div>
                <div className="content">
                    <div className="content-header">
                        <div className="switcher">
                            <h1 className={!switcher?"switched":""} onClick={()=>setSwitcher(false)}>Videogalereya</h1>
                            <h1 className={switcher?"switched":""} onClick={()=>setSwitcher(true)}>Fotogalereya</h1>
                        </div>
                        <Link className={"link"} to={"#"}>
                            Barchasini ko‘rish
                        </Link>
                    </div>
                    <div className="content-swiper">
                        {switcher?<h1>Fotogalereya</h1>:<h1>
                            <Swiper id={"main"} tag={"section"} spaceBetween={0}  slidesPerView={3} wrapperTag={"ul"}>
                                {slides.map((item,index)=><SwiperSlide className={'my-slide'} tag={"li"} key={`slide-${index}`}>
                                    <img src={minor} alt="IMAGE"/>
                                    <button className="date">{item.date}</button>
                                    <div className="descr">{item.descr}</div>
                                </SwiperSlide>)}
                            </Swiper>
                        </h1>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FotoVideoGalery;