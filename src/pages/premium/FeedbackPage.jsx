import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ClearIcon from '@mui/icons-material/Clear';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import FeedbackReport from '../../components/analysiscomponents/FeedbackReport';
import Cookies from 'universal-cookie';
import axios from 'axios';
import LoadingArea from '../../components/UtilsComponents/LoadingArea';

function FeedbackPage(props) {

    const cookies = new Cookies();

    const [text, setText] = React.useState('');  
    const [bias, setBias] = React.useState(null);  
    const [waiting, setWaiting] = React.useState(false);   

    const onChangeHandlerText= event => setText(event.target.value);

    const handleClear = () => {
        setText('');
    };
    const handleSend = () => {
        setWaiting(true);
        getBias();
    };

    const getBias = async () => {        
        const url='https://api-news-feria-2022.herokuapp.com/playground';
        const body = {text:text};
        const token = cookies.get('userData').token;

        console.log(body)

        await axios.post(url,body,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(res => {                        
            setBias(res.data);
            setWaiting(false);
        
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <Navbar />                    
            <div className='front-page'>
                <div className="main-title">
                    <span>
                        <TroubleshootIcon fontSize='large' />
                        Feedback de texto
                    </span>
                </div>
                <div className="body-container">
                    <div className="sub-text">
                        Escribe el texto que quieras y recibirás tu análisis de sesgo:
                    </div>
                    <div className="text-area-container">
                        <div className="text-area-wrapper">                        
                            <TextareaAutosize   
                                className='text-area-space'                         
                                aria-label="minimum height"
                                minRows={10}
                                placeholder="Ingrese algún texto"
                                style={{ width: '100%' }}
                                onChange={onChangeHandlerText}
                                value={text}
                            />
                            <div className="text-area-actions">
                                <div className="ta-action" onClick={handleSend}>
                                    <Fab size="small" color="primary" aria-label="edit" sx={{boxShadow:'none',zIndex:'0'}} title='Enviar'>
                                        <SendIcon/>
                                    </Fab>
                                </div>
                                <div className="ta-action" onClick={handleClear} >
                                    <Fab size="small" color="secondary" aria-label="edit" sx={{boxShadow:'none',zIndex:'0'}} title='Limpiar'>
                                        <ClearIcon/>
                                    </Fab>
                                </div>
                            </div>
                        </div>
                    </div>
                    {waiting ? 
                    <div style={{marginTop:'60px'}}>
                        <LoadingArea/>
                    </div>
                    :
                    bias ?
                    <FeedbackReport data={bias}/>
                    :
                    <></>
                    }
                </div>
                
            </div>
        </>
    );
}

export default FeedbackPage;