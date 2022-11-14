import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';

function OpinionsPageCreation(props) {

    const [text, setText] = React.useState('');   
    const onChangeHandlerText= event => setText(event.target.value);

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
                    <TextField id="outlined-basic" label="Título" variant="outlined" sx={{width:'100%'}}/>
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
                    <TextField id="outlined-basic" label="nickname" variant="outlined" />
                    <div className="form-actions">
                        <Stack direction="row" spacing={2}>
                            <Button component={Link} to="/opiniones" variant="outlined" startIcon={<CloseIcon />}>
                                Cancelar
                            </Button>
                            <Button component={Link} to="/opiniones" variant="contained" endIcon={<SendIcon />}>
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
