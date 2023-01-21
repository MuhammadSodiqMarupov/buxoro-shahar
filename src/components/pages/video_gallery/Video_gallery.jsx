import React, { useState } from "react";
import DynamicSideBar from "../../SideBar/DynamicSideBar";
import "./video_gallery.scss";
import { useNavigate } from "react-router-dom";
import imageFirst from '../../../Images/minor.jpg'
import imageSecond from '../../../Images/minor2.jpg'
const VideoGallery = ({ data }) => {
  const navigate = useNavigate();
  const videoSlides = [
    {
        id:1,
        img:imageFirst,
        date:"12.12.2022",
        title:"Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
        id:2,
        img:imageSecond,
        date:"12.12.2022",
        title:"Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
        id:3,
        img:imageFirst,
        date:"12.12.2022",
        title:"Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
        id:4,
        img:imageSecond,
        date:"12.12.2022",
        title:"Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
  ]
  return (
    <div className="video">
      <div className="video_container">
        <DynamicSideBar object={data} />
        <div className="video_content">
          <div className="switcher">
            <h1
              onClick={() => navigate("/gallery/photo")}
            >
              FotoGaleriya
            </h1>
            <h1>VideoGaleriya</h1>
          </div>
          <div className="video_content_api">
            {videoSlides.map(item=><div key={item.id} className="video_item">
                <img src={item.img} alt="" />
                <div className="text">
                    <div className="date">{item.date}</div>
                    <div className="title">{item.title}</div>
                </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
