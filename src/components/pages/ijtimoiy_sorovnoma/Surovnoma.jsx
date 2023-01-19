import DynamicSideBar from '../../SideBar/DynamicSideBar';
import './Surovnaa.scss'
const Surovnoma = ({data}) => {

    return (
        <div className='surovnoma'>
            <div className="surovnoma__container">
                <DynamicSideBar object={data}/>
                <div className="content">
                </div>
            </div>
        </div>
    );
}

export default Surovnoma;