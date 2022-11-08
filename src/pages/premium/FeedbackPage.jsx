import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ClearIcon from '@mui/icons-material/Clear';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import FeedbackReport from '../../components/analysiscomponents/FeedbackReport';

function FeedbackPage(props) {
    
    const [text, setText] = React.useState('');   
    const onChangeHandlerText= event => setText(event.target.value);

    const handleClear = () => {
        setText('');
    };
    const handleSend = () => {
        setText('');
    };

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
                        Escribe el texto que quieras y recibiras tu análisis de sesgo:
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
                    <FeedbackReport />
                </div>
                
            </div>
        </>
    );
}

export default FeedbackPage;