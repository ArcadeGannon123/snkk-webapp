import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import ferialogo from '../images/fesw-logo.png';
import usm_di from '../images/logo_DI.png';
import preem_logo from '../images/preem_logo.png';
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineYoutube,
    AiOutlineLinkedin} from 'react-icons/ai';

function Footer(props) {
    return (
        <>
            <Base>                
                
            </Base>
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
    height: 60px;
    width: 100%;
    background-color:#041511;
    text-align:center;
    display:flex;
    align-items: center;
    justify-content:center;
    img{
        height:50px;
        padding-left:40px;
        padding-right:40px;
        @media screen and (max-width: 450px) {    
            height:100%;        
            width:90%;
        }
    }
`

const Copyright = styled.div`
    width: 100%;
    background-color:white;
    height: 30px;
    text-align:center;
`

const Base = styled.div`
  padding-top:10px;
  padding-left: 10%;
  padding-right: 10%;
  background-color:#041511;
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-template-columns: 33% 33% 33%;


`;