import React, {useState, useContext} from 'react';
import styled from "styled-components";
import logo from '../images/blankpointlogo.ico';
import { Puff } from 'react-loading-icons';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../components/UserContext';
import {encode as base64_encode} from 'base-64';
import 'aos/dist/aos.css';
//import { useForm } from 'react-hook-form';

function LoginPage(props) {

    const {token,setToken} = useContext(UserContext)
    const {point,setPoint} = useContext(UserContext);
    const {user,setUser} = useContext(UserContext);
    //const { register, errors, handleSubmit } = useForm();
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(0)

    const [datos,setDatos] = useState({
        correo:"",
        pass:""
    })

    const handleInputChange = (event) =>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }

    const enviarDatos = async (event) =>{
        event.preventDefault();
        if (datos.correo ==='' || datos.pass ===''){
            setError(true)
        }else{
            setSuccess(1)   
            const code = base64_encode(datos.correo+":"+datos.pass);
            const url='https://api-news-feria-2022.herokuapp.com/login';
            await axios.post(url, {}, {
                headers: {
                    'Authorization': `Basic ${code}`
                },
            }).then(res => {
                console.log(res)
                setToken(res.data.token)
                setUser(res.data.nombre)
                setPoint(res.data.puntuacionUsuario)
                setSuccess(2)
            
            }).catch(err => {
                console.log(err)
                setSuccess(3)
            })
            .finally(() => {

                setError(false)
            });
            
            
        }
        
    }


    return (
        <Base>
            <LoginContainer data-aos="zoom-in" data-aos-delay="100">
                
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
                        Iniciar sesión
                    </div>
                    <form onSubmit={enviarDatos}>
                        <div className="form-group">
                            <label>E-mail:* </label>
                            <input type="email" name="correo" id="correo" className='form-control' placeholder='E-mail' onChange={handleInputChange}
                                
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:* </label>
                            <input type="password" name="pass" id="pass" className='form-control' placeholder='contraseña' onChange={handleInputChange}
                                
                            />
                        </div>
                        {error ? <span>Faltan campos por rellenar</span> : <></>}
                        {success === 0 ? 
                        <div  className="button-container">
                            <button type="submit">Iniciar sesión</button>
                        </div> :
                        success === 1 ?
                        <LoadingIcon><Puff stroke='#669495' /></LoadingIcon>
                        : 
                        success === 2 ?
                        <div  className="button-container">
                            <div className="success">
                                Sesión iniciada
                            </div>
                            <NavLink to='/'>
                                <button style={{backgroundColor:'#b1ffa7', border:'1px solid #00000049'}}>ir al menu principal</button>
                            </NavLink>
                        </div> 
                        :   
                        <div  className="button-container">
                            <div className="failed">
                                Usuario o contraseña incorrectos
                            </div>
                            <button type="submit">Iniciar sesión</button>
                        </div>               
                    
                    
                        }
                        

                    </form>
                </div>   
                <Bottom>
                    <div className="text">
                        ¿No tienes cuenta? <NavLink to='/register' >Registrate</NavLink>
                    </div>
                </Bottom>
            </LoginContainer>
         
        </Base>
    );
}

export default LoginPage;

const LoadingIcon = styled.div`
    margin: 30px 0;
    display:flex;
    justify-content:center;
`

const Bottom = styled.div`
    display:flex;
    justify-content:center;
`

const LoginContainer = styled.div`
    border-radius: 10px;
    border: 10px solid linear-gradient(90deg, rgba(102,148,149,1) 0%, rgba(158,239,241,1) 50%, rgba(102,148,149,1) 100%);
    margin: auto;
    background: linear-gradient(310deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 100%);
    width:30%;
    height:70%;
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
    @media screen and (max-height: 630px) {
        
        height:95%;
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
            text-align:center;
            font-size: 20px;
            margin-bottom:20px;
        }
        .form-group{
            margin: 10px 0;
            display:grid;
            grid-template-columns:100px auto;
            align-items:center;

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