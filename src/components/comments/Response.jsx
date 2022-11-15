import React from 'react';
import TextField from '@mui/material/TextField';
import UserAvatar from '../user/UserAvatar';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Divider from '@mui/material/Divider';

function Response({getComments,urlNoticia,idParent,setCancel}) {

    
    const cookies = new Cookies();
    const userData = cookies.get('userData');

    const [textcomment,setTextcomment] = React.useState('');

    const postComment = async () =>{
        const url = 'https://api-news-feria-2022.herokuapp.com/comentarios/publicar';
        const body = idParent ? {"urlNoticia":urlNoticia,"parentId":idParent,"texto":textcomment} : {"urlNoticia":urlNoticia,"texto":textcomment};
        const token = userData.token;
        console.log(body);
        await axios.post(url,body,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then( res =>{
            getComments();
            setTextcomment('');
        })
        .catch(err => console.log(err))
    }

    const onChangeHandlerTextComment = event => setTextcomment(event.target.value);

    const handlerPostComment = () =>{
        if (textcomment !== ''){
            postComment()
        }
    }
    const handlerCancel= () => {setTextcomment('');setCancel && setCancel(false)};

    return (
        <div className="user-comment">
            <div className="user-text">
                <div className="comment-user-icon">
                    <Avatar alt={userData.nombre} src="/static/images/avatar/1.jpg" />
                </div>
                <div className="text-area">
                    <div className="comment-username">
                        <span id='c-username'>{userData.nombre}</span>
                    </div>
                    <TextField
                        id="standard-multiline-static"
                        label="Agregue un comentario..."
                        multiline
                        rows={1}
                        variant="standard"
                        style={{width:'50%'}}
                        onChange={onChangeHandlerTextComment}
                        value={textcomment}
                    />                                            
                    <CardActions style={{paddingLeft:0}}>
                        <Button onClick={handlerCancel}  size="small">Cancelar</Button>
                        <Button onClick={handlerPostComment} size="small">Comentar</Button>
                    </CardActions>
                </div>  
            </div>          
            <Divider />            
        </div>
    );
}

export default Response;