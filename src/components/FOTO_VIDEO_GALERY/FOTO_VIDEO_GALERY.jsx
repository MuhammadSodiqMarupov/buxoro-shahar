import "./Foto.scss";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import minor from "../../Images/minor.jpg";
import { Link } from "react-router-dom";
import { domen } from "../../headerAPI";
import player from "../../Images/player.svg";
import "react-modal-video/scss/modal-video.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function FotoVideoGalery(props) {
  const [switcher, setSwitcher] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");
  const [phone, setPhone] = useState(false);
  const x = window.matchMedia("(max-width: 500px)");

  console.log(props.photos);

  useEffect(() => {
    if (x.matches) {
      setPhone(true);
    }
  }, []);
  return (
    <div className="photoVideo">
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
      <div className="photoContainer">
        <div className="title">🎞 Mediagalereya</div>
        <div className="content">
          <div className="content-header">
            <div className="switcher">
              <h1
                className={!switcher ? "switched" : ""}
                onClick={() => setSwitcher(false)}
              >
                Videogalereya
              </h1>
              <h1
                className={switcher ? "switched" : ""}
                onClick={() => setSwitcher(true)}
              >
                Fotogalereya
              </h1>
            </div>
            <Link className={"link"} to={"gallery/photo"}>
              Barchasini ko‘rish
            </Link>
          </div>
     
          <div className="content-swiper">
            {phone ? (
              props.photos.map((item, index) => (
                <div key={index} className="content-phone">
                  <div className="top">
                    <LazyLoadImage src={minor} />
                    {switcher ? (
                      ""
                    ) : (
                      <img
                        onClick={() =>{
                          setCurrentSrc(item.urlVideo.substring(0,item.urlVideo.lastIndexOf("/")+1)+"/embed/"+item.urlVideo.substring(item.urlVideo.lastIndexOf("=")+1))
                          setVideoModal(true);
                        }}
                        src={domen+item.photos[0].imageUrl}
                        className={"player"}
                        alt="Loading Image....."
                      />
                    )}
                  </div>
                  <button className="date">{item.date}</button>
                  <div className="descr">{item.descr}</div>
                </div>
              ))
            ) : (
              <Swiper
                id={"main"}
                tag={"section"}
                slidesPerView={3}
                spaceBetween={0}
                wrapperTag={"ul"}
              >
                {props.videos.map((item, index) => (
                  <SwiperSlide
                    className={"my-slide"}
                    tag={"li"}
                    key={`slide-${index}`}
                  >
                    <div className="top">
                      <LazyLoadImage src={minor} />
                      {switcher ? (
                        ""
                      ) : (
                        <img
                          onClick={() => {
                            setVideoModal(true);
                            setCurrentSrc(item.urlVideo.substring(0,item.urlVideo.lastIndexOf("/")+1)+"/embed/"+item.urlVideo.substring(item.urlVideo.lastIndexOf("=")+1));
                          }}
                          src={player}
                          className={"player"}
                          alt="Loading Image....."
                        />
                      )}
                    </div>
                    <button className="date">{item.videoDate}</button>
                    <div className="descr">{item.title}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FotoVideoGalery;
