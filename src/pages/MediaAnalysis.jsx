import React,{useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import axios from 'axios';
import RowMedia from '../components/RowMedia';
import Cookies from 'universal-cookie';
import TvIcon from '@mui/icons-material/Tv';



function MediaAnalysis(props) {

    const cookies = new Cookies();

    const [data,setData]= useState([]);
    const [loaded,setLoaded]= useState(false);

    const getData = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/medio/confiabilidad-medios';  
        
        console.log(url)
        await axios.get(url)
        .then(res => {                                
            setData(res.data)
            setLoaded(true)
        
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {    
        cookies.set('lastpage','/medios',{path:'/'});  
        getData();
    }, []);

    return (
        <>            
            <Navbar />            
            <FrontPage>   
                <div className="title">
                    <TvIcon/>
                    Análisis de medios                                   
                </div>
                <div className="media-container">
                    {loaded ? 
                    data.map((medio,i) =>(
                        <div className='media-wrapper' key={i} >
                            <RowMedia data={medio}/>
                            <hr/>
                        </div>
                    ))
                    :<></>}
                </div>
                
            </FrontPage>
        </>
    );
}

export default MediaAnalysis;

const FrontPage = styled.div`
padding-top:60px;
display: grid;
grid-template-columns: 65%;
align-items:center;
justify-content:center;
background-color: #f4f4f9;


.media-container{
    background-color: white;  
    gap:1rem;  
    padding: 20px;
    display:grid;
    grid-template-columns: repeat(4,1fr);
}
.media-container .media-wrapper{
    
}

.title{
    padding: 10px;
    font-size:2rem;
    font-weight:300;
    background-color:white;
    color:#284b63c7;
    display:flex;
    align-items:center;
    gap:10px;    
    margin-bottom: 10px;
    
}


`