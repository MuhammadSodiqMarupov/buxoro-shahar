import React, { useState } from "react";
import DynamicSideBar from "../../SideBar/DynamicSideBar";
import { useNavigate } from "react-router-dom";
import "./foto_gallery.scss";
const FotoGallery = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="foto">
      <div className="foto_container">
        <DynamicSideBar object={data} />
        <div className="foto_content">
          <div className="switcher">
            <h1>
              FotoGaleriya
            </h1>
                <h1 onClick={() => navigate("/gallery/video")}>VideoGaleriya</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FotoGallery;
