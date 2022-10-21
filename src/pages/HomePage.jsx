import React,{useEffect} from 'react';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import logo from '../images/blankpointlogo.png';
import bghome from '../images/globe.jpg';
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineYoutube,
    AiOutlineLinkedin} from 'react-icons/ai';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { UserContext } from '../components/UserContext';
import Cookies from 'universal-cookie';

function HomePage(props) {
    const cookies = new Cookies();   

    useEffect(() => {        
        cookies.set('lastpage','/recientes',{path:'/'}); 
    }, []);

    return (
        <>
            
            <ScrollToTop />
            <Navbar />
            <Home id='/'>
                <HomeLogo>
                    <Logo src={logo} data-aos="zoom-in" data-aos-delay="200"/>
                    <LogoText data-aos="slide-down" data-aos-delay="100" >BlankPoint</LogoText>                
                </HomeLogo>    
                <div className="subtexto" data-aos="zoom-in" data-aos-delay="100">
                    Descubre el sesgo ideológico al que estas expuesto al leer noticias.
                </div>
                <NavLink className="button" to='/recientes'>
                    <div>                        
                            Ir a las noticias                        
                    </div>
                </NavLink>
                
                <blockquote className="blockquote" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="600">
                    <p class="mb-0">“La ideología tiene que ver directamente con el encubrimiento de la verdad de los hechos, con el uso del lenguaje para ofuscar u opacar la realidad al mismo tiempo que nos vuelve miopes.”-Paulo Freire.</p>
                </blockquote>
                <div className="redes-sociales">
                    <p>Síguenos en</p>
                    <div className="redes">
                        <a className='rrss' href='https://www.facebook.com/BlankPointFS' target="_blank" rel="noreferrer noopener" data-aos="zoom-in" data-aos-delay="100" >
                            <AiOutlineFacebook />
                        </a>
                        <a className='rrss' href='https://www.instagram.com/puntovacio.fs/' target="_blank" rel="noreferrer noopener" data-aos="zoom-in" data-aos-delay="150" >
                            <AiOutlineInstagram data-aos="zoom-in" />
                        </a>
                        <a className='rrss' href='https://www.linkedin.com/company/blankpoint/' target="_blank" rel="noreferrer noopener" data-aos="zoom-in" data-aos-delay="200" >
                            <AiOutlineYoutube data-aos="zoom-in" />
                        </a>
                        <a className='rrss' href='https://www.youtube.com/channel/UC99RZmxZu_wVIGeVr4ACq7g' target="_blank" rel="noreferrer noopener" data-aos="zoom-in" data-aos-delay="250" >
                            <AiOutlineLinkedin data-aos="zoom-in" />
                        </a>                
                    </div>
                </div>
            </Home>
            <Footer />
        </>
    );
}

export default HomePage;

const Home = styled.div`
    padding-top:80px;
    width: 100%;
    background: #000000;
    background-image: url(${bghome});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    background-attachment: fixed;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:90vh;

    @media screen and (max-height: 900px) {
        height:auto;
    }

    .button{
        background: #669495;
        width: 150px;
        text-align:center;
        padding: 25px 0;
        margin: 20px auto;
        border-radius: 15px;
        cursor:pointer;
        text-decoration:none;
        color:#e2e2e2;
        transition: 0.2s all ease;
        &:hover{
            background: #79aeaf;
            box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        }
    }

    .redes-sociales{
        p{
            font-family: 'Poppins', sans-serif;
            font-weight:300;
        }
        .redes{
            width:30%;
            margin:auto;
            padding-bottom:20px;
            font-size:50px;
            display:flex;
            justify-content: space-around;
        }
    }

    blockquote{
        font-family: 'Poppins', sans-serif;
        font-weight:500;
    }
    p{
        margin:auto;
        width:80%;
        text-align:center;
    }
    .subtexto{
        padding:10px;
        text-align:center;
        font-family: 'Poppins', sans-serif;
        font-weight:300;
        font-size:30px;
        color: #3f5a5a
    }


`;
const HomeLogo = styled.div`
    padding: 10px; 
    width: 40%;
    margin: 0 auto;
    @media screen and (max-width: 1450px) {
        width: 50%;
    }
    @media screen and (max-width: 1000px) {
        width: 80%;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        padding: 0;
    }
`;
const Logo = styled.img`
    display: block;
    width: 30%;
    margin-left: auto;
    margin-right: auto;

`;
const LogoText = styled.div`
    text-align:center;
    font-size: 4.5em;
    font-family: 'Roboto', sans-serif;
    font-weight:100;

`;