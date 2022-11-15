import React from 'react';
import Avatar from '@mui/material/Avatar';
import './Comentario.css';

function Rcomentario({datos}) {


    return (
        <div className='comment-wrapper'>
            <div className="comment-user-icon">
                <Avatar alt={datos.nombre} src="/static/images/avatar/1.jpg" />
            </div>
            <div className="comment-body">
                <div className="comment-username">
                    <span id='c-username'>{datos.nombre}</span> - <span id='c-date'>{datos.fecha.split('T')[0]}</span>
                </div>
                <div className="comment-text">
                    {datos.texto}
                </div>
            </div>
        </div>
    );
}

export default Rcomentario;
