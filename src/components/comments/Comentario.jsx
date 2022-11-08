import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Likes from './Likes';

function Comentario({datos}) {
    return (
        <CommentsWrapper>
            <div className="comment-user-icon">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <div className="comment-body">
                <div className="comment-username">
                    {datos.usuario} - {datos.fecha}
                </div>
                <div className="comment-text">
                    {datos.comentario}
                </div>
                <div className="likes">
                    <Likes tipo={true} cantidad={datos.likes[0]}/><Likes tipo={false} cantidad={datos.likes[1]}/>
                </div>
            </div>
        </CommentsWrapper>
    );
}

export default Comentario;

const CommentsWrapper = styled.div`

min-height: 10vh;
margin: 20px 10px ;
display: grid;
grid-template-columns: auto 9fr;
gap:10px;

.comment-body{
    display:flex;
    flex-direction:column;
    gap:5px;
}

.icon{
    display:grid;
    justify-content:center;
    margin: 10px;
}
.likes{
    display:flex;
    gap:5px;
}

`