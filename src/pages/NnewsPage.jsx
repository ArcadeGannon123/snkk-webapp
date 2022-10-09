import React,{useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import FeedMain from '../components/FeedMain';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RowNews from '../components/RowNews';
import axios from 'axios';
import { UserContext } from '../components/UserContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Cookies from 'universal-cookie';

//const Topicos = ['Todos','topico2','topico3','hello','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3']


function NnewsPage(props) {
    
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
        cookies.set('lastpage','/recientes',{path:'/'});         
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
                    <NewspaperIcon/>
                    Noticias recientes                                        
                </div>                 
                <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper', padding:'0 1rem'}}>
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

export default NnewsPage;


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