import React, { useState } from "react";
import DynamicSideBar from "../../SideBar/DynamicSideBar";
import { useNavigate } from "react-router-dom";
import "./foto_gallery.scss";
import { domen } from "../../../headerAPI";
const FotoGallery = ({photos, data }) => {
  console.log(photos);
  const navigate = useNavigate();
  return (
    <div className="foto">
      <div className="foto_container">
        <DynamicSideBar object={data} />
        <div className="foto_content">
          
          <div className="photo_switcher">
            <h1>
              FotoGaleriya
            </h1>
                <h1 onClick={() => navigate("/gallery/video")}>VideoGaleriya</h1>
            </div>
            <div className="foto_content_api">
            { photos.lenght>0? photos.map(item=><div key={item.id} className="photo_item">
                <img src={domen+item.photos[0].imageUrl} alt="" />
                <div className="text">
                    <div className="date">{item.photoDate}</div>
                    <div className="title">{item.title}</div>
                </div>
            </div>):"Ma`lumot mavjud emas!"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotoGallery;
