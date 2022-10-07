import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import Donut from '../components/Donut';
import BarChart from '../components/BarChart';
import SideBar from '../components/SideBar/SideBar';
import StackedBar from '../components/StackedBar';


function ProfilePage(props) {
    return (
        <>            
            <Navbar />            
            <FrontPage>                
                <div className="activity">
                    <Title>
                        Resumen de actividades
                    </Title>
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
                </div>
            </FrontPage>
            <div>
                <StackedBar/>
            </div>
        </>
    );
}

export default ProfilePage;

const Title = styled.div`
padding: 10px;
margin: 10px 0;
font-size: 1.5em;
`

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
  padding-top:65px;
  display: grid;
  grid-template-columns: 60%;
  align-items:center;
  justify-content:center;
  .title-main{


  }
  @media screen and (max-width: 1480px) {
    grid-template-columns: 20% 50% 30%;
  }

  @media screen and (max-width: 1250px) {
    grid-template-columns: 20% 80%;
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    margin-bottom:10vh;


  }
  





`