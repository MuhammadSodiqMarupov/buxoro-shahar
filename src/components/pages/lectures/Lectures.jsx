import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './lectures.scss'
import build1 from "../../../Images/oldbuilding.svg"
const Lectures = (props) => {
    return (
        <div className='lectures'>
            <div className="lecturesContainer">
                <DynamicSideBar object={props.data}/>
                <div className="content">
                    <h1> Rasmiy ma’ruzalar </h1>
                   <div className="bigCard">
                       <div className="otherCard">
                           <img src={build1} alt=""/>
                           <button className="data"> 12.12.2022  </button>
                           <h3> WordPress News Magazine Charts the Most Chic and Max 2 qator yoz... </h3>
                       </div>
                       <div className="otherCard">
                           <img src={build1} alt=""/>
                           <button className="data"> 12.12.2022  </button>
                           <h3> WordPress News Magazine Charts the Most Chic and Max 2 qator yoz... </h3>
                       </div>
                   </div>
                    <div className="bigCard">
                        <div className="otherCard">
                            <img src={build1} alt=""/>
                            <button className="data"> 12.12.2022  </button>
                            <h3> WordPress News Magazine Charts the Most Chic and Max 2 qator yoz... </h3>
                        </div>
                        <div className="otherCard">
                            <img src={build1} alt=""/>
                            <button className="data"> 12.12.2022  </button>
                            <h3> WordPress News Magazine Charts the Most Chic and Max 2 qator yoz... </h3>
                        </div>
                    </div>
                    <div className="bigCard">
                        <div className="otherCard">
                            <img src={build1} alt=""/>
                            <button className="data"> 12.12.2022  </button>
                            <h3> WordPress News Magazine Charts the Most Chic and Max 2 qator yoz... </h3>
                        </div>
                        <div className="otherCard">
                            <img src={build1} alt=""/>
                            <button className="data"> 12.12.2022  </button>
                            <h3> WordPress News Magazine Charts the Most Chic and Max 2 qator yoz... </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lectures;
