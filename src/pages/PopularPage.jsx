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
import RowNews from '../components/RowNews';
import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';
import BarChartIcon from '@mui/icons-material/BarChart';

const Topicos = ['Todos','topico2','topico3','hello','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3']


function PopularPage(props) {

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
        cookies.set('lastpage','/populares',{path:'/'});  
        getData('Todos');
        getTopics();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setData([]);
        getData(topics[newValue]);
    };

    const handleClick = () =>{
        cookies.set('topico',topics[value],{path:'/'});
        window.location.href = './detalles/topico/'+data.title;
    }

    return (
        <>            
            <Navbar />            
            <FrontPage>   
                <div className="title">
                    <span>
                        <NewspaperIcon/>
                        Populares  
                    </span>
                    <Button onClick={handleClick} variant="outlined" startIcon={<BarChartIcon />}>
                        Detalles del tópico
                    </Button>                                     
                </div>
                <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper', padding:'0 1rem' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                       {topics.map((topico) => (                     
                            <Tab label={topico} />
                        ))}
                    </Tabs>
                </Box>
                {data[0] ? 
                <div className="news-container">
                    <div className="header"> 
                        {data.slice(0, 6).map((news => (
                            <NewsCard data={news}/> 
                        )))}      
                    </div>
                    <hr/>
                    <div className="feed-rest-news">
                        <div className="news">
                            {data.slice(6).map((news,i) =>(
                                <div key={i} >
                                    <RowNews data={news}/>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                :
                <></>}
                
            </FrontPage>
        </>
    );
}

export default PopularPage;

const FrontPage = styled.div`
padding-top:60px;
display: grid;
grid-template-columns: 65%;
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
.news-container .header{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
}
.news-container .sub-header{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:10px;
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
const NewsData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: '“No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez',
      author: '@bkristastucchio',
      media: 'La Cuarta',
      gridC: '1/3',
      gridR: '1/3',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: '“No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez',
      author: '@rollelflex_graphy726',
      media: 'La Cuarta',
      grid: 1/3,
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: '“No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez',
      author: '@helloimnik',
      media: 'La Cuarta',
      grid: 1/3,
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: '“No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez',
      author: '@nolanissac',
      media: 'La Cuarta',
      grid: 1/3,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: '“No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez',
      author: '@hjrc33',
      media: 'La Cuarta',
      grid: 1/3,
    },
  ];