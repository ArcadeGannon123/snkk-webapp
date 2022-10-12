import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import Donut from '../components/Donut';
import BarChart from '../components/BarChart';
import DashScore from '../components/DashScore';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import User from '../components/User';
import Cookies from 'universal-cookie';
import Chip from '@mui/material/Chip';
import PublicIcon from '@mui/icons-material/Public';
import axios from 'axios';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DashboardIcon from '@mui/icons-material/Dashboard';

const dataActivity ={
    1:0.5,
    2:0.2,
    3:0,
    4:0.3,
    5:0,
}



function ProfilePage(props) {
    const cookies = new Cookies();
    const userdata = cookies.get('userData');

    const [ingresos,setIngresos]= useState('');
    const [datos,setDatos]= useState('');
    const [bp,setBP]= useState(0);

    const [isloaded1,setIsloaded1]= useState(false);
    const [isloaded2,setIsloaded2]= useState(false);
    const [isloaded3,setIsloaded3]= useState(false);

    const getBP = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/usuario/recompensa';
        const token = cookies.get('userData').token;
        
        console.log(url)
        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => { 
            console.log(res.data)                               
            setBP(res.data)    
            setIsloaded3(true)          
        })
        .catch(err => {
            console.log(err)
        })
    }


    const getIngresos = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/incentivos/usuario';
        const token = cookies.get('userData').token;
        
        console.log(url)
        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                             
            setIngresos(res.data.pago)    
            setIsloaded2(true)        
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getDatos = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/perfil/personal';
        const token = cookies.get('userData').token;
        
        console.log(url)
        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {     
            console.log(res.data)                           
            setDatos(res.data)   
            setIsloaded1(true)     
        })
        .catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        getIngresos();
        getDatos();
        getBP();
    }, []);

    return (
        <>            
            <Navbar />
            <FrontPage>
                <div className="title">
                    <DashboardIcon/>
                    Resumen de actividades                                        
                </div>
                {isloaded1&&isloaded2&&isloaded3 ?<>
                <ProfileHeader>
                    <div className="profile-picture">
                        <User />
                    </div>
                    <div className="username">
                        {userdata.name}
                    </div>  
                    <div className="extras"> 
                        {cookies.get('userData').premium ? 
                        <Chip label="Suscriptor" color="success" variant="outlined" />
                        :
                        <></>}                 
                    </div>                  
                </ProfileHeader>
                <div className="title" style={{fontSize:'1.5rem'}}>
                    <PublicIcon/>
                    Global                                      
                </div>
                <Dashboard>
                    <div className="db score s1" style={{gridRow:'1/2',gridColumn:'1/2'}}><DashScore data={{title:'Puntaje BlankPoint',score:bp.toFixed(2)}}/> </div>
                    <div className="db score s1" style={{gridRow:'1/2',gridColumn:'2/3'}}><DashScore data={{title:'Ingresos estimados',score:`${ingresos.toFixed(2)} CLP`}}/> </div>
                    <div className="db score s2" style={{gridRow:'2/3',gridColumn:'1/2'}}><DashScore data={{title:'Noticias analizadas',score:datos.noticiasAnalizadas}}/> </div>
                    <div className="db score s3" style={{gridRow:'2/3',gridColumn:'2/3'}}><DashScore data={{title:'Análisis contribuidos',score:datos.sesgosReportados}}/> </div> 
                    <div className="db chart c1" style={{gridRow:'1/3',gridColumn:'3/5'}}><BarChart datos={datos.interaccionesDiarias} title='Actividad de los últimos 5 días' label='cantidad'/></div>
                </Dashboard>
                <div className="title" style={{fontSize:'1.5rem', zIndex:'100'}}>
                    <QueryStatsIcon/>
                    Sesgos enviados                                      
                </div>
                <Dashboard>
                    <div className="db donut d1" style={{gridRow:'1/3',gridColumn:'1/3'}}><Donut datos={datos.distribucionSesgos.izquierdaDerecha} title='Sesgo de Izquierda o Derecha' label='cantidad' /> </div> 
                    <div className="db donut d2" style={{gridRow:'2/3',gridColumn:'3/4'}}><Donut datos={datos.distribucionSesgos.lenguajeOfensivo} title='Presencia de lenguaje ofensivo' label='cantidad'/> </div> 
                    <div className="db donut d3" style={{gridRow:'1/2',gridColumn:'3/4'}}><Donut datos={datos.distribucionSesgos.sensacionalismo} title='¿Es una noticia sensacionalista?' label='cantidad'/> </div> 
                    <div className="db donut d4" style={{gridRow:'1/2',gridColumn:'4/5'}}><Donut datos={datos.distribucionSesgos.conservadorProgresista} title='Sesgo Conservador o Progresista' label='cantidad'/> </div> 
                    <div className="db donut d4" style={{gridRow:'2/3',gridColumn:'4/5'}}><Donut datos={datos.distribucionSesgos.conservadorProgresista} title='Sesgo en libertad económica' label='cantidad'/> </div> 
                </Dashboard>
                </>:<></>}
                    {/*
                    
                    <div className="db line-chart">
                        <BarChart /> 
                    </div>                    
                    <DashScore data={{title:'Total de análisis',score:'153'}}/>                    
                    <DashScore data={{title:'Ingresos estimados',score:'0.01$'}}/>
                    
                    <div className="db donut-chart archia"> 
                        <Donut /> 
                    </div>
                        
                    <div className="db donut-chart con-pro">
                        <Donut /> 
                    </div>*/}
                

            </FrontPage>
        </>
    );
}

export default ProfilePage;

const ProfileHeader = styled.div`
display:flex;
background-color:white;
margin-bottom: 10px;
padding: 1rem 0;
.username{
    color:#284b63c7;
    font-size:1.5rem;
}
.extras{
    display:flex;
    align-items:center;

}
`


const Dashboard = styled.div`

display: grid;
grid-template-columns: repeat(4,1fr);
gap: 10px;
margin-bottom: 10px;

.db{
    background-color:white;
}

`
const FrontPage = styled.div`
padding-top:60px;
display: grid;
grid-template-columns: 65%;
align-items:center;
justify-content:center;
background-color: #f4f4f9;


.feed-rest-news{    
    display:grid;
    grid-template-columns: 3fr 1fr;
}

.news-container{
    background-color: white;
    padding: 20px;
}
.news-container .header{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
}
.news-container .sub-header{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:10px;
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