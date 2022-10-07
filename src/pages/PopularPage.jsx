import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import StackedBar from '../components/StackedBar';

function ProfilePage(props) {
    return (
        <>            
            <Navbar />            
            <FrontPage>    
                <MainPopular>
                    <div className='news-main-image'>
                        <img src = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'/>                    
                    </div>
                    <div className="news-data">
                        <div className="media">
                            Lacuarta
                        </div>
                        <div className="title">
                            “No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez
                        </div>
                        <div className="periodista">
                            holasoygerman
                        </div>
                        <div className="bias-container">
                            <StackedBar/>
                        </div>
                    </div>
       
                </MainPopular>
            </FrontPage>
        </>
    );
}

export default ProfilePage;



const MainPopular = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap: 10px;
margin-top:50px;
.news-main-image{
    grid-column:1/3;
    object-fit: cover;
}
.news-main-image img{
    width:100%;
    
}
.news-data{
    grid-column:3/5;
}
.news-data .title{
    
    font-size:1.5rem;
}

`

const NewsCard = styled.div`
position:relative;
.news-data{
    position: absolute;
    background-color:blue;
    bottom:0;
    width:100%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%);
    height:90%;
}
.title{
    color:white;

}
img{
    width:100%;
    object-fit: cover;
}

`

const FrontPage = styled.div`
padding-top:50px;
display: grid;
grid-template-columns: 60%;
align-items:center;
justify-content:center;





`
const NewsData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: '“No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez',
      author: '@bkristastucchio',
      media: 'La Cuarta',
      gridC: '1/3',
      gridR: '1/3',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: '“No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez',
      author: '@rollelflex_graphy726',
      media: 'La Cuarta',
      grid: 1/3,
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: '“No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez',
      author: '@helloimnik',
      media: 'La Cuarta',
      grid: 1/3,
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: '“No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez',
      author: '@nolanissac',
      media: 'La Cuarta',
      grid: 1/3,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: '“No aceptaré más incomodidades”: Marlene de la Fuente arremetió en contra de la nueva pareja de Iván Núñez',
      author: '@hjrc33',
      media: 'La Cuarta',
      grid: 1/3,
    },
  ];