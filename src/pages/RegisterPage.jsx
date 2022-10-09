import React, {useState} from 'react';
import styled from "styled-components";
import logo from '../images/blankpointlogo.ico';
import { Puff } from 'react-loading-icons';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import 'aos/dist/aos.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import { useForm } from 'react-hook-form';

function RegisterPage(props) {

    //const { register, errors, handleSubmit } = useForm();
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(0)

    const [datos,setDatos] = useState({
        correo:"",
        pass:"",
        nombre:""
    })

    const handleInputChange = (event) =>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }

    const enviarDatos = async (event) =>{
        event.preventDefault();
        if (datos.correo ==='' || datos.pass ==='' || datos.nombre ==='' ){
            setError(true)
        }else{
            setSuccess(1)
            const url='https://api-news-feria-2022.herokuapp.com/registro';
            await axios.post(url,datos).then(res => {
                if (res.data){
                    setSuccess(2)
                }else{
                    setSuccess(3)
                }           
            }).catch(err => console.log(err))
            .finally(() => {                
                setError(false)
            });
            
        }
        
    }


    return (
        <Base>
            <RegisterContainer data-aos="zoom-in" data-aos-delay="100">
                <NavLink className="logo-link" to='/'>
                    <div className="logo">
                        
                        <img src={logo} alt=''/>
                            
                        <div className="title">
                            Bienvenido a BlankPoint
                        </div>
                    </div>
                </NavLink>
                <div className="form-container">
                    <div className="text">
                        Ingrese sus datos: 
                    </div>
                    <form onSubmit={enviarDatos}>
                        <Box
                            sx={{
                                maxWidth: '100%',
                            }}
                            >
                            <TextField sx={{width:'100%'}} label="E-mail" name="correo" id="correo"  type="email" onChange={handleInputChange}/>
                            
                        </Box>
                        <Box
                            sx={{
                                maxWidth: '100%',
                            }}
                            > 
                            <TextField sx={{width:'100%'}} label="Contraseña" type="password" name="pass" id="pass" onChange={handleInputChange}/> 
                        </Box>                       
                        <Box
                            sx={{
                                maxWidth: '100%',
                            }}
                            > 
                            <TextField sx={{width:'100%'}} label="Nickname" type="text" name="nombre" id="nombre" onChange={handleInputChange}/> 
                        </Box>
                        {error ? <span>Faltan campos por rellenar</span> : <></>}
                        {success === 0 ? 
                        <div  className="button-container">
                            <button type="submit">Registrar</button>
                        </div> :
                        success === 1 ?
                        <LoadingIcon><Puff stroke='#669495' /></LoadingIcon>
                        : 
                        success === 2 ?
                        <div  className="button-container">
                            <div className="success">
                                Usuario registrado exitosamente
                            </div>
                            <NavLink to='/login'>
                                <button style={{backgroundColor:'#b1ffa7', border:'1px solid #00000049'}}>Iniciar sesión</button>
                            </NavLink>
                        </div>  
                        :    
                        <div  className="button-container">
                            <div className="failed">
                                Usuario ya existente
                            </div>
                            <button type="submit">Registrar</button>
                        </div>              
                    
                    
                        }
                        

                    </form>
                </div>   
                <Bottom>
                    <div className="text">
                        ¿Ya tienes una cuenta? <NavLink to='/login' >inicia sesión.</NavLink>
                    </div>
                </Bottom>
            </RegisterContainer>
         
        </Base>
    );
}

export default RegisterPage;

const LoadingIcon = styled.div`
    margin: 30px 0;
    display:flex;
    justify-content:center;
`

const Bottom = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:1rem;
`

const RegisterContainer = styled.div`
    border-radius: 10px;
    border: 10px solid linear-gradient(90deg, rgba(102,148,149,1) 0%, rgba(158,239,241,1) 50%, rgba(102,148,149,1) 100%);
    margin: auto;
    background-color:white;
    width:30%;
    border: 2px solid #669495;
    @media screen and (max-width: 1300px) {
        width:50%;
    }
    @media screen and (max-width: 720px) {
        width:80%;
    }
    @media screen and (max-width: 420px) {
        width:95%;
    }
    .logo-link{
        text-decoration:none;
        color:black;
    }
    .logo{
        display:flex;
        flex-direction:column;
        align-items: center;        
        img{
            width:20%;
        }
        margin: 30px 0;
    }
    .form-container{
        padding: 0 30px ;
        .text{
            padding: 10px;
            font-size:1.3rem;
            font-weight:300;
            color:#284b63c7;
            gap:10px;
            margin-bottom: 10px;
        }
        .form-group{
            margin: 10px 0;
            display:grid;
            grid-template-columns:100px auto;
            align-items:center;

        }
        form{
            display: grid;
            gap:1rem;
        }
        form .button-container{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            margin: 30px 0;
            .success{
                color: green;
            }
            .failed{
                color: red;
            }
            button{
                padding: 10px 20px;
                border-radius: 10px;
                border: 1px solid;
                &:hover{
                    background: #d9e5e6;
                    
                }
            }

        }
        span{
            color:red;
        }
        
    }
`

const Base = styled.div`
    display:flex;
    align-items:center;
    background: linear-gradient(310deg, rgba(4,21,17,1) 0%, rgba(6,56,57,1) 50%, rgba(4,21,17,1) 100%);
    height: 100vh;
`