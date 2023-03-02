import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Input, Row } from 'reactstrap';
import Sidebar__top from './Sidebar__top';
import {getData} from '../../headerAPI';

import bars from "../../Images/x-square.svg";
import searchs from "../../Images/x-square.svg";

const Sidebar = (props) => {

    const menuBar = useRef(null);
    const menuBlock = () => menuBar.current.classList.add('active__sidebar');
    const menuClose = () => menuBar.current.classList.remove('active__sidebar');

    const menuTop = useRef(null);
    const menuTopBlock = () => menuTop.current.classList.add('active__top');
    const menuTopClose = () => menuTop.current.classList.remove('active__top');

    const search_form = useRef(null);
    const searchBlock = () => search_form.current.classList.toggle('active__search');
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const headerRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky');
            } else {
                headerRef.current.classList.remove('sticky');
            }
        });
    };

    useEffect(() => {
        let docURL = document.URL; 
        let pageNavigation = docURL.substring(docURL.lastIndexOf("/") + 1); 
        if(pageNavigation !="") return
        setTimeout(() => {
            navigate(search);
        }, 500);
    }, [search])

    // useEffect(() => { getData("/api/home/menus", "*/*", localStorage.getItem("langType") ?? "1") }, []);


    function selectLang(e) {
        localStorage.setItem("langType", e)
    }

    const [langDATA, setLangDATA] = useState([
        {
            search: "Qidiruv tizimi",
        },
        {
            search: "Қидирув тизими",
        },
        {
            search: "Система поиска",
        },
        {
            search: "Search system",
        },
    ]);
    useEffect(() => {
        stickyHeaderFunc()
    }, [props.data])


    function refleshFunc(e){
        window.location.reload();
        selectLang(e.target.value)
    }

    return (
        <>
            <section ref={menuTop} className="sidebar__top">
                <Sidebar__top data={props.data} close={menuTopClose} navSideBar={props.navSideBar} />
            </section>

            <section className={ "sidebar" } ref={headerRef}>
            
                <Container>
                    <div className="sidebar__parent">
                        <div className="bars_12">
                            <img onClick={menuBlock} src={bars} alt="logo" />
                        </div>
                    </div>
                    <Row>
                        <Col md="12" sm="6">
                            <div className="menu">
                                <div className="bars">
                                    <img src={bars} alt="logo" onClick={menuTopBlock} />
                                </div>
                                <ul className='list' ref={menuBar}>
                                    <i className="ri-close-line close__bars" onClick={menuClose}></i>
                                    <div className="parent">
                                        {
                                            props?.data?.map((item, index) =>
                                                <li key={index}>
                                                    <a href="#"><span>{item.title}</span><i className="ri-arrow-down-s-line"></i></a>
                                                    {item.items.length != 0 ? <ul>
                                                        {item.items.map((item1, index) => {
                                                            if (!item1.isPage) {
                                                                if(item1.page.toLowerCase().startsWith('http')){
                                                                    return (<li key={index} onClick={menuClose}><a target="_black" href={item1.page}>{item1.title}</a></li>)
                                                                }
                                                                return (
                                                                    <li key={index} onClick={menuClose}><Link to={`${item1.page}`}>{item1.title}</Link></li>
                                                                )
                                                            }
                                                            else
                                                                return (
                                                                    <li key={index}><Link to={`page/${item1.page}`}>{item1.title}</Link></li>
                                                                )
                                                        })}
                                                    </ul> : ""}
                                                </li>
                                            )
                                        }
                                    </div>
                                </ul>
                                <div className='parent__123'>
                                    <div className="parent__12">
                                        <h5 className='search_img' onClick={searchBlock}>
                                            <img src={searchs} alt="logo" />
                                        </h5>
                                        <Input type='select' className='select' 
                                        value={localStorage.getItem("langType")?? "1"}
                                        onChange={(e) => {refleshFunc(e);
                                        props.reflesh()
                                    }
                                        }>
                                            <option value="1">O`zb</option>
                                            <option value="2">Узб</option>
                                            <option value="3">Rus</option>
                                            <option value="4">Eng</option>
                                        </Input>
                                    </div>
                                    <div className="forms" ref={search_form}>
                                        <form action="" className='search_form'>
                                            <input
                                                type="search"
                                                placeholder={langDATA[parseInt(localStorage.getItem("langType") ? localStorage.getItem("langType") : "1") - 1].search}
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Sidebar;
