import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import Donut from '../components/Donut';
import BarChart from '../components/BarChart';
import SideBar from '../components/SideBar/SideBar';
import StackedBar from '../components/StackedBar';
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
                    <div className="db db-point"> 
                        <div className="title">
                            Puntaje
                        </div>
                        <div className="value">
                            100
                        </div>
                    </div>
                    <div className="db db-total">
                        <div className="title">
                            Total de análisis
                        </div>
                        <div className="value">
                            153
                        </div>
                    </div>
                    <div className="db line-chart">
                        <BarChart /> 
                    </div>
                    
                    <div className="db donut-chart archia"> 
                        <Donut /> 
                    </div>
                        
                    <div className="db donut-chart con-pro">
                        <Donut /> 
                    </div>
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

.value{
    font-size:50px;
    font-weight: 600;
    color: #669495;
}

.db{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;    
    background-color:white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

}

.db-point{
}
.db-total{
}
.donut-chart{
    padding: 0 15%;

}
.archia{
    grid-column: 1/3;
}
.con-pro{
    grid-column: 3/5;
}


.line-chart{
    height: 200px;
    grid-column: 3/5;
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