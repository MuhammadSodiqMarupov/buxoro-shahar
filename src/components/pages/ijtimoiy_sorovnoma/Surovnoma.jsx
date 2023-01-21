import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './Surovnaa.scss'
import number01 from "../../../Images/Number01.svg"
import number02 from "../../../Images/Number02.svg"
import number03 from "../../../Images/Number03.svg"
import number04 from "../../../Images/Number04.svg"
const Surovnoma = ({data}) => {

    return (
        <div className='surovnoma'>
            <div className="surovnoma__container">
                <DynamicSideBar object={data}/>
                <div className="content">
                    <h1> Ko‘p beriladigan savollarga javoblar </h1>
                    <div className="questions">
                        <img src={number01} alt=""/>
                        <div className="bottom">
                            <h3> Alright, but what exactly do you do? </h3>
                            <small> As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design. </small>
                        </div>
                    </div>
                    <div className="questions">
                        <img src={number02} alt=""/>
                        <div className="bottom">
                            <h3> I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together? </h3>
                        </div>
                    </div>
                    <div className="questions">
                        <img src={number03} alt=""/>
                        <div className="bottom">
                            <h3> Are your rates competitive? </h3>
                        </div>
                    </div>
                    <div className="questions">
                        <img src={number04} alt=""/>
                        <div className="bottom">
                            <h3> Why do you have a monthly project cap? </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Surovnoma;