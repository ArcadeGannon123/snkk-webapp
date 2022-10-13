import React,{useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import RowNews2 from '../components/RowNews2';
import axios from 'axios';
import Cookies from 'universal-cookie';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

//const Topicos = ['Todos','topico2','topico3','hello','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3','topico1','topico2','topico3']
/*
const data=[{
    "url": "https://www.cnnchile.com/elecciones2021/jose-antonio-kast-explico-dichos-dictadura-gay_20211213/",
    "title": "Kast explicó sus dichos sobre la “dictadura gay”: “Es lo que hizo Pablo Simonetti al ningunear, insultar y dividir”",
    "urlToImage": "https://media.cnnchile.com/sites/2/2021/12/kast-y-la-dictadura-gay.jpg",
    "published_date": "2022-01-11T04:02:07",
    "fechaAnalisis": "2022-10-11T01:02:02.621",
    "reportesFalsedad": 0,
    "visualizaciones": 7,
    "numeroAnalisis": 1,
    "periodista": [
      {
        "id": "6343daf230ed106b270b7979",
        "nombre": "Cnn Chile",
        "medio": "www.cnnchile.com"
      }
    ],
    "medio": {
      "id": "6343daf230ed106b270b797b",
      "nombre": "www.cnnchile.com"
    },
    "topico": "politica",
    "eventos": [
      {
        "idUsuario": "632279526177731276275b9f",
        "nombreUsuario": "admin",
        "descripcion": "Analisis de noticia solicitado.",
        "fecha": "2022-10-11T00:51:12.442"
      }
    ],
    "sesgoConservadorProgresista": {
      "conservador": 0.22865062801939626,
      "liberal": 0.07311432966304095,
      "neutral": 0.6982350423175628
    },
    "sesgoIzquierdaDerecha": {
      "extremaIzquierda": 0,
      "izquierda": 0.23200672242816262,
      "neutral": 0.6921504830747963,
      "derecha": 0.07584279449704107,
      "extremaDerecha": 0
    },
    "sesgoLenguajeOfensivo": {
      "noOfensivo": 0.9845396827797308,
      "ofensivo": 0.015460317220269143
    },
    "sesgoSensacionalismo": {
      "noSensacionalista": 0.00046909141228351466,
      "sensacionalista": 0.9995309085877164
    },
    "sesgoLibertadEconomica": {
      "igualdad": 0.07472592631631252,
      "neutral": 0.6966872223004074,
      "libertad": 0.22858685138328017
    }
  }]
*/


function ValidationPage(props) {
    
    const cookies = new Cookies();
    const token = cookies.get('userData').token;

    const [data,setData]= useState(null);

    const getData = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/reporte/usuario';

        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => { 
            console.log(res.data)                               
            setData(res.data)
        
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        cookies.set('lastpage','/recientes',{path:'/'});         
        getData();
    }, []);
  
    return (
        <>  
            <Navbar />            
            <FrontPage>
                <div className="title">
                    <span>
                        <QueryStatsIcon/>
                        Trabajos disponibles
                    </span>                                      
                </div>   
                <div className="news-container">
                    {data !== null ?
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

export default ValidationPage;


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