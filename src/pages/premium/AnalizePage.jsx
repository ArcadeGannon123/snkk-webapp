import React, { useState, useContext, useEffect } from 'react';
import Navbar                                     from '../../components/Navbar2/Navbar';
import { UserContext }                            from '../../components/UserContext';
import StackedBarUltraDeluxe                      from '../../components/biascomponents/StackedBarUltraDeluxe';
import Box                                        from '@mui/material/Box';
import axios                                      from 'axios';
import styled                                     from 'styled-components';
import TextField                                  from '@mui/material/TextField';
import Button                                     from '@mui/material/Button';
import CircularProgress                           from '@mui/material/CircularProgress';
import AnalyticsIcon                              from '@mui/icons-material/Analytics';
import ArrowBackIcon                              from '@mui/icons-material/ArrowBack';

export default function AnalizePage() {

    const [data, setData] = useState(null);
    const {token, setToken} = useContext(UserContext);
    const [link, setLink] = useState("");
    const [analize, setAnalize] = useState(false);
    const [flag, setFlag] = useState(0);

    const handleInputChange = (event) =>{
        setLink(event.target.value)
    }

    const handleAnalize = (event) => {
        event.preventDefault();
        if (link !== ""){
            setAnalize(true);
        }
        else{
            setFlag(1);
        }
    }

    const handleBack = (event) => {
        setAnalize(false);
        setData(null);
        setFlag(0);
    }

    useEffect( () => {
        async function getBiasNews (link, token, setData, setFlag) {
            let url = 'https://api-news-feria-2022.herokuapp.com/noticia/analizar-noticia';
            await axios.post(
                url,
                {
                    url: link
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(result => {
                    console.log(result.data);
                    setData(result.data);
                })
                .catch(error => {
                    setFlag(1);
                    console.log(flag);
                    console.log(error);
                })
            
        }
        if ((token !== '' && data === null) && analize) {
            getBiasNews(link, token, setData, setFlag);
        }
    }, [data, analize, link, token, flag]);


    return (
        <>
            <Navbar />
                <FrontPage>
                {
                    analize
                    ? data === null
                        ?   <div style={{
                                gridRow: "3",
                                gridColumn: "4",
                                display: "grid",
                                placeContent: "center",
                            }}>
                                
                                <CircularProgress/>
                            </div>
                        :   <>
                                <div className="title title2" style={{fontSize:'1.3rem'}}>
                                    <Button style={{textDecoration: 'none'}} onClick={handleBack}>
                                        <ArrowBackIcon/>
                                        Volver 
                                    </Button>                                                          
                                </div>
                                <div className="title" style={{fontSize:'1.3rem'}}>
                                    <AnalyticsIcon/>
                                    Sesgos de la noticia                                   
                                </div>
                                <Analysis>
                                    <div className="media-bias c1-3" >
                                        <div style={{color:'#284b63c7',textAlign:'center',fontWeight:'300',fontSize:'1.3rem', gridRow:'1'}}> Sesgo de Izquierda o Derecha </div>
                                        <StackedBarUltraDeluxe 
                                            labels={['Izquierda','Centro','Derecha']} 
                                            bias={[
                                                data.sesgoIzquierdaDerecha.izquierda,
                                                data.sesgoIzquierdaDerecha.neutral,
                                                data.sesgoIzquierdaDerecha.derecha
                                            ]}
                                        />
                                        
                                    </div>
                                    <div className="media-bias c3-5">
                                        <div style={{color:'#284b63c7',textAlign:'center',fontWeight:'300',fontSize:'1.3rem', gridRow:'2'}}> ¿Es una noticia sensacionalista? </div>
                                        <StackedBarUltraDeluxe 
                                            labels={['No Sensacionalista','Sensacionalista']} 
                                            bias={[data.sesgoSensacionalismo.noSensacionalista,data.sesgoSensacionalismo.sensacionalista]}
                                        />
                                    </div>
                                    <div className="media-bias c1-3">
                                        <div style={{color:'#284b63c7',textAlign:'center',fontWeight:'300',fontSize:'1.3rem', gridRow:'3'}}> Sesgo Conservador o Progresista </div>
                                        <StackedBarUltraDeluxe 
                                            labels={['Progresista','Neutral','Conservador']} 
                                            bias={[data.sesgoConservadorProgresista.liberal,data.sesgoConservadorProgresista.neutral,data.sesgoConservadorProgresista.conservador]}
                                        />
                                    </div>   
                                    <div className="media-bias c3-5">
                                        <div style={{color:'#284b63c7',textAlign:'center',fontWeight:'300',fontSize:'1.3rem', gridRow:'4'}}> Sesgo en libertad económica </div>
                                        <StackedBarUltraDeluxe 
                                            labels={['Igualdad','Neutral','Libertad']} 
                                            bias={[data.sesgoLibertadEconomica.igualdad,data.sesgoLibertadEconomica.neutral,data.sesgoLibertadEconomica.libertad]}
                                        />
                                    </div>  
                                    <div className="media-bias c1-3">
                                        <div style={{color:'#284b63c7',textAlign:'center',fontWeight:'300',fontSize:'1.3rem', gridRow:'5'}}> Sesgo de género </div>
                                        <StackedBarUltraDeluxe 
                                            labels={['Femenino','Desconocido','Masculino']} 
                                            bias={[data.sesgoGenero.femenino,data.sesgoGenero.desconocido,data.sesgoGenero.masculino]}
                                        />
                                    </div>
                                    <div className="media-bias c3-5">
                                        <div style={{color:'#284b63c7',textAlign:'center',fontWeight:'300',fontSize:'1.3rem', gridRow:'6'}}> Sesgo de sentimiento </div>
                                        <StackedBarUltraDeluxe 
                                            labels={['Negativo','Neutral','Positivo']} 
                                            bias={[data.sesgoSentimiento.negativo,data.sesgoSentimiento.neutral,data.sesgoSentimiento.positivo]}
                                        />
                                    </div>
                                </Analysis>
                            </>
                    :   <>
                            <div className="title" style={{fontSize:'1.3rem'}}>
                                <AnalyticsIcon/>
                                Analizar noticia                                     
                            </div>   
                            <form onSubmit={handleAnalize} className='form'>
                                <Box
                                    sx={{
                                        maxWidth: '100%',
                                        alignSelf: 'self-end',
                                        gridColumn: "2/5",
                                    }}
                                >
                                    {
                                        flag === 0
                                        ?   <TextField sx={{width: "100%"}} label="Ingrese Link de la noticia*" name="link" id="link" onChange={handleInputChange}/>
                                        :   <TextField sx={{width: "100%"}} label="Ingrese Link de la noticia*" name="link" id="link" onChange={handleInputChange} error helperText="Debe ingrear un link válido"/>
                                    }
                                </Box>
                                            
                                <Button type="submit" sx={{gridColumn: "3/3"}}>Analizar</Button>              
                            </form>
                        </>
                }
            </FrontPage>
        </>
    );
}

const Analysis = styled.div`

grid-row: 3;
grid-column: 3/6;
display:grid;
grid-template-columns: repeat(4,auto);
grid-template-rows: auto;
gap:1rem;

.c1-3 {
    grid-column: 1/5;
}

.c3-5 {
    grid-column: 1/5;
}

.media-bias .bias-label{
    font-size:1.1rem;
    color:#284b63c7;
}
.media-bias{
    padding: 0.8rem;     
    background-color:white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;  
}

`


const FrontPage = styled.div`
padding-top:50px;
display: grid;
grid-template-columns: auto repeat(5, 1fr);
grid-template-rows: auto auto repeat(1, 1fr);
gap: 10px;
background-color: #f4f4f9;
height: 100%;

.title{
    padding: 10px;
    margin: 0.8rem 0;
    font-size:2rem;
    font-weight:300;
    background-color:white;
    color:#284b63c7;
    display:flex;
    align-items:center;
    gap:10px;
    grid-column: 3/6;
    grid-row: 2;
}

.title2{
    grid-row: 1;
    grid-column: 3/6;
}

.form{
    grid-row: 3;
    grid-column: 3/6;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 80px);
    gap: 10px;
    align-items: center;
    justify-content: center;
}
`