import React from 'react';
import styled from 'styled-components';
import Comentario from './Comentario';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import UserAvatar from '../user/UserAvatar';
import Cookies from 'universal-cookie';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const comentarios = 
[
{
    usuario:'xXx_juanito69666_xXx',
    fecha: 'hoy',
    comentario:'asdkamskldmasldkmasldkmasldkasdasd asdaskfsdlkfsdf',
    likes:[12,21]
},
{
    usuario:'xXx_juanito69666_xXx',
    fecha: 'hoy',
    comentario:'asdkamskldmasldkmasldkmasldkasdasd asdaskfsdlkfsdf',
    likes:[12,21]
},
{
    usuario:'xXx_juanito69666_xXx',
    fecha: 'hoy',
    comentario:'asdkamskldmasldkmasldkmasldkasdasd asdaskfsdlkfsdf',
    likes:[12,21]
},
{
    usuario:'xXx_juanito69666_xXx',
    fecha: 'hoy',
    comentario:'asdkamskldmasldkmasldkmasldkasdasd asdaskfsdlkfsdf',
    likes:[12,21]
}
]

function Comentarios(props) {
    const cookies = new Cookies();
    return (
        <CommentsContainer>
            {cookies.get('userData') ?           
            <div className="user-comment">
                <div className="user-text">
                    <div className="user-avatar">
                        <UserAvatar/>
                    </div>
                    <div className="text-area">
                        <TextField
                            id="standard-multiline-static"
                            label="Agregue un comentario..."
                            multiline
                            rows={2}
                            variant="standard"
                            style={{width:'50%'}}
                        />                                            
                        <CardActions style={{paddingLeft:0}}>
                            <Button size="small">Cancelar</Button>
                            <Button size="small">Comentar</Button>
                        </CardActions>
                    </div>  
                </div>
            </div>
            :<></>}
            {comentarios.map((comentario) => (
                <Comentario datos = {comentario} />
            ))}
        </CommentsContainer>
    );
}

export default Comentarios;

const CommentsContainer = styled.div`

min-height: 50vh;
background-color: white;
padding: 10px 0;
.user-comment{
    min-height: 10vh;
    margin: 0 10px 20px 10px;

}
.user-text{    
    display: grid;
    grid-template-columns: auto 9fr;
    gap:10px;
}
.user-avatar{
    display:grid;
    align-items:center;
}

`