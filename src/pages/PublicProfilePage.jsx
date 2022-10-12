import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

import Navbar from '../components/Navbar2/Navbar';
import BarChart from '../components/BarChart';
import DashScore from '../components/DashScore';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Cookies from 'universal-cookie';
import Chip from '@mui/material/Chip';
import axios from "axios";
import Avatar from "@mui/material/Avatar";

const dataActivity ={
    1:20,
    2:13,
    3:4,
    4:5,
    5:18,
}


//...


function PublicProfilePage(props) {
    const cookies = new Cookies();
    const userdata = cookies.get('userData');
    const { id } = useParams();
    const [data, setData] = useState(null);

    const getProfile = async () => {
        const  url = `https://api-news-feria-2022.herokuapp.com/perfil?id=${id}`;
        await axios.get(url)
            .then(res => {
                setData(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        cookies.set('lastpage','/recientes',{path:'/'});
        if(!data) getProfile();
    }, [data]);

    return (
        <>            
            <Navbar />
            <FrontPage>
                {data ? <>
                <div className="title">
                    <NewspaperIcon/>
                    Resumen de actividades                                        
                </div>
                <ProfileHeader>
                    <div className="user-container">
                        <Avatar
                            alt="Remy Sharp" src="/static/images/avatar/1.jpg"
                            sx={{
                                cursor: 'pointer',
                            }}
                            className="username"
                        />
                        <div className="username" style={{cursor:'pointer'}}>
                            {data.nombre}
                        </div>
                    </div>
                    <div className="extras">                    
                        <Chip label={data.premium ? "Suscriptor" : "Gratuito"} color={data.premium ? "success" : "info"} variant="outlined" />
                    </div>                  
                </ProfileHeader>
                <Dashboard>
                    <div className="db score s2" style={{gridRow:'1/2',gridColumn:'1/2'}}><DashScore data={data ? {title: "Noticias analizadas", score: data.noticiasAnalizadas}: {title:'Noticias analizadas',score:'0'}}/> </div>
                    <div className="db score s3" style={{gridRow:'1/2',gridColumn:'2/2'}}><DashScore data={data ? {title: "Sesgos reportados", score: data.sesgosReportados}: {title:'Noticias analizadas',score:'0'}}/> </div>
                    <div className="db chart c1" style={{gridRow:'2/2', gridColumn: "span 2"}}><BarChart datos={data.interaccionesDiarias} title='Actividad de los últimos 5 días' label='interacciones'/></div>
                </Dashboard>
                </> : <></>}
                <Dashboard>
                   
                </Dashboard>
            </FrontPage>
        </>
    );
}

export default PublicProfilePage;

const ProfileHeader = styled.div`
display:flex;
background-color:white;
margin-bottom: 10px;
padding: 1rem 0;
.user-container{
    display:flex;
    align-items:center;
}
.username{
    color:#284b63c7;
    font-size:1.4rem;
    margin: 0 0.8rem;
}
.extras{
    display:flex;
    align-items:center;

}
`


const Dashboard = styled.div`

display: grid;
grid-template-columns: repeat(2,1fr);
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