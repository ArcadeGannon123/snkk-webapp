import React from 'react';
import logo from '../images/blankpointlogo.ico';
import styled from 'styled-components';
import {
    AiFillCloseCircle
  } from "react-icons/ai";
import {NavLink} from 'react-router-dom';

function Profile(props) {
    return (
        <Perfil>
            <div className="card">
                <NavLink className="exit" to='/noticias'>
                    <AiFillCloseCircle/>
                </NavLink>
                <div className="profile-picture">
                    <img src={logo} alt=''/>
                </div>
                <div className="data">
                    <div className="text username">
                        UserName
                    </div>
                    <div className="text puntaje">
                        Puntaje: 1000
                    </div>
                </div>
            </div>
        </Perfil>
    );
}

export default Profile;


const Perfil = styled.div`
display:flex;
align-items:center;
justify-content:center;
background: linear-gradient(310deg, rgba(4,21,17,1) 0%, rgba(6,56,57,1) 50%, rgba(4,21,17,1) 100%);
height:100vh;
.data{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .text{
        font-size: 2em;
        color: #669495;
    }

}
.card{    
    background: linear-gradient(310deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 100%);
    width:50vw;
    height:50vh;
    display:grid;
    grid-template-columns: 30% auto;
    padding: 0 30px;
    .exit{
        position:absolute;
        font-size: 2em;
        top:5px;
        right:10px;
        color:black;
    }
    .profile-picture{
        display:flex;
        justify-content:center;
        align-items:center;
        padding:0 10px;
        img{
            width:90%;


        }
    }

}

`


const Base = styled.div`


`