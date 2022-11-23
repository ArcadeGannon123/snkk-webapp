import React,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar2/Navbar';
import axios from 'axios';
import NewsCard from '../components/NewsComponents/NewsCard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import RowNews from '../components/NewsComponents/RowNews';
import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';
import BarChartIcon from '@mui/icons-material/BarChart';
import LinearProgress from '@mui/material/LinearProgress';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './PopularPage.css';

function PopularPage(props) {

    const cookies = new Cookies();

    const [data,setData]= useState(null);
    const [topics,setTopics]= useState(['Todos']);
    const [value, setValue] = useState(0);

    const getData = async (topic) => {    
        var url = '';
        if (topic === 'Todos'){
            url ='https://api-news-feria-2022.herokuapp.com/noticia/populares?dias=2'
        }else{
            url ='https://api-news-feria-2022.herokuapp.com/noticia/populares?dias=2&topico='+topic;
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
        setData(null);
        getData(topics[newValue]);
    };

    const handleClick = () =>{
        cookies.set('topico',topics[value],{path:'/'});
        window.location.href = './detalles/topico/'+data.title;
    }

    return (
        <>            
            <Navbar />            
            <div className='front-page'>   
                <div className="main-title">
                    <span>
                        <TrendingUpIcon/>
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
                {data ? <>
                <div className="popular-header"> 
                    {data.slice(0, 6).map((news => (
                        <NewsCard data={news}/> 
                    )))}      
                </div>
                <div className="body-container">
                    
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
                </>
                :                  
                <Box sx={{ width: '100%', margin:'1rem 0'}}>
                    <LinearProgress />
                </Box>}
                
            </div>
        </>
    );
}

export default PopularPage;

