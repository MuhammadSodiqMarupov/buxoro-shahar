import React, { useEffect,useState} from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import headerAPI, { domen } from '../../../headerAPI';
import './news.scss'
import ReactPaginate from 'react-paginate';
const News = ({getDataFilterByArr,totalPage,data,news}) => {
    const [doublesNews, setdoublesNews] = useState([]);
    const [HolographText,setHolographText] = useState(["Yangiliklar","Йангиликлар","Новости","News"]);
    const [myNews,setMyNews] = useState({});


    const handleChangePage = (data)=> {
        setdoublesNews([]);
        setMyNews([]);
        let currentNumber = data.selected+1;
        headerAPI("api/post/1?pageNumber="+currentNumber,localStorage.getItem('langType')??"1").then(({data})=>{
            setMyNews({...data.data.list[0]});
            getDoubledData([...data.data.list]);
        })
    }

    
    function getDoubledData(data) {
        let copy = [];
        for(let i = 1;i < data.length;i+=2){
            copy.push({
                first:data[i],
                second:data[i+1]
            });
        }
        setdoublesNews([...copy]);
    }
    
    useEffect(()=>{
        if(news.length) {
            setMyNews({})
            setdoublesNews([]);
            getDoubledData(news);
            setMyNews({...news[0]});
        }
    },[news])
    return (
        <div className='news'>
            <div className="news__container">
                <DynamicSideBar object={data}/>
                <div className="content">
                    <h1>{getDataFilterByArr(HolographText)}</h1>
                    <div className="content_news">
                        <div className='main_item'>
                            <div className="top">
                                    <img className='main_item_image' src={domen+myNews.imageUrl} alt="Loading Image....." />
                            </div>
                            <div className="text">
                                    <div className="item_date">{myNews.date}</div>
                                    <div className="item_descr">{myNews.title}</div>
                                </div>
                        </div>
                        {doublesNews.map((item,index)=><div key={index} className='item_part'>
                            <div className="first">
                                <div className="top">
                                    <img src={domen+item.first.imageUrl} className='item_image' alt="Loading Image....." />
                                </div>
                                <div className="text">
                                    <div className="item_date">{item.first.date}</div>
                                    <div className="item_descr">{item.first.title}</div>
                                </div>
                            </div>
                            {item.second?         <div className="second">
                                <div className="top">
                                    <img src={domen+item.second?.imageUrl} className='item_image' alt="Loading Image....." />
                                </div>
                                <div className="text">
                                    <div className="item_date">{item.second?.date}</div>
                                    <div className="item_descr">{item.second?.title}</div>
                                </div>
                            </div>:""}
                        </div>)}
                    </div>
                    <ReactPaginate 
                        previousLabel={'<-'}
                        nextLabel={"->"}
                        pageCount={totalPage}
                        marginPagesDisplayed={3}
                        onPageChange={handleChangePage}
                        pageRangeDisplayed={6}  
                        containerClassName='pagination my_pagination'
                        pageClassName='page_item'
                        pageLinkClassName='page_link'
                        previousClassName='page-item'
                        previousLinkClassName='page-link'
                        nextClassName='page-item'
                        nextLinkClassName='page-link'
                        breakLinkClassName='page-link'
                        />
                </div>
            </div>
        </div>
    );
}

export default News;
