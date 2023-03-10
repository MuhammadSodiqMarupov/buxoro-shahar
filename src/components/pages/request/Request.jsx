import "./request.scss"
import file from '../../../Images/Frame.svg'
import {domen} from "../../../headerAPI"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function Request() {
    const [data, setData] = useState({
        FIO: "",
        Tel: "",
        Email: "",
        Title: "",
        Description: "",
    })
    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData)
        // if (data.FIO.length < 10 && data.Tel.length < 10 && data.Email.length < 10 && data.Title.length < 10) {
        //     setError(true)
        // }
    }
    function submit(event){
        event.preventDefault();
        fetch(`${domen}api/apply`, {
            method: 'POST',
            body: new URLSearchParams(new FormData(event.target))
        }).then((response) => {
            if(response.status == 400 && data.FIO < 10 && data.Tel < 10 && data.Email < 10 && data.Title < 10 && data.Description < 10 )
            {
                toast.warn("Barcha maydonlar tuldirilishi shart", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                throw new Error(response.status)
            }
            return response.json();
        }).then((body) => {
            // console.log(body)
            if (body.errorMsg){
            toast.error(body.errorMsg, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }
                // alert(body.errorMsg);
            else{
                toast.success(body?.data?.msg, {
                    theme:"colored",
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    });
            }
                // alert(body?.data?.msg)
        }).catch((error) => {
            console.error(error);
        });
    // });
}
    return (

        <div className="request">
            <div className="requestContainer">
                <form method='POST' onSubmit={submit} action={`${domen}api/apply`}>
                <div className="myCard">
                    <h1> Shofirkon hokimligiga murojaat yuborish </h1>
                    <p> Kengash uchun ariza, taklif, shikoyat va boshqa turdagi murojjatingiz bo'lsa bizga yozing. Murojaatingiz albatta hokimlik tomonidan ko'rib chiqiladi. Tashakkur! </p>
                    <div className="fio">
                        <h3> FIO* </h3>
                        <input className="big_input" placeholder="|" type="text" onChange={(e) => setData(e.target.value)} value={data.FIO}/>
                    </div>
                    <div className="two_inp">
                       <div className="left">
                           <h3> Telefon* </h3>
                           <input defaultValue={"+998"} className="mini_input" placeholder="+998 |" type="text" onChange={(e) => setData(e.target.value)} value={data.Tel} />
                       </div>
                        <div className="left">
                            <h3> E-mail* </h3>
                            <input defaultValue={"@gmail.com"} className="mini_input" placeholder="Eshmat1991@gmail.com" type="text"  onChange={(e) => setData(e.target.value)} value={data.Email}/>
                        </div>
                    </div>
                    <div className="fio">
                        <h3> Murojaat sarlavhasi* </h3>
                        <input placeholder="Mahalla ko‘chalarini asfalt qilish"  className="mini_input" type="text"  onChange={(e) => setData(e.target.value)} value={data.Description}/>
                    </div>
                    <div className="last">
                        <h3> Murojaat matni* </h3>
                        <textarea placeholder="Bu yerda mavzuga oid kattagina matn bo‘ladi" name="" id="" cols="30" rows="10"  onChange={(e) => setData(e.target.value)} value={data.Title}></textarea>
                    </div>
                    <div className="lastBtns">
                        <h3>Mavzuga oid fayl</h3>
                        <div className="btn__box">
                                {/* <input type="file" id="input__file" hidden/> */}
                                {/* vaqtinchalik */}
                                <button onClick={()=>{
                                    document.getElementById("input__file").click();
                                }} className="file">
                                <span>
                                    <img src={file} alt="Loading Image....." className="file__svg"/>
                                </span>
                                 Faylni tanlang </button>
                            <button type="submit" className="send">Murojjatni yuborish</button>
                            <ToastContainer
                                    position="top-right"
                                    autoClose={2000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick={false}
                                    theme="light"
                                    closeButton={<i className="ri-close-line"></i>}
                                />
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Request;