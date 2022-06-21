import Navbar from '../components/Navbar/Navbar';
import styled from 'styled-components'
import { Link } from 'react-router-dom';



function HomePage(props) {
    const text = "BlankPoint es una aplicación web/extensión en el que podrás conocer el sesgo político y factualidad de las noticias que proveen los diferentes medios chilenos en el internet"
    
    return (
        <Base>
            <Navbar/>
            <Main>
                <div className='main-intro'>
                    <h1>
                        Bienvenidos a BlankPoint®
                    </h1>
                    <p>
                        {text}
                    </p>
                    <Link to='/news'>
                        <button >Ir a las noticias</button>
                    </Link>
                </div>
                <div className='main-img'>
                    <img src={require('../components/images/icono.png')} alt='logo'/>
                </div>
            </Main>           
        </Base>
    );
}

export default HomePage;

const Base = styled.div`
    position:absolute;
    height: 100%;
`

const Main = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;

    background: linear-gradient(90deg, rgba(49,49,50,1) 0%, rgba(49,49,50,1) 35%, rgba(102,148,149,1) 100%);
    color: #F7F9F4;
    height: 100%;
    font-family: 'Newsreader', serif;
    font-weight: lighter;

    button{
        margin: 5px 0px;
        border-radius: 8px;
        padding: 10px 24px;
        background-color: #ffffff;
        border: 1px solid #3B413A;
    }

    h1{
        font-size: 60px;
        margin: 1em 0;
        font-weight:Normal;

    }
    p{
        font-size: 30px;
        margin: 1em 0;

    }

    .main-intro{
        padding:10%;
    }

    img{
        margin: 1em 0;
        display: block;
        max-width:100%;
        border-radius:10px;
    }
`

