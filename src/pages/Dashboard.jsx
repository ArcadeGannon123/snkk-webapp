import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import Donut from '../components/Donut';
import BarChart from '../components/BarChart';
import SideBar from '../components/SideBar/SideBar';
import StackedBar from '../components/StackedBar';
import DashScore from '../components/DashScore';
import NewspaperIcon from '@mui/icons-material/Newspaper';


function ProfilePage(props) {
    return (
        <>            
            <Navbar />
            <FrontPage>
                <div className="title">
                    <NewspaperIcon/>
                    Resumen de actividades                                        
                </div>
                <Dashboard>
                    <div className="db score s1"><DashScore data={{title:'Nº de usos',score:'153'}}/> </div>
                    <div className="db score s2"><DashScore data={{title:'Total de análisis',score:'153'}}/> </div>
                    <div className="db score s3"><DashScore data={{title:'Total de análisis',score:'153'}}/> </div>
                    <div className="db score s4"><DashScore data={{title:'Total de análisis',score:'153'}}/> </div>
                    <div className="db chart c1"></div>   


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
                </Dashboard>
                

            </FrontPage>
        </>
    );
}

export default ProfilePage;

const Dashboard = styled.div`

display: grid;
grid-template-columns: repeat(4,1fr);
gap: 10px;

.db{
    background-color:white;
}
.score{
    grid-column:1/2;
}
.s3{
    grid-column:2/3;
    grid-row:1/2;
}
.s4{
    grid-column:2/3;
    grid-row:2/3;
}
.c1{

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