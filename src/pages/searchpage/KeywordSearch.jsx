import React,{useState, useEffect} from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import FirstNews from '../../components/NewsComponents/FirstNews';
import RowNews from '../../components/NewsComponents/RowNews';
import axios from 'axios';
import EmptyArea from '../../components/UtilsComponents/EmptyArea';
import LoadingArea from '../../components/UtilsComponents/LoadingArea';
import {Link,useNavigate,useLocation,useParams} from 'react-router-dom';
import Chip from '@mui/material/Chip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//const Topicos = ['Todos','topico2','topico3','hello','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3']


function KeywordSearch(props) {
    
    const params = useParams();
    const navigate = useNavigate();

    const [data,setData]= useState(null);

    const getData = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/noticia/contingencia?keyword='+params.keyword;

        await axios.get(url)
        .then(res => {                              
            setData(res.data)        
        })
        .catch(err => {
            console.log(err)
        })
    }

    const goBack = () => {
        navigate(-1);
      };
    
    useEffect(() => {      
        getData();
    }, []);


  
    return (
        
        <>  
            <Navbar />            
            <div className='front-page'>
                <div className="return-bar" style={{fontSize:'1.3rem',pointer:'cursor'}} onClick={goBack}>
                    <span>
                        <ArrowBackIcon/>
                        Volver   
                    </span>                                              
                </div>       
                <div className="news-keywords">
                    <div className="sub-text">Palabra clave:</div>
                    <div className='list-keywords'>
                        <Chip label={params.keyword} />
                    </div>
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

export default KeywordSearch;
