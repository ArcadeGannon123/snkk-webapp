import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import RowNews3 from '../components/NewsComponents/RowNews3';
import axios from 'axios';
import Cookies from 'universal-cookie';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EmptyArea from '../components/UtilsComponents/EmptyArea';
import LoadingArea from '../components/UtilsComponents/LoadingArea';


function ValidationPage(props) {
    
    const cookies = new Cookies();
    const token = cookies.get('userData').token;

    const [data,setData]= useState(null);

    const getData = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/validar/obtener';

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
        getData();
    }, []);
  
    return (
        <>  
            <Navbar />            
            <div className='front-page'>
                <div className="main-title">
                    <span>
                        <QueryStatsIcon/>
                        Validaciones disponibles
                    </span>                                      
                </div>   
                <div className="body-container">
                    {data ?                     
                    data.length !== 0 ?
                    <div className="feed-rest-news">
                        <div className="news">
                            {data.map((news,i) =>(
                                <div key={i} >
                                    <RowNews3 data={news}/>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <EmptyArea />
                    :
                    <LoadingArea />
                    }
                </div> 
            </div>
        </>
    );
}

export default ValidationPage;


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