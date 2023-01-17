import "./Foto.scss";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import minor from "../../Images/minor.jpg";
import { Link } from "react-router-dom";
import player from "../../Images/player.svg";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function FotoVideoGalery(props) {
  const [switcher, setSwitcher] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [phone, setPhone] = useState(false);
  const x = window.matchMedia("(max-width: 500px)");
  useEffect(() => {
    if (x.matches) {
      setPhone(true);
    }
  }, []);
  const [slides, setSlides] = useState([
    {
      date: "12.12.2022",
      descr:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      date: "12.12.2022",
      descr:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      date: "12.12.2022",
      descr:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      date: "12.12.2022",
      descr:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      date: "12.12.2022",
      descr:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      date: "12.12.2022",
      descr:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      date: "12.12.2022",
      descr:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      date: "12.12.2022",
      descr:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
  ]);
  return (
    <div className="photoVideo">
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
            <Link className={"link"} to={"#"}>
              Barchasini ko‘rish
            </Link>
          </div>
          <div className="content-swiper">
            <ModalVideo
              channel="youtube"
              isOpen={videoModal}
              videoId="L61p2uyiMSo"
              onClose={() => setVideoModal(false)}
            />
            {phone ? (
              slides.map((item, index) => (<div key={index} className="content-phone">
                  <div className="top">
                    <LazyLoadImage src={minor} />
                    {switcher ? (
                      ""
                    ) : (
                      <img
                        onClick={() => setVideoModal(true)}
                        src={player}
                        className={"player"}
                        alt=""
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
                {slides.map((item, index) => (
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
                          onClick={() => setVideoModal(true)}
                          src={player}
                          className={"player"}
                          alt=""
                        />
                      )}
                    </div>
                    <button className="date">{item.date}</button>
                    <div className="descr">{item.descr}</div>
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
