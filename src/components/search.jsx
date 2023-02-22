import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

const Search = ({searchModal, onClose}) => {
    let result = useRef();
    var domain = "https://api.shofirkon.buxoro.uz";
    function resultPrint(html) {
        result.current.innerHTML = html;
        // document.getElementById('result').innerHTML = html;
    }
    var myHeaders = new Headers();
    if(localStorage.getItem('langType') == 1){
        myHeaders.append("langType","1")
    }else if(localStorage.getItem('langType') == 2){
        myHeaders.append("langType","2")
    }else if(localStorage.getItem('langType') == 3){
        myHeaders.append("langType","3")
    }else if(localStorage.getItem('langType') == 4){
        myHeaders.append("langType","4")
    }

    const [index, setIndex] = useState(0);
    useEffect(() => {
        setIndex(parseInt(localStorage.getItem("langType") ? localStorage.getItem("langType") - 1 : 0));
    }, [])
    const [langDATA, setLangDATA] = useState([
    {
        search: "Qidiruv tizimi",
        qidir:"Qidirishga xatolik...",
        malumot:"Kechirasiz hech qanday ma'lumot topilmadi"
    },
    {
        search: "Қидирув тизими",
        qidir:"Қидиришга хатолик...",
        malumot:"Кечирасиз ҳеч қандай маълумот топилмади"
    },
    {
        search: "Система поиска",
        qidir:"Ошибка поиска...",
        malumot:"Извините, информация не найдена"
    },
    {
        search: "Search system",
        qidir:"Search error...",
        malumot:"Sorry, no information was found"
    },
]);
    // myHeaders.append("langType", localStorage.getItem('langType')??"1");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    let refs = useRef();
    function search() {
        let q = refs.current.value;
        // let q = document.getElementById('q').value;
        fetch(`${domain}/api/search?q=${q}`, requestOptions)
            .then(response => {
                //handle response  
                let data = response.json();
                return data;
            }).then(data => {
                //handle data
                if (!Array.isArray(data)) {
                    resultPrint(`<h1 class="search-msg">${data.errorMsg}</h1>`);
                } else if (data?.length == 0) {
                    resultPrint(`<h1 class="search-msg">${langDATA[index].malumot} ):</h1>`)
                } else if (data) {
                    let html = ``;
                    for (let i = 0; i < data.length; i++) {
                        let item = data[i];
                        html += `<p><a class="search-teg" href="https://shofirkon.buxoro.uz/${item?.ispage ? `page/${item.id}` : `news/${item?.id}`}">${i + 1}. ${item?.title}</a></p>`;
                    }
                    resultPrint(html);
                }
            }).catch(error => {
                alert("Xatolik");
            });
    }

    if(!searchModal){
        return null;
    }
return (
    <section className="search-modal">
        <i className="ri-close-line close-search" onClick={()=>onClose(false)}>Close</i>
        <div className="search_form">
            <div className="input-btn">
                <input 
                    ref={refs}
                    onKeyPress={(e)=>{if(e.key == "Enter") search() }}
                    type="search" 
                    placeholder={langDATA[parseInt(localStorage.getItem("langType") ? localStorage.getItem("langType") : "1") - 1].search}
                    className='form-control' />
                    <input type="button" onClick={search} className='btn btn-primary' value="search" />
            </div>
            <div
                ref={result}
                id="result"
            ></div>
        </div>
       
    </section>
);
}

export default Search;