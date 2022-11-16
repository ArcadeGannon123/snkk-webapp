import React from 'react';
import Comentario from './Comentario';
import Cookies from 'universal-cookie';
import './Comentarios.css';
import axios from 'axios';
import Response from './Response';
import Divider from '@mui/material/Divider';


function Comentarios({urlNoticia}) {
    const cookies = new Cookies();

    const [comentarios,setComentarios] = React.useState(null);

    const getComments = async () =>{
        const url = 'https://api-news-feria-2022.herokuapp.com/comentarios/obtener';
        const body = {"url":urlNoticia};
        await axios.post(url,body)
        .then( res =>{
            setComentarios(res.data)
        })
        .catch(err => console.log(err))
    }



    React.useEffect(() => {  
        getComments()
    }, []);



    return (
        <div className='comments-container'>
            {cookies.get('userData') && (<>  
            <Response getComments={getComments} urlNoticia={urlNoticia}/>          
            </>)}
            {comentarios && (
            comentarios.map((comentario,i) => (<div key={i}>
                <Comentario getComments={getComments} urlNoticia={urlNoticia}  datos = {comentario} />                
                <Divider variant="inset" />
            </div>)))}
        </div>
    );
}

export default Comentarios;

