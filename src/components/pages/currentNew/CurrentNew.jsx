import './currentItem.scss';
import { domen } from '../../../headerAPI';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const CurrentNew = ({set,currentNew,allNews}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(Object.keys(currentNew).length === 0) {
            navigate("/404")
        }
    },[])
    return (
        <div className='current_new'>
            <div className="container">
                <div className="main_item_new">
                    <div className="top">
                        <img src={domen+currentNew.imageUrl} alt="Loading Image..." />
                    </div>
                    <div className="text">
                        <div className="date">
                            {currentNew.date}
                        </div>
                        <div className="berifDescription">
                            {currentNew.berifDescription}
                        </div>
                        <div className="descr_full">
                            {currentNew.description}
                        </div>
                    </div>
                </div>
                <div className="additional_items">
                    <div className="sidebar_news">
                        {allNews.map(item=><div className='item_current_new' onClick={()=>{
                            set(item);
                            window.scrollTo(0,0)
                            navigate("/new")
                        }}>
                            <div className="date">{item.date}</div>
                            <p className="title">{item.title}</p>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentNew;
