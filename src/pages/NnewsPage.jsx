import React,{useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import FeedMain from '../components/FeedMain';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RowNews from '../components/RowNews';
import axios from 'axios';
import { UserContext } from '../components/UserContext';


function NnewsPage(props) {

    const [data,setData]= useState([]);
    const {newsData,setNewsData} = useContext(UserContext);
    
    useEffect(() => {
        const url='https://api-news-feria-2022.herokuapp.com/noticia/listado-noticias'
        const getData = async (url) => {
            await axios.get(url)
            .then(res => {                                
                setData(res.data)
            
            })
            .catch(err => {
                console.log(err)
            })
        }
        getData(url);
    }, []);



    return (
        <>  
            <Navbar />            
            <FrontPage>
                <div className="title">
                    <NewspaperIcon/>
                    Noticias recientes  
                                      
                </div>
                {data[0] ? 
                <div className="news-container">
                    <FeedMain data={data[0]}/>
                    <hr/>
                    <div className="feed-rest-news">
                        <div className="news">
                            {data.slice(1).map((news,i) =>(
                                <div key={i} >
                                    <RowNews data={news}/>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                :
                <></>
                
                }

            </FrontPage>
        </>
    );
}

export default NnewsPage;


const FrontPage = styled.div`
padding-top:50px;
display: grid;
grid-template-columns: 60%;
align-items:center;
justify-content:center;
background-color: #f4f4f9;

.feed-rest-news{    
    display:grid;
    grid-template-columns: 3fr 1fr;
}

.news-container{
    background-color: white;
    padding: 20px;
}

.title{
    padding: 10px;
    margin: 10px 0;
    font-size:2rem;
    font-weight:300;
    background-color:white;
    color:#284b63c7;
    display:flex;
    align-items:center;
    gap:10px;
}


`