import React,{useState, useEffect} from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import FirstNews from '../../components/NewsComponents/FirstNews';
import RowNews from '../../components/NewsComponents/RowNews';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Cookies from 'universal-cookie';
import LinearProgress from '@mui/material/LinearProgress';
import PublicIcon from '@mui/icons-material/Public';
import Chip from '@mui/material/Chip';
import EmptyArea from '../../components/UtilsComponents/EmptyArea';
//const Topicos = ['Todos','topico2','topico3','hello','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3']


function KeywordsPage(props) {
    
    const cookies = new Cookies();
    const userData = cookies.get('userData');

    const [data,setData]= useState(null);
    const [keywords,setKeywords]= useState(['Todos']);
    const [value, setValue] = useState(0);


    const getData = async (keyword) => {    
        var url = '';
        if (keyword === 'Todos'){
            url ='https://api-news-feria-2022.herokuapp.com/noticia/contingencia-todas'
        }else{
            url ='https://api-news-feria-2022.herokuapp.com/noticia/contingencia?keyword='+keyword;
        }
        
        await axios.get(url)
        .then(res => {    
            console.log(res.data)                            
            setData(res.data)
        
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getKeywords = async () => {        
        const url='https://api-news-feria-2022.herokuapp.com/keywords'
        await axios.get(url)
        .then(res => {     
            setKeywords(['Todos']);                  
            setKeywords(keywords.concat(res.data));        
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setData(null);
        getData(keywords[newValue]);
    };


    useEffect(() => {      
        getData('Todos');
        getKeywords();
    }, []);
  
    return (
        <>  
            <Navbar />           
            <div className='front-page'>
                <div className="main-title">
                    <span>
                        <PublicIcon/>
                        Contingencia  
                    </span>                                    
                </div>    
                {keywords &&         
                <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper', padding:'0 1rem'}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {keywords.map((keyword,i) => (                     
                            <Tab key={i} icon={<Chip sx={{cursor:'pointer'}} label={keyword} />}/>
                        ))}
                    </Tabs>
                </Box>    }                
                <div className="body-container">   
                    {data ?                     
                    data.length !== 0 ?<>
                    <FirstNews data={data[0]}/>
                    <hr/>
                    <div className="list-row-news">
                        {data.slice(1).map((news,i) =>(
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
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                    }
                </div>

            </div>
        </>
    );
}

export default KeywordsPage;
