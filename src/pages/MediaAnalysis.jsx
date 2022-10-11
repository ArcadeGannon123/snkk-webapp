import React,{useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import StackedBar from '../components/StackedBar';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import axios from 'axios';
import FeedMain from '../components/FeedMain';
import NewsCard from '../components/NewsCard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import RowMedia from '../components/RowMedia';
import Cookies from 'universal-cookie';
import LanguageIcon from '@mui/icons-material/Language';



function MediaAnalysis(props) {

    const cookies = new Cookies();

    const [data,setData]= useState([]);
    const [topics,setTopics]= useState(['Todos']);
    const [value, setValue] = useState(0);

    const getData = async (topic) => {    
        var url = '';
        if (topic === 'Todos'){
            url ='https://api-news-feria-2022.herokuapp.com/noticia/listado-noticias'
        }else{
            url ='https://api-news-feria-2022.herokuapp.com/noticia/topico?topico='+topic;
        }
        
        console.log(url)
        await axios.get(url)
        .then(res => {                                
            setData(res.data)
        
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getTopics = async () => {        
        const url='https://api-news-feria-2022.herokuapp.com/noticia/topicos'
        await axios.get(url)
        .then(res => {  
            setTopics(['Todos']);                        
            setTopics(topics.concat(res.data));
        
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {              
        cookies.set('lastpage','/medios',{path:'/'});  
        getData('Todos');
        getTopics();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setData([]);
        getData(topics[newValue]);
    };

    return (
        <>            
            <Navbar />            
            <FrontPage>   
                <div className="title">
                    <LanguageIcon/>
                    Análisis de medios                                   
                </div>
                <div className="media-container">
                    {data.map((news,i) =>(
                        <div className='media-wrapper' key={i} >
                            <RowMedia data={news}/>
                            <hr/>
                        </div>
                    ))}
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