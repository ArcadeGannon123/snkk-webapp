import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Comentario.css';
import Response from './Response';
import Divider from '@mui/material/Divider';
import Rcomentario from './Rcomentario';
import Cookies from 'universal-cookie';

function Comentario({datos,getComments,urlNoticia}) {
    const cookies = new Cookies();
    
    const [vercomentarios,setVercomentarios] = React.useState(false);
    const [responder,setResponder] = React.useState(false);

    const handleVerRespuestas = () => {
        if (vercomentarios){
            setVercomentarios(false)
            setResponder(false)
        }else{
            setVercomentarios(true)
        }
    }
    const handleResponder = () =>{
        setResponder(true)
        setVercomentarios(true)
    }


    return (
        <div className='comment-wrapper'>
            <div className="comment-user-icon">
                <Avatar alt={datos.comentario.nombre} src="/static/images/avatar/1.jpg" />
            </div>
            <div className="comment-body">
                <div className="comment-username">
                    <span id='c-username'>{datos.comentario.nombre}</span> - <span id='c-date'>{datos.comentario.fecha.split('T')[0]}</span>
                </div>
                <div className="comment-text">
                    {datos.comentario.texto}
                </div>
                <div className="comment-actions">                    
                    {datos.respuestas.length !==0 && (<Button onClick={handleVerRespuestas} sx={{fontSize:'0.7rem'}} startIcon={vercomentarios ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>} >{vercomentarios ? 'Ocultar respuestas':'Ver respuestas'}</Button>)}
                    {cookies.get('userData') && (<Button onClick={handleResponder} sx={{fontSize:'0.7rem'}} >responder</Button>)}
                </div>
                {responder && (<Response getComments={getComments} urlNoticia={urlNoticia} idParent={datos.comentario.idComentario} setCancel={setResponder}/>)}
                <div className="comment-response">
                {vercomentarios && (
                datos.respuestas.map((comentario) => (<>
                    <Rcomentario datos = {comentario} />                
                    <Divider variant="inset" />
                </>)))}
                </div>
            </div>
        </div>
    );
}

export default Comentario;
