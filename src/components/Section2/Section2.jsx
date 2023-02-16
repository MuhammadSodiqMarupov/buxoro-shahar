import "./Section2.scss"
import galochka from "../../Images/galochka.svg"
import boshliq from "../../Images/boshliq.jpg"
import {LazyLoadImage} from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
function Section2({ Filter }) {
    const langData = [
        {
            name:"Sharopov Jamshid Fazliddinovich ",
            occupation:"Shofirkon tuman hokimi",
            txt1:"☑️ Jamol Nosirov 1985 yil 12 iyunda Buxoro shahrida tavallud topgan. ",
            txt2:" ☑️ 2005 yili Buxoro davlat universitetining jismoniy madaniyat va jismoniy tarbiya o'qituvchisi psixolog mutaxassisligi bo'yicha tamomlangan ",
            txt3:" ☑️ 2008 yili esa universitetning magistraturasi tugatgan ",
            txt4:" ☑️ Bir muddat «Kamolot» YoIH Buxoro viloyat Kengashi raisi lavozimida ham mehnat qilgan  ",
            txt5:" ☑️ 27-Jilvon saylov okrugidan Oliy Majlis Qonunchilik palatasiga deputat etib saylangan. ",
            txt7:" ☑️ Tadbirkorlar va ishbilarmonlar harakati – O‘zbekiston Liberal-Demokratik partiyasining fraksiyasi a’zosi bo‘lgan ",
            txt8:" ☑️ 2017 yildan 2020 yilga qadar Buxoro viloyati hokimining yoshlar siyosati, ijtimoiy rivojlantirish va ma'naviy-ma'rifiy ishlar bo‘yicha o‘rinbosari lavozimida faoliyat yuritgan. ",
            txt9:" ✅ 2021-yil 5-mayda Xalq deputatlari Buxoro shahar kengashining navbatdan tashqari sessiyasida Jamol Nosirov shahar hokimi lavozimiga tasdiqlandi",
            btn:"Elektron murojjat"
        },
        {
            name:"Шаропов Джамшид Фазлиддинович ",
            occupation:"Шофиркон туман ҳокими",
            txt1:"☑️ Жамол Носиров 1985 йил 12 июнда Бухоро шаҳрида таваллуд топган. ",
            txt2:" ☑️ 2005 йили Бухоро давлат университетининг жисмоний маданият ва жисмоний тарбия ўқитувчиси психолог мутахассислиги бўйича тамомланган ",
            txt3:" ☑️ 2008 йили эса университетнинг магистратураси тугатган ",
            txt4:" ☑️ Бир муддат «Камолот» ЁИҲ Бухоро вилоят Кенгаши раиси лавозимида ҳам меҳнат қилган  ",
            txt5:" ☑️ 27-Жилвон сайлов округидан Олий Мажлис Қонунчилик палатасига депутат этиб сайланган. ",
            txt7:" ☑️ Тадбиркорлар ва ишбилармонлар ҳаракати – Ўзбекистон Либерал-Демократик партиясининг фраксияси а’зоси бўлган ",
            txt8:" ☑️ 2017 йилдан 2020 йилга қадар Бухоро вилояти ҳокимининг ёшлар сиёсати, ижтимоий ривожлантириш ва маънавий-маърифий ишлар бўйича ўринбосари лавозимида фаолият юритган. ",
            txt9:" ✅ 2021-йил 5-майда Халқ депутатлари Бухоро шаҳар кенгашининг навбатдан ташқари сессиясида Жамол Носиров шаҳар ҳокими лавозимига тасдиқланди",
            btn:"Електрон мурожжат"
        },
        {
             name: "Шаропов Джамшид Фазлиддинович",
             occupation:"аким Шафирконского района",
             txt1:"☑️ Джамал Носиров родился 12 июня 1985 года в городе Бухара. ",
             txt2: "☑️ В 2005 году учитель физической культуры и физического воспитания окончила Бухарский государственный университет по специальности психолог",
             txt3: "☑️ В 2008 году окончил магистратуру университета",
             txt4:'"☑️ Некоторое время работал председателем Бухарского областного совета ИХХ "Камолот"',
             txt5: "☑️ Избран депутатом Законодательной палаты Олий Мажлиса от 27-го Джильванского избирательного округа. ",
             txt7: "☑️ Движение предпринимателей и деловых людей - был членом фракции Либерально-демократической партии Узбекистана",
             txt8:" ☑️ С 2017 по 2020 год работал заместителем акима Бухарской области по молодежной политике, социальному развитию и духовно-просветительским вопросам.",
             txt9: "✅ 5 мая 2021 года на внеочередной сессии народных депутатов горкенеша Бухары Джамал Носиров утвержден в должности городского головы Бухары",
             btn: "Электронная заявка"
        },
        {
             name:"Sharopov Jamshid Fazliddinovich",
             occupation: "Shafirkon district governor",
             txt1:"☑️ Jamal Nosirov was born on June 12, 1985 in the city of Bukhara. ",
             txt2:" ☑️ In 2005, a teacher of physical culture and physical education graduated from Bukhara State University with a specialization in psychology",
             txt3:" ☑️ In 2008, he graduated from the university's master's degree ",
             txt4:' ☑️ For a while he worked as the chairman of the Bukhara Regional Council of the "Kamolot" YIH ',
             txt5:" ☑️ Elected as a deputy to the Legislative Chamber of the Oliy Majlis from the 27th Jilvan electoral district. ",
             txt7:" ☑️ Movement of entrepreneurs and businessmen - was a member of the faction of the Liberal-Democratic Party of Uzbekistan ",
             txt8:" ☑️ From 2017 to 2020, he worked as the deputy governor of Bukhara region for youth policy, social development, and spiritual and educational affairs.",
             txt9:" ✅ On May 5, 2021, Jamal Nosirov was confirmed as the mayor of Bukhara at an extraordinary session of the People's Deputies of the City Council of Bukhara.",
             btn: "Electronic application"
        },
    ];
    const navigate = useNavigate();
    return (
        <div></div>
        // <div className="Section2">
        //     <div className="S2Container">
        //         <div className="left_part">
        //         <h1>
        //             <LazyLoadImage src={galochka} effect={"blur"}/>
        //             {Filter(langData).name}
        //            </h1>
        //             <h1>{Filter(langData).occupation}</h1>
        //             <div className="TextsCard">
        //                 <p>{Filter(langData).txt1}</p>
        //                 <p>{Filter(langData).txt2}</p>
        //                 <p>{Filter(langData).txt3}</p>
        //                 <p>{Filter(langData).txt4}</p>
        //                 <p>{Filter(langData).txt5}</p>
        //                 <p>{Filter(langData).txt7}</p>
        //                 <p>{Filter(langData).txt8}</p>
        //                 <p>{Filter(langData).txt9}</p>
        //             </div>
        //         </div>
        //         <div className="right_part">
        //             <img src={boshliq} className={"boshliq"} alt="Loading Image....."/>
        //             <button onClick={()=>navigate('/request')}><i className="fa-regular fa-envelope"></i> {Filter(langData).btn}</button>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Section2;