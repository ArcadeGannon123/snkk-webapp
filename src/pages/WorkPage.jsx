import React,{useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RowNews2 from '../components/RowNews2';
import axios from 'axios';
import Cookies from 'universal-cookie';

//const Topicos = ['Todos','topico2','topico3','hello','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3']


function UserNewsPage(props) {
    
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
                        Trabajos disponibles
                    </span>                                      
                </div>   
                <div className="news-container">
                    {data[0] ?
                    <div className="feed-rest-news">
                        <div className="news">
                            {data.map((news,i) =>(
                                <div key={i} >
                                    <RowNews2 data={news}/>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                    </div>
                    :<></>}
                </div>
                

            </FrontPage>
        </>
    );
}

export default UserNewsPage;


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