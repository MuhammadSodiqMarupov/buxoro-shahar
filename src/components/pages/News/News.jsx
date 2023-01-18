import React, { useEffect,useState} from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';
import headerAPI, { domen } from '../../../headerAPI';
import './news.scss'
import ReactPaginate from 'react-paginate';
const News = ({totalPage,data,news}) => {
    const [doublesNews, setdoublesNews] = useState([]);

    const [myNews,setMyNews] = useState([]);


    const handleChangePage = (data)=> {
        setdoublesNews([]);
        let currentNumber = data.selected+1;
        headerAPI("api/post/1?pageNumber="+currentNumber,localStorage.getItem('langType')??"1").then(({data})=>{
            setMyNews([...data.data.list]);
            getDoubledData([...data.data.list]);
        })
    }

    function getDoubledData(data) {
        for(let i = 2;i < data.length;i+=2){
            doublesNews.push({
                first:data[i-1],
                second:data[i]
            });
        }
        setdoublesNews([...doublesNews]);
    }
    
    useEffect(()=>{
        if(news.length) {
            getDoubledData(news);
            setMyNews([...news]);
        }
    },[news])
    return (
        <div className='news'>
            <div className="news__container">
                <DynamicSideBar object={data}/>
                <div className="content">
                    <h1>Yangiliklar</h1>
                    <div className="content_news">
                        <div className='main_item'>
                            <div className="top">
                                <div className="top">
                                    <img className='main_item_image' src={myNews.length!=0?domen+myNews[0].imageUrl:''} alt="" />
                                </div>
                                <div className="text">
                                    <div className="item_date">{myNews.length!=0?myNews[0].date:""}</div>
                                    <div className="item_descr">{myNews.length!=0?myNews[0].title:""}</div>
                                </div>
                            </div>
                        </div>
                        {doublesNews.map((item,index)=><div key={index} className='item_part'>
                            <div className="first">
                                <div className="top">
                                    <img src={domen+item.first.imageUrl} className='item_image' alt="" />
                                </div>
                                <div className="text">
                                    <div className="item_date">{item.first.date}</div>
                                    <div className="item_descr">{item.first.title}</div>
                                </div>
                            </div>
                           <div className="second">
                                <div className="top">
                                    <img src={domen+item.second.imageUrl} className='item_image' alt="" />
                                </div>
                                <div className="text">
                                    <div className="item_date">{item.second.date}</div>
                                    <div className="item_descr">{item.second.title}</div>
                                </div>
                            </div>
                        </div>)}
                        <ReactPaginate 
                        previousLabel={'<-'}
                        nextLabel={"->"}
                        pageCount={totalPage}
                        marginPagesDisplayed={3}
                        onPageChange={handleChangePage}
                        pageRangeDisplayed={6}  
                        containerClassName='pagination'
                        pageClassName='page-item'
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
        </div>
    );
}

export default News;
