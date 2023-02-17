import React, { useState } from "react";
import DynamicSideBar from "../../SideBar/DynamicSideBar";
import "./video_gallery.scss";
import { useNavigate } from "react-router-dom";
import ModalVideo from "react-modal-video";
import imageFirst from "../../../Images/minor.jpg";
import imageSecond from "../../../Images/minor2.jpg";
const VideoGallery = ({ videos, data }) => {
  const [videoModal, setVideoModal] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");
  const navigate = useNavigate();
  // console.log(videos);
  return (
    <div className="video">
      {videoModal ? (
        <section className="modal__bg">
          <div onClick={() => setVideoModal(false)} className="modal__align">
            <div className="modal__content" modal={videoModal}>
              <div className="modal__video-align">
                {videoModal ? <div className="modal__spinner"></div> : null}
                <iframe
                  className="modal__video-style"
                  loading="lazy"
                  width="800"
                  height="500"
                  src={currentSrc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <div className="video_container">
        <DynamicSideBar object={data} />
        <div className="video_content">
          <div className="switcher">
            <h1 onClick={() => navigate("/gallery/photo")}>FotoGaleriya</h1>
            <h1>VideoGaleriya</h1>
          </div>
          <div className="video_content_api">
            {videos.map((item) => (
              <div
                onClick={() => {
                  setCurrentSrc(item.urlVideo.substring(0,item.urlVideo.lastIndexOf("/")+1)+"/embed/"+item.urlVideo.substring(item.urlVideo.lastIndexOf("=")+1));
                  setVideoModal(true);
                }}
                key={item.id}
                className="video_item"
              >
                <img
                  src={
                    item.bannerImageUrl ??
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qnO4OJ7fQAUxoVBd9asbdkGCLmKcf4DYDw&usqp=CAU"
                  }
                  alt=""
                />
                <div className="text">
                  <div className="date">{item.videoDate}</div>
                  <div className="title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
