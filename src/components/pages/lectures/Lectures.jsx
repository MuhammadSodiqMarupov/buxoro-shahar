import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './lectures.scss'
const Lectures = (props) => {
    return (
        <div className='lectures'>
            <div className="container">
                <DynamicSideBar object={props.data}/>
                <div className="content"></div>
            </div>
        </div>
    );
}

export default Lectures;
