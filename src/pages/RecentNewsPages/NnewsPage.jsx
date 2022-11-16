import React,{useState, useEffect} from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import FirstNews from '../../components/NewsComponents/FirstNews';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RowNews from '../../components/NewsComponents/RowNews';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';
import BarChartIcon from '@mui/icons-material/BarChart';
import {Adsense} from '@ctrl/react-adsense';
import LinearProgress from '@mui/material/LinearProgress';

//const Topicos = ['Todos','topico2','topico3','hello','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3']


function NnewsPage(props) {
    
    const cookies = new Cookies();
    const userData = cookies.get('userData');

    const [data,setData]= useState(null);
    const [topics,setTopics]= useState(['Todos']);
    const [value, setValue] = useState(0);


    const getData = async (topic) => {    
        var url = '';
        if (topic === 'Todos'){
            url ='https://api-news-feria-2022.herokuapp.com/noticia/listado-noticias'
        }else{
            url ='https://api-news-feria-2022.herokuapp.com/noticia/topico?topico='+topic;
        }
        
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setData(null);
        getData(topics[newValue]);
    };

    const handleClick = () =>{
        cookies.set('topico',topics[value],{path:'/'});
        window.location.href = './detalles/topico/'+topics[value];
    }

    useEffect(() => {
        cookies.set('lastpage','/recientes',{path:'/'});         
        getData('Todos');
        getTopics();
    }, []);
  
    return (
        <>  
            <Navbar />           
            <div className='front-page'>
                <div className="main-title">
                    <span>
                        <NewspaperIcon/>
                        Noticias recientes  
                    </span>
                    <Button onClick={handleClick} variant="outlined" startIcon={<BarChartIcon />}>
                        Detalles del tópico
                    </Button>                                       
                </div>    
                <div style={{display: userData ? userData.premium ? 'none' : 'flex' : 'flex', justifyContent:'center'}}>
                    <img src='https://www.plerdy.com/wp-content/uploads/2020/01/3.jpg' alt='publicidad' />
                    <Adsense client="ca-pub-2909524242328894" slot=""/>
                </div>              
                <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper', padding:'0 1rem'}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {topics.map((topico,i) => (                     
                            <Tab key={i} label={topico} />
                        ))}
                    </Tabs>
                </Box>                   
                <div className="body-container">
                    
                    {data ? <>
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
                    </>:  
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}
                </div>

            </div>
        </>
    );
}

export default NnewsPage;
