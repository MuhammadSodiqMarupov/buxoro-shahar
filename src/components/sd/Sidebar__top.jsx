import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
// import '../../styles.css'     bu narsa manda yo!!!!;
import { getData } from '../../headerAPI';

const Sidebar__top = ({ close }, props) => {
    const [navSideBar, setNavSideBar] = useState([]);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        dynamicLang()
        let copy2 = [];
        getData("/api/home/menus", "*/*", "1").then(res => {
            let data = res.data.data;
            for (let i = 0; i < data.length; i += 2) {
                copy2.push({
                    first: data[i],
                    second: data[i === data.length ? i : i + 1],
                });
            }
            setTitles([...copy2]);
        });
    }, [])

    function dynamicLang() {
        let copy = [];
        getData("/api/home/menus", "*/*", localStorage.getItem("langType") ?? "1").then(res => {
            let data = res.data.data;
            for (let i = 0; i < data.length; i += 2) {
                copy.push({
                    first: data[i],
                    second: data[i + 1],
                });
            }
            setNavSideBar([...copy]);
        });
    }

    useEffect(() => {
        dynamicLang();
    }, [props.data])
    return (
        <section className='sidebar__tops'>
            <Container>
                <p onClick={close} className="sidebar__close"><i className="ri-close-line"></i></p>
                <div className='content'>
                    {
                        navSideBar.map((item, index) => (
                            <div key={index}>
                                <div className='parent' >
                                    <h4>{item.first.title}</h4>
                                    {
                                        item.first.items.map((item1, index) => {
                                            if (!item1.isPage) {
                                                if (item1.page.toLowerCase().startsWith('http')) {
                                                    return (
                                                        <ul key={index}>
                                                            <li key={index}><a target="_black" href={item1.page}>{item1.title}</a></li>
                                                        </ul>
                                                    )
                                                }
                                                return (
                                                    <ul key={index}>
                                                        <li onClick={close}><Link to={item1.page}>{item1.title}</Link></li>
                                                    </ul>
                                                )
                                            } else {
                                                return (
                                                    <ul key={index}>
                                                        <li onClick={close}><Link to={item1.page}>{item1.title}</Link></li>
                                                    </ul>
                                                )
                                            }

                                        })}
                                </div>
                                <div className='parent'>
                                    <h4>{item.second.title}</h4>

                                    {/* {item.second.items.map((item1, index1) => item1.title ?
                                        <ul key={index1}>
                                            <li onClick={close}><Link to={titles[index]?.second.items[index1].page.toLowerCase().replaceAll(" ", "_")}>{item1.title}</Link></li>

                                        </ul> : "")} */}

                                    {item.second.items.map((item1, index1) => {
                                        if (!item1.isPage) {
                                            if (item1.page.toLowerCase().startsWith('http')) {
                                                return (
                                                    <ul key={index1}>
                                                        <li key={index1}><a target="_black" href={item1.page}>{item1.title}</a></li>
                                                    </ul>
                                                )
                                            }
                                            return (
                                                <ul key={index1}>
                                                    <li onClick={close}><Link to={titles[index]?.second.items[index1].page.toLowerCase().replaceAll(" ", "_")}>{item1.title}</Link></li>

                                                </ul>
                                            )

                                        } else
                                            return (
                                                <ul key={index1}>
                                                    <li onClick={close}><Link to={titles[index]?.second.items[index1].page.toLowerCase().replaceAll(" ", "_")}>{item1.title}</Link></li>

                                                </ul>
                                            )
                                    })}
                                </div>
                            </div>

                        ))}

                    {/* <div className='parent'>
                        <h4>Faoliyat</h4>
                        <ul>
                            <li onClick={close}><Link to={'/statistika_va_tahliliy_axborotlar'}>Statistika va tahliliy axborotlar</Link></li>
                            <li onClick={close}><Link to={'/yangiliklar'}>Yangiliklar</Link></li>
                            <li onClick={close}><Link to={'/elon_va_trenderlar'}>E’lon va tenderlar</Link></li>
                            <li onClick={close}><Link to={'/rasmiy_maruzalar'}>Rasmiy ma’ruzalar</Link></li>
                            <li onClick={close}><Link to={'/tadbirlar'}>Tadbirlar</Link></li>
                            <li onClick={close}><Link to={'/fotogalareya'}>Fotogalereya</Link></li>
                            <li onClick={close}><Link to={'/videogalareya'}>Videogalereya</Link></li>
                            <li onClick={close}><Link to={'/sayyor_qabullar'}>Sayyor qabullar</Link></li>
                            <li onClick={close}><Link to={'/aholi_bandligi'}>Aholi bandligini ta’minlash</Link></li>
                            <li onClick={close}><Link to={'/rasmiy_munosabat'}>Rasmiy munosabat</Link></li>
                        </ul>
                    </div>
                    <div className='parent'>
                        <h4>Ochiq ma’lumotlar</h4>
                        <ul>
                            <li onClick={close}><Link to={'/elektron_hukumat_tizimi'}>“Elektron hukumat” tizimi</Link></li>
                            <li onClick={close}><Link to={'/elektron_hukumat_tizimi'}>“Ochiq ma’lumotlar” PF-6247 bo‘yicha</Link></li>
                            <li onClick={close}><Link to={'/ochiq_malumotlar'}>Ochiq byujet ma’lumotlar</Link></li>
                        </ul>
                    </div>
                    <div className='parent'>
                        <h4>Tuman haqida</h4>
                        <ul>
                            <li onClick={close}><Link to={'/tuman_haqida'}>Tuman haqida ma’lumot</Link></li>
                            <li onClick={close}><Link to={'/ekologiya'}>Ekologiya</Link></li>
                            <li onClick={close}><Link to={'/hududiy_bulimlar'}>Hududiy bo‘limlar</Link></li>
                        </ul>
                    </div>
                    <div className='parent'>
                        <h4>Turizm</h4>
                        <ul>
                            <li onClick={close}><Link to={'/sayyorlik_sayohati'}>Sayyohlik salohiyati</Link></li>
                            <li onClick={close}><Link to={'/ekoturizm'}>Ekoturizm</Link></li>
                            <li onClick={close}><Link to={'/madaniyat'}>Madaniyat</Link></li>
                            <li onClick={close}><Link to={'/milliy_taomlar'}>Milliy taomlar</Link></li>
                            <li onClick={close}><Link to={'/tarixiy_shaxslar'}>Tarixiy shaxslar</Link></li>
                            <li onClick={close}><Link to={'/sayyohlik_agentlari'}>Sayyohlik agentliklari</Link></li>
                            <li onClick={close}><Link to={'/mehmonxonalar'}>Mehmonxonalar</Link></li>
                        </ul>
                    </div>
                    <div className='parent'>
                        <h4>Elektron xizmatlar</h4>
                        <ul>
                            <li onClick={close}><Link to={'/ishonch_va_yagona_telefon_raqamlari'}>Ishonch va yagona telefon raqamlari</Link></li>
                            <li onClick={close}><Link to={'/kup_beriladigan_savollarga_javoblar'}>Ko‘p beriladigan savollarga javoblar</Link></li>
                            <li onClick={close}><Link to={'/ijtimoiy_surovnoma'}>Ijtimoiy so‘rovnoma</Link></li>
                            <li onClick={close}><Link to={'/bush_ish_urinlari'}>Bo‘sh ish o‘rinlari</Link></li>
                            <li onClick={close}><Link to={'/hokimlikdagi_bush_ish_urinlari'}>Hokimlikdagi bo‘sh ish o‘rinlari</Link></li>
                        </ul>
                    </div>
                    <div className='parent'>
                        <h4>Hujjatlar</h4>
                        <ul>
                            <li onClick={close}><Link to="/Uzbekiston_Respublikasi">O‘zbekiston Respublikasi</Link></li>
                            <li onClick={close}><Link to="/tuman_hokimligi">Tuman hokimligi</Link></li>
                            <li onClick={close}><Link>Hududiy hokimliklar nizomi</Link></li>
                            <li onClick={close}><Link>Viloyat hokimligining faoliyati to‘g‘risidagi axborot ro‘yxati</Link></li>
                            <li onClick={close}><Link>Muxbirlarni akkreditatsiya qilish tartibi</Link></li>
                            <li onClick={close}><Link>Viloyat hokimligida maxfiy axborotlar ro‘yxati</Link></li>
                            <li onClick={close}><Link>Viloyat hokimligining ochiq hay’at majlislarida hozir bo‘lishi tartibi</Link></li>
                            <li onClick={close}><Link>Ochiq hay’at majlislari  o‘tkazish rejalari</Link></li>
                            <li onClick={close}><Link>Hokimlikning faoliyati to‘g‘risidagi axborotni olish uchun so‘rovnomalarni qabul qilish yo‘riqnomasi</Link></li>
                            <li onClick={close}><Link>Veb-saytga joylashtiriladigan axborotlar ro‘yxati</Link></li>
                        </ul>
                    </div>
                    <div className="parent">
                        <h4>Deputatlar faoliyati</h4>
                        <ul>
                            <li onClick={close}><Link to="/xalq_deputatlari_viloyat_kengashi_qarorlari">Xalq deputatlari viloyat kengashi qarorlari</Link></li>
                            <li onClick={close}><Link to="/partiyalar_deputatlik_guruhlari">Partiyalar deputatlik guruhlari ro‘yxati</Link></li>
                        </ul>
                    </div> */}
                </div>
            </Container>
        </section>
    )
}

export default Sidebar__top;