import React from 'react';
import DynamicSideBar from '../../../SideBar/DynamicSideBar';
import "./malumot.scss"
import xarita from "../../../../Images/xarita.svg"
import users from "../../../../Images/users.svg"
import house from "../../../../Images/house.svg"
import area from "../../../../Images/area.svg"
const Malumot = (props) => {
    return (
        <div className='malumot'>
            <div className="malumotContainer">
                <DynamicSideBar object={props.data}/>
                <div className="malumot__content">
                    <img src={xarita} alt="Loading Image....."/>
                    <h2> Buxoro shahar </h2>
                    <div className="population">
                        <h2>  <img className="icon" src={users} alt="Loading Image....."/>  Aholisi:  870 200 kishi (4-o‘rin) </h2>
                        <h2>  <img className="icon" src={house} alt="Loading Image....."/>  Din tarkibi: Musulmonlar, Xristianlar </h2>
                        <h2>  <img className="icon" src={area} alt="Loading Image....."/>  Maydoni: 39 400 km2 </h2>
                    </div>
                        <p> <span> Buxoro- </span> Oʻzbekiston Respublikasining qadimiy shaharlaridan biri, Buxoro viloyatining maʼmuriy, iqtisodiy va madaniy markazi. Buyuk ipаk yoʻlida yirik tijorat markazlaridan boʻlgan. Oʻzbekistonning janubiy-gʻarbida, Zarafshon daryosi quyi oqimida joylashgan. Toshkentdan 616 km. Buxoro 2 ta shahar rayoni (Fayzulla Xoʻjayev va Toʻqimachilik)ga boʻlingan. Aholisi 290000 (2019). </p>
                        <p>
                            Feugiat eu et varius vel volutpat blandit dis pretium. Nulla risus amet et semper arcu cras ultrices a et. Ultricies nullam arcu commodo nibh. Non eros id sapien ac faucibus vitae. Ultrices laoreet nascetur pulvinar rutrum. Eu lacus pulvinar nec in tortor aliquam tincidunt. Tellus enim interdum in vitae. Id odio interdum imperdiet condimentum urna. Duis ut auctor diam rhoncus diam eu venenatis adipiscing. Dui orci enim convallis faucibus condimentum sit. Eget sed blandit dui enim vel id. Purus nisi sollicitudin amet ipsum nam. Elit eu sed suspendisse nunc in duis. Parturient velit suscipit tincidunt nec elit orci et. Velit enim fermentum quisque quis interdum consectetur.
                            Lacus scelerisque nunc faucibus nulla porta senectus pellentesque arcu mattis. Dictumst mauris tempus porttitor morbi et consectetur. Purus scelerisque nunc suspendisse elit leo nibh suspendisse. Nunc diam mattis nullam mollis parturient nulla eget. Nulla eu interdum pellentesque vitae leo congue elementum aliquet.
                            Pellentesque id rhoncus dictumst condimentum diam mauris. Sapien at placerat enim et eu facilisis in. Ornare gravida feugiat vel duis ultrices aliquet tellus diam metus. Porta mattis pellentesque mauris massa etiam. Turpis maecenas nulla morbi vitae lectus mattis. Pretium ut quis eget morbi a dignissim blandit cursus. Morbi viverra morbi aliquet orci pulvinar cras. Purus ornare pulvinar semper diam euismod.
                            Habitant volutpat nec sollicitudin massa etiam. Arcu nulla gravida cursus interdum posuere purus. Libero ut id est habitant nec magna accumsan odio. Blandit pulvinar ipsum ornare tincidunt ut non facilisis. Urna eget ut platea interdum egestas cras ullamcorper. Et odio fringilla nisi id pellentesque scelerisque justo est enim. Ultricies donec consectetur vel neque ullamcorper sed faucibus pulvinar placerat. Velit blandit laoreet integer tincidunt dictum ut nisl. Nullam morbi blandit est netus. Praesent pharetra nec quis purus fames et ullamcorper.
                            Aliquet euismod diam quam feugiat pellentesque hac ut quam fames. Laoreet id tortor nunc adipiscing. Urna tortor elit urna donec orci vitae tellus. Ullamcorper feugiat adipiscing sodales quisque mattis blandit dignissim vitae ultrices. Blandit rhoncus urna quis ntesque scelerisque justo est enim. </p>
                </div>
            </div>
        </div>
    );
}

export default Malumot;