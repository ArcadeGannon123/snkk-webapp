import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar2/Navbar';
import axios from 'axios';
import MediaCard from '../../components/CardMedia';
import Cookies from 'universal-cookie';
import TvIcon from '@mui/icons-material/Tv';
import Button from '@mui/material/Button';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';
import EmptyArea from '../../components/UtilsComponents/EmptyArea';
import LoadingArea from '../../components/UtilsComponents/LoadingArea';


function MediaAnalysis(props) {

    const cookies = new Cookies();

    const [data,setData]= useState(null);

    const getData = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/medio/confiabilidad-medios';  
        
        await axios.get(url)
        .then(res => {                                
            setData(res.data)
        
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
            <div className='front-page'>   
                <div className="main-title">
                    <span>
                        <TvIcon/>
                        Análisis de medios     
                    </span>                        
                    <Button component={Link} to='/medios/analisis' variant="outlined" startIcon={<BarChartIcon />}>
                        Gráfico de medios
                    </Button>                             
                </div>
                <div className="media-container">
                    {data ?                     
                    data.length !== 0 ?
                    data.map((medio,i) =>(
                        <div className='media-wrapper' key={i} >
                            <MediaCard data={medio}/>
                        </div>
                    ))
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