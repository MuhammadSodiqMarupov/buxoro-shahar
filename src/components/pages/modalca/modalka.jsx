import React, { useState, useRef } from 'react';
import x from "../../../Images/x-square.svg"

import "../modalca/modalka.scss"
const Modalka = ({ modal, onClose }) => { 
    if (!modal) return null; 
    function changeBodyGray() { document.querySelector('body').classList.add('b-acc-grayscale'); document.querySelector('body').classList.remove('b-acc-none'); } function changeBodyNone() { document.querySelector('body').classList.add('b-acc-none'); document.querySelector('body').classList.remove('b-acc-grayscale'); document.querySelector('body').classList.remove('b-acc-color'); } function changeTextColor() { document.querySelector('body').classList.add('b-acc-color'); } 
    
    function changeTextSize() { document.querySelector('body').classList.add('b-acc-size'); document.querySelector('body').classList.remove('b-acc-size-no'); } function changeTextSizeNo() { document.querySelector('body').classList.add('b-acc-size-no'); document.querySelector('body').classList.remove('b-acc-size'); } 
    
    return ( 
    <div className="imkoniyatlar"> 
    <i onClick={onClose} className="ri-close-line lineClose"><img className='round' src={x} alt="" /></i> 
    <div className="colors"> 
    <div className="color color_A1" onClick={changeBodyNone}>A</div> 
    <div className="color color_A2" onClick={changeBodyGray}>A</div> 
    <div className="color color_A3" onClick={changeTextColor}>A</div> </div> 
    <div className="zoom"> <div onClick={changeTextSize}> 
    <i className="ri-zoom-in-line"></i> </div> <div onClick={changeTextSizeNo}> <i className="ri-zoom-out-line"></i> </div> </div> </div> )}
     export default Modalka;