import React,{useState,useEffect} from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import Donut from '../../components/Donut';
import BarChart from '../../components/BarChart';
import Badget from '../../components/Badget';
import DashScore from '../../components/DashScore';
import Cookies from 'universal-cookie';
import Chip from '@mui/material/Chip';
import PublicIcon from '@mui/icons-material/Public';
import axios from 'axios';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './Dashboard.css';
import UserAvatar from '../../components/user/UserAvatar';
import AnalysisReport from '../../components/analysiscomponents/AnalysisReport';


function ProfilePage(props) {
    const cookies = new Cookies();
    const userdata = cookies.get('userData');

    const [ingresos,setIngresos]= useState(null);
    const [datos,setDatos]= useState(null);
    const [bp,setBP]= useState(0);
    const [personal,setPersonal]= useState(null);

    const getBP = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/usuario/recompensa';
        const token = cookies.get('userData').token;
        
        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                               
            setBP(res.data)              
        })
        .catch(err => {
            console.log(err)
        })
    }


    const getIngresos = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/incentivos/usuario';
        const token = cookies.get('userData').token;

        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                    
            setIngresos(res.data.pago)          
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getDatos = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/perfil/personal';
        const token = cookies.get('userData').token;

        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                            
            setDatos(res.data)     
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getPersonal = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/favorito/sesgo';
        const token = cookies.get('userData').token;

        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                           
            setPersonal(res.data)     
        })
        .catch(err => {
            console.log(err)
        })
    }




    useEffect(() => {
        getIngresos();
        getDatos();
        getBP();
        getPersonal();
    }, []);

    return (
        <>            
            <Navbar />
            <div className ='front-page'>
                <div className="main-title" >
                    <span>
                        <DashboardIcon/>
                        Resumen de actividades       
                    </span>                               
                </div>
                {ingresos !== null && datos !== null?<>
                <div className='profile-header'>
                    <div className="profile-picture">
                        <UserAvatar />
                    </div>
                    <div className="ph-username">
                        {userdata.nombre}
                    </div>  
                    <div className="ph-extras"> 
                        {cookies.get('userData').premium ? 
                        <Chip label="Suscriptor" color="success" variant="outlined" />
                        :
                        <></>} 
                        <Badget/>               
                    </div>                  
                </div>
                <div className="subtitle-bar" style={{fontSize:'1.5rem',marginTop:0}}>
                    <PublicIcon/>
                    Global                                      
                </div>
                <div className='dashboard-global'>
                    <div className="db-global db-g-1" ><DashScore data={{title:'Puntaje BlankPoint',score:bp.toFixed(2)}}/> </div>
                    <div className="db-global db-g-2" ><DashScore data={{title:'Ingresos estimados',score:`${ingresos.toFixed(2)} CLP`}}/> </div>
                    <div className="db-global db-g-3" ><DashScore data={{title:'Noticias analizadas',score:datos.noticiasAnalizadas}}/> </div>
                    <div className="db-global db-g-4" ><DashScore data={{title:'Análisis contribuidos',score:datos.sesgosReportados}}/> </div> 
                    <div className="db-global db-g-5" ><BarChart datos={datos.interaccionesDiarias} title='Actividad de los últimos 5 días' label='cantidad'/></div>
                </div>
                <div className="subtitle-bar" style={{fontSize:'1.5rem',marginTop:0}}>
                    <QueryStatsIcon/>
                    Sesgos enviados                                      
                </div>
                <div className='dashboard-send' style={{marginBottom:0}}>
                    <div className="db-send db-s-1" ><Donut datos={datos.distribucionSesgos.izquierdaDerecha} title='Sesgo de Izquierda o Derecha' label='cantidad' /> </div> 
                    <div className="db-send db-s-2" ><Donut datos={datos.distribucionSesgos.conservadorProgresista} title='Sesgo Conservador o Progresista' label='cantidad'/> </div> 
                    <div className="db-send db-s-3" ><Donut datos={datos.distribucionSesgos.conservadorProgresista} title='Sesgo en libertad económica' label='cantidad'/> </div> 
                    <div className="db-send db-s-4" ><Donut datos={datos.distribucionSesgos.sensacionalismo} title='¿Es una noticia sensacionalista?' label='cantidad'/> </div> 
                </div>
                </>:<></>}  
                {personal && (
                <AnalysisReport 
                    title='Sesgo personal'
                    data={{
                        izquierdaDerecha: {
                            izquierda:personal?.izquierdaDerecha?.izquierda,
                            neutral:personal?.izquierdaDerecha?.neutral,
                            derecha:personal?.izquierdaDerecha?.derecha
                        },
                        lenguajeOfensivo: {
                            noOfensivo:personal?.lenguajeOfensivo?.noOfensivo,
                            ofensivo:personal?.lenguajeOfensivo?.ofensivo
                        },
                        sensacionalismo: {
                            noSensacionalista:personal?.sensacionalismo?.noSensacionalista,
                            sensacionalista:personal?.sensacionalismo?.sensacionalista
                        },
                        conservadorProgresista: {
                            liberal:personal?.conservadorProgresista?.liberal,
                            neutral:personal?.conservadorProgresista?.neutral,
                            conservador:personal?.conservadorProgresista?.conservador
                        },
                        libertadEconomica: {
                            igualdad:personal?.libertadEconomica?.igualdad,
                            neutral:personal?.libertadEconomica?.neutral,
                            libertad:personal?.libertadEconomica?.libertad
                        }
                    }}
                />
                )}
                

            </div>
        </>
    );
}

export default ProfilePage;

