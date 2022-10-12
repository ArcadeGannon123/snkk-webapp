import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import FeedMain from '../components/FeedMain';
import RowNews from '../components/RowNews';
import axios from 'axios';
import Cookies from 'universal-cookie';
import AnalyticsIcon from '@mui/icons-material/Analytics';

//const Topicos = ['Todos','topico2','topico3','hello','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3']


function UserBadgetPage(props) {
    
    const cookies = new Cookies();

    const [data,setData]= useState([]);

    const getData = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/usuario/noticias-analizadas';
        const token = cookies.get('userData').token;
        
        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {    
            console.log(res.data)                            
            setData(res.data)        
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    useEffect(() => {
        cookies.set('lastpage','/analizados',{path:'/'});         
        getData();
    }, []);


  
    return (
        <>  
            <Navbar />            
            <FrontPage>
                <div className="title">
                    <span>
                        <AnalyticsIcon/>
                        Noticias analizadas  
                    </span>                                      
                </div>   
                <div className="news-container">
                    {data[0] ? <>
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
                    </>:<></>}
                </div>
                

            </FrontPage>
        </>
    );
}

export default UserBadgetPage;


const FrontPage = styled.div`
padding-top:60px;
display: grid;
grid-template-columns: 60%;
align-items:center;
justify-content:center;
background-color: #f4f4f9;

.topics{
    background-color:white;
}


.feed-rest-news{    
    display:grid;
    grid-template-columns: 3fr 1fr;
}

.news-container{
    background-color: white;
    padding: 20px;
}

.title span{
    font-size:2rem;
    font-weight:300;
    color:#284b63c7;
    display:flex;
    align-items:center;
    gap:10px;
}
.title{
    
    padding: 10px;    
    margin-bottom: 10px;
    background-color:white;
    display: flex;
    justify-content: space-between;
}

`