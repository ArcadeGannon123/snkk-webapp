import React from 'react';
import styled from "styled-components";
import ferialogo from '../images/fesw-logo.png';
import usm_di from '../images/logo_DI.png';
import preem_logo from '../images/preem_logo.png';

function Footer(props) {
    return (
        <>               
                
                <a style={{position:'absolute', textDecoration:'none', color: '#669495'}} href="https://www.freepik.es/foto-gratis/negocio-tecnologia-globo-fondo-pantalla-degradado_13312403.htm#query=Global&position=22&from_view=search" target="_blank" rel="noreferrer noopener">Imagen de rawpixel.com</a>
            
            <Logos>
                <img className='preem' src={preem_logo} alt=''/>
                <img className='di' src={usm_di} alt=''/>
                <img className='feria' src={ferialogo} alt=''/>
            </Logos>
            <Copyright>
                Copyright © 2022 BlankPoint - Feria de Software UTFSM
            </Copyright>
        </>
    );
}

export default Footer;

const Logos = styled.div`
    padding-top:30px;
    height: 90px;
    width: 100%;
    background-color:#041511;
    text-align:center;
    display:flex;
    align-items: center;
    justify-content:center;
    @media screen and (max-width: 900px) {    
        flex-direction:column;
        height:auto;
        
    }
    img{
        height:50px;
        padding-left:40px;
        padding-right:40px;
    }
`

const Copyright = styled.div`
    width: 100%;
    background-color:white;
    height: 30px;
    text-align:center;
`

