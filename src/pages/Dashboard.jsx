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

const dataActivity ={
    1:20,
    2:13,
    3:4,
    4:5,
    5:18,
}



function ProfilePage(props) {
    const cookies = new Cookies();
    const userdata = cookies.get('userData');

    const [ingresos,setIngresos]= useState('');

    const getIngresos = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/incentivos/usuario';
        const token = cookies.get('userData').token;
        
        console.log(url)
        await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => { 
            console.log(res.data)                               
            setIngresos(res.data.pago)        
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getIngresos();
    }, []);

    return (
        <>            
            <Navbar />
            <FrontPage>
                <div className="title">
                    <NewspaperIcon/>
                    Resumen de actividades                                        
                </div>
                <ProfileHeader>
                    <div className="profile-picture">
                        <User />
                    </div>
                    <div className="username">
                        {userdata.name}
                    </div>  
                    <div className="extras">                    
                        <Chip label="Suscriptor" color="success" variant="outlined" />
                    </div>                  
                </ProfileHeader>
                <div className="title" style={{fontSize:'1.5rem'}}>
                    <PublicIcon/>
                    Global                                      
                </div>
                <Dashboard>
                    <div className="db score s1" style={{gridRow:'1/2',gridColumn:'1/2'}}><DashScore data={{title:'Puntaje BlankPoint',score:'153'}}/> </div>
                    <div className="db score s1" style={{gridRow:'1/2',gridColumn:'2/3'}}><DashScore data={{title:'Ingresos estimados',score:`${ingresos} CLP`}}/> </div>
                    <div className="db score s2" style={{gridRow:'2/3',gridColumn:'1/2'}}><DashScore data={{title:'Noticias analizadas',score:'153'}}/> </div>
                    <div className="db score s3" style={{gridRow:'2/3',gridColumn:'2/3'}}><DashScore data={{title:'Análisis contribuidos',score:'153'}}/> </div> 
                    <div className="db chart c1" style={{gridRow:'1/3',gridColumn:'3/5'}}><BarChart datos={dataActivity} title='Actividad de los últimos 5 días' label='cantidad'/></div>
                    <div className="db donut d1" style={{gridRow:'4/6',gridColumn:'1/3'}}><Donut datos={dataActivity} title='Sesgo de Izquierda o Derecha' label='cantidad' /> </div> 
                    <div className="db donut d2" style={{gridRow:'5/6',gridColumn:'3/4'}}><Donut datos={dataActivity} title='Presencia de lenguaje ofensivo' label='cantidad'/> </div> 
                    <div className="db donut d3" style={{gridRow:'4/5',gridColumn:'3/4'}}><Donut datos={dataActivity} title='¿Es una noticia sensacionalista?' label='cantidad'/> </div> 
                    <div className="db donut d4" style={{gridRow:'4/5',gridColumn:'4/5'}}><Donut datos={dataActivity} title='Sesgo Conservador o Progresista' label='cantidad'/> </div> 
                    <div className="db donut d4" style={{gridRow:'5/6',gridColumn:'4/5'}}><Donut datos={dataActivity} title='Sesgo en libertad económica' label='cantidad'/> </div> 
                </Dashboard>  
                <Dashboard>
                   
                </Dashboard>
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