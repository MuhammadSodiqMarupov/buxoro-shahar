import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './tenders.scss';
import duduuuk from "../../../Images/dukduk.svg"
const Tenders = ({arr,data}) => {
    return (
        <div className="tenders">
            <div className="tenders__container">
                <DynamicSideBar object={data}/>
            <div className="content">
                <h1> E’lonlar va tenderlar </h1>
                <div className="card_content">
                    {arr.map(item=><div className="cardTender">
                        <div className="topCard">
                            <img src={duduuuk} alt=""/>
                            <h3> {item.title}</h3>
                        </div>
                        <div className="bottomDuduk">
                            <p> {item.berifDescription}</p>
                            <button className="date">{item.date}</button>
                        </div>`
                    </div>)}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Tenders;
