import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Comentarios from '../../components/comments/Comentarios';
import {Link,useNavigate,useLocation,useParams} from 'react-router-dom';
import NewsHeader from '../../components/NewsComponents/NewsHeader';
import './DetailsStyles.css';
import AnalysisReport from '../../components/analysiscomponents/AnalysisReport';
import ForumIcon from '@mui/icons-material/Forum';
import NewsReport from '../../components/analysiscomponents/NewsReport';
import Chip from '@mui/material/Chip';
import EmptyArea from '../../components/UtilsComponents/EmptyArea';
import LoadingArea from '../../components/UtilsComponents/LoadingArea';
import axios from 'axios';


function DetailsPage(props) {

    //const data = useLocation().state;

    const navigate = useNavigate();

    const [data,setData]= React.useState(null);
    const params = useParams();

    const getDatos = async () => {        
        const url='https://api-news-feria-2022.herokuapp.com/noticia/obtener-noticia'
        const body = {url:params.id}
        console.log(body)
        await axios.post(url,body)
        .then(res => {                      
            setData(res.data);
        
        })
        .catch(err => {
            console.log(err)
        })
    }


    const goBack = () => {
        navigate(-1);
      };

    React.useEffect(() => {
        window.scrollTo(0, 0);
        getDatos()
    }, []);
    
    return (
        <>
            <Navbar />      
            <div className='front-page'>
                {data ?                     
                data.length !== 0 ?
                <>
                <div className="return-bar" style={{fontSize:'1.3rem',pointer:'cursor'}} onClick={goBack}>
                    <span>
                        <ArrowBackIcon/>
                        Volver   
                    </span>                                              
                </div> 
                <div className="body-container">                
                    <NewsHeader data={data}/>
                </div>
                <div className="news-keywords">
                    <div className="sub-text">Palabras clave:</div>
                    <div className='list-keywords'>
                        {data.keywords.map((key,i)=> <Link to={'/keyword/'+key}><Chip sx={{cursor:'pointer'}} key={i} label={key} /></Link>)}
                    </div>
                </div>
                <div className="news-summary">
                    <div className="sub-text">Resumen:</div>
                    {data.resumen}
                </div>
                <AnalysisReport 
                    data={{
                        izquierdaDerecha: {
                            izquierda:data?.sesgoIzquierdaDerecha?.izquierda,
                            neutral:data?.sesgoIzquierdaDerecha?.neutral,
                            derecha:data?.sesgoIzquierdaDerecha?.derecha
                        },
                        lenguajeOfensivo: {
                            noOfensivo:data?.sesgoLenguajeOfensivo?.noOfensivo,
                            ofensivo:data?.sesgoLenguajeOfensivo?.ofensivo
                        },
                        sensacionalismo: {
                            noSensacionalista:data?.sesgoSensacionalismo?.noSensacionalista,
                            sensacionalista:data?.sesgoSensacionalismo?.sensacionalista
                        },
                        conservadorProgresista: {
                            liberal:data?.sesgoConservadorProgresista?.liberal,
                            neutral:data?.sesgoConservadorProgresista?.neutral,
                            conservador:data?.sesgoConservadorProgresista?.conservador
                        },
                        libertadEconomica: {
                            igualdad:data?.sesgoLibertadEconomica?.igualdad,
                            neutral:data?.sesgoLibertadEconomica?.neutral,
                            libertad:data?.sesgoLibertadEconomica?.libertad
                        },
                        sentimiento: {
                            negativo:data?.sesgoSentimiento?.negativo,
                            neutral:data?.sesgoSentimiento?.neutral,
                            positivo:data?.sesgoSentimiento?.positivo
                        },
                        genero: {
                            masculino:data?.sesgoGenero?.masculino,
                            desconocido:data?.sesgoGenero?.desconocido,
                            femenino:data?.sesgoGenero?.femenino
                        }
                    }}
                />
                <NewsReport data={data}/>
                <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
                    <ForumIcon/>
                    Comentarios                                     
                </div>
                <div className="comments-section">
                    <Comentarios urlNoticia={data.url}/>
                </div>
                </>
                :
                <EmptyArea />
                :
                <LoadingArea />
                }
                
            </div>  
        </>
        
    );
}

export default DetailsPage;
