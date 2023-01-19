import React, { useEffect } from "react";
import DynamicSideBar from "../../SideBar/DynamicSideBar";
import "./xizmatlar.scss";
import maslahatchi from "../../../Images/maslahatchi.svg";
import clock from "../../../Images/clock.svg";
import call from "../../../Images/phone-call.svg";
import email from "../../../Images/email.svg";
import { domen } from "../../../headerAPI";
const Xizmatlar = (props) => {
  return (
    <div className="xizmatlar">
      <div className="XizmatContainer">
        <DynamicSideBar setPage={props.set} object={props.data} />
        <div className="xizmatlar_content">
          {props.arr.map((item) => (
          <div className="cardChiefCard">
          <div className="left">
            <img src={maslahatchi} alt="Loading Image....." />
          </div>
          <div className="right">
            <div className="top">
              <p> Axborot siyosati masalalari bo‘yicha maslahatchi </p>
              <button> Batafsil </button>
            </div>
            <div>
              <h3 className="Name"> Ism Familiya Otasining ismi</h3>
              <small>
                {" "}
                Tug‘ilgan yili tug‘ilgan joyi va o‘qigan joyi va lavozimidan
                ozgina matn bo‘lishi kerak bu yerda. Backendan keladi
              </small>
            </div>
            <div className="bottom">
              <h1>
                <img src={clock} alt="Loading Image....." /> 08.00 dan 17.00
                gacha{" "}
              </h1>
              <h2>
                <img src={call} alt="Loading Image....." /> (99) 567 91 49{" "}
              </h2>
              <h3>
                <img src={email} alt="Loading Image....." /> nimadir@gmail.com
              </h3>
            </div>
          </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Xizmatlar;
