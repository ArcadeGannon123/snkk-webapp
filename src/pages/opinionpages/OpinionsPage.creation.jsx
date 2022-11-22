import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

function OpinionsPageCreation(props) {
    
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [text, setText] = React.useState('');   
    const [titulo, setTitulo] = React.useState('');   
    const [seudonimo, setSeudonimo] = React.useState(''); 
    const onChangeHandlerText= event => setText(event.target.value);
    const onChangeHandlerTitulo= event => setTitulo(event.target.value);
    const onChangeHandlerseudonimo= event => setSeudonimo(event.target.value);

    const postOpinion = async () => {    
        const url = 'https://api-news-feria-2022.herokuapp.com/opinion'; 
        const body = {texto:text,titulo:titulo,pseudonimo:seudonimo !== ''?seudonimo:'Anónimo'}       
        const token = cookies.get('userData').token;

        await axios.post(url,body,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                              
            console.log(res.data)        
        })
        .catch(err => {
            console.log(err)
        })
    }
    const goBack = () => {
        navigate('/opiniones');
      };

    const handleSend = () =>{
        if (text!== '' && titulo!==''){
            postOpinion()
            goBack()
        }
    }


    return (
        <>
            <Navbar />        
            <div className='front-page' >
                <div className="return-bar" style={{fontSize:'1.3rem'}}>
                    <Link style={{textDecoration: 'none'}} to='/opiniones'>
                        <ArrowBackIcon/>
                        Volver 
                    </Link>                                                          
                </div> 
                <div className="body-container">
                    <div className="sub-text" style={{marginBottom:'10px'}}>
                        Ingrese un título para su opinión:
                    </div>
                    <TextField id="outlined-basic" label="Título" variant="outlined" sx={{width:'100%'}} onChange={onChangeHandlerTitulo}/>
                    <div className="sub-text" style={{margin:'10px 0'}}>
                        Escriba lo que piensa:
                    </div>
                    <TextareaAutosize   
                        className='text-area-space'                         
                        aria-label="minimum height"
                        minRows={10}
                        placeholder="Ingrese algún texto"
                        style={{ width: '100%'}}
                        onChange={onChangeHandlerText}
                        value={text}
                    />
                    <div className="sub-text" style={{margin:'10px 0'}}>
                        seudónimo (opcional):
                    </div>
                    <TextField id="outlined-basic" label="nickname" variant="outlined" onChange={onChangeHandlerseudonimo}/>
                    <div className="form-actions">
                        <Stack direction="row" spacing={2}>
                            <Button component={Link} to="/opiniones" variant="outlined" startIcon={<CloseIcon />}>
                                Cancelar
                            </Button>
                            <Button onClick={handleSend} variant="contained" endIcon={<SendIcon />}>
                                Enviar
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OpinionsPageCreation;
