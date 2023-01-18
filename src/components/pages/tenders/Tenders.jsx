import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './tenders.scss';
const Tenders = (props) => {
    return (
        <div className='tenders'>
            <div className="tenders__container">
                <DynamicSideBar object={props.data}/>
            </div>
            <div className="content">
                
            </div>
        </div>
    );
}

export default Tenders;
