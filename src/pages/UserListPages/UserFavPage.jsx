import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar2/Navbar';
import FirstNews from '../../components/NewsComponents/FirstNews';
import RowNews from '../../components/NewsComponents/RowNews';
import axios from 'axios';
import Cookies from 'universal-cookie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmptyArea from '../../components/UtilsComponents/EmptyArea';
import LoadingArea from '../../components/UtilsComponents/LoadingArea';

//const Topicos = ['Todos','topico2','topico3','hello','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3']


function UserFavPage(props) {
    
    const cookies = new Cookies();

    const [data,setData]= useState(null);

    const getData = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/favorito/lista';
        const token = cookies.get('userData').token;
        
        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                              
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
            <div className='front-page'>
                <div className="main-title">
                    <span>
                        <FavoriteIcon/>
                        Favoritos
                    </span>                                      
                </div>                
                <div className="body-container">                    
                {data ?                     
                data.length !== 0 ?
                <>
                    <FirstNews data={data[0]}/>
                    <hr/>
                    <div className="list-row-news">
                        {data.slice(1,10).map((news,i) =>(
                            <div key={i} >
                                <RowNews data={news}/>
                                <hr/>
                            </div>
                        ))}
                    </div>
                </>
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

export default UserFavPage;


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