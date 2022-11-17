import React, {useState, useEffect, useContext} from 'react';
import { UserContext }                          from '../../components/UserContext';
import Navbar                                   from '../../components/Navbar2/Navbar';
import FeedIcon                                 from '@mui/icons-material/Feed';
import styled                                   from 'styled-components';
import axios                                    from 'axios';
import Box                                      from '@mui/material/Box';
import Button                                   from '@mui/material/Button';
import InputLabel                               from '@mui/material/InputLabel';
import MenuItem                                 from '@mui/material/MenuItem';
import FormControl                              from '@mui/material/FormControl';
import Select                                   from '@mui/material/Select';
import Checkbox                                 from '@mui/material/Checkbox';
import OutlinedInput                            from '@mui/material/OutlinedInput';
import ListItemText                             from '@mui/material/ListItemText';
import DeleteIcon                               from '@mui/icons-material/Delete';
import Card                                     from '@mui/material/Card';
import CardContent                              from '@mui/material/CardContent';
import Typography                               from '@mui/material/Typography';
import CircularProgress                         from '@mui/material/CircularProgress';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const sesgos = [
    'Izquierda-Derecha',
    'Económico',
    'Progresista-Conservador',
    'De Género',
    'De Sentimiento',
    'Sensacionalista',
];



export default function SubscribeMailPage () {

    const {token, setToken}                 = useContext(UserContext);
    const [topico, setTopico]               = useState('');
    const [medio, setMedio]                 = useState('');
    const [sesgo, setSesgo]                 = useState([]);
    const [topicos, setTopicos]             = useState(null);
    const [medios, setMedios]               = useState(null);
    const [suscripciones, setSuscripciones] = useState(null);
    const [aux, setAux]                     = useState(false);

    const getTopicos = async () => {        
        const url='https://api-news-feria-2022.herokuapp.com/noticia/topicos'
        await axios.get(url)
        .then(res => {
            setTopicos(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getMedios = async () => {    
        const url ='https://api-news-feria-2022.herokuapp.com/medio/confiabilidad-medios';  
        await axios.get(url)
        .then(res => {                       
            setMedios(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getSuscripciones = async () => {
        const url ='https://api-news-feria-2022.herokuapp.com/feed/lista';
        await axios.get(url, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setSuscripciones(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const addSuscripcion = async (topico, medio, sesgos, setAux, token, setTopico, setMedio, setSesgo) => {
        const url ='https://api-news-feria-2022.herokuapp.com/feed/agregar';  
        await axios.post(url, {
            topico: topico,
            medio: medio,
            sesgos: sesgos
        }, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setAux(!aux);
            setTopico('');
            setMedio('');
            setSesgo([]);   
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deleteSuscripcion = async (id, token) => {
        const url ='https://api-news-feria-2022.herokuapp.com/feed/eliminar';  
        await axios.post(url, {
            url: id
        }, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {      
            setAux(!aux);               
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getMedios();
        getTopicos();
        getSuscripciones();
    }, [aux]);

    const handleChangeTopico = (event) => {
        setTopico(event.target.value);
    };

    const handleChangeMedio = (event) => {
        setMedio(event.target.value);
    };

    const handleChangeSesgo = (event) => {
        const {
            target: { value },
        } = event;
        setSesgo(
        // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSubscribe = (event) => {
        event.preventDefault();
        if (topico !== '' && medio !== '' && sesgo.length !== 0){
            for (let i = 0; i < sesgo.length; i++){
                
                if (sesgo[i] === 'Izquierda-Derecha'){
                    sesgo[i] = 'sesgoIzquierdaDerecha';
                }
                else if (sesgo[i] === 'Económico'){
                    sesgo[i] = 'sesgoLibertadEconomica';
                }
                else if (sesgo[i] === 'Progresista-Conservador'){
                    sesgo[i] = 'sesgoConservadorProgresista';
                }
                else if (sesgo[i] === 'De Género'){
                    sesgo[i] = 'sesgoGenero';
                }
                else if (sesgo[i] === 'De Sentimiento'){
                    sesgo[i] = 'sesgoSentimiento';
                }
                else if (sesgo[i] === 'Sensacionalista'){
                    sesgo[i] = 'sesgoSensacionalista';
                }
            }
            console.log(sesgo);
            addSuscripcion(topico, medio, sesgo, setAux, token, setTopico, setMedio, setSesgo);
        }
        else{
            console.log("faltan datos");
        }
    };

    const handleDelete = (value) => {
        deleteSuscripcion(value, token);
    }

    return (
        <>
            <Navbar/>
            <FrontPage>
                <div className="title" style={{fontSize:'1.3rem'}}>
                    <FeedIcon/>
                    Suscríbete y recíbe feed personalizados a tu correo
                </div>
                {
                    topicos !== null && medios !== null
                    ?   <div className='content'>
                            <form onSubmit={handleSubscribe} className='form'>

                                <Box sx={{
                                        maxWidth: '100%',
                                        alignSelf: 'self-end',
                                        gridColumn: "2/5",
                                        gridRow: "1",
                                    }}
                                >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Tópico</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={topico}
                                            label="Tópico"
                                            onChange={handleChangeTopico}
                                        >
                                            {
                                                topicos.map((topic) => (
                                                    <MenuItem key={topic} value={topic}>
                                                        {topic}
                                                    </MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box sx={{
                                        maxWidth: '100%',
                                        alignSelf: 'self-end',
                                        gridColumn: "2/5",
                                        gridRow: "2",
                                    }}
                                >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Medio</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={medio}
                                            label="Medio"
                                            onChange={handleChangeMedio}
                                        >
                                            {
                                                medios.map((media) => (
                                                    <MenuItem key={media.medio.replace('www.','').replace(/\.(cl|com|org)/,'')} value={media.medio}>
                                                        {media.medio.replace('www.','').replace(/\.(cl|com|org)/,'')}
                                                    </MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box sx={{
                                        maxWidth: '100%',
                                        alignSelf: 'self-end',
                                        gridColumn: "2/5",
                                        gridRow: "3",
                                    }}
                                >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-multiple-checkbox-label">Sesgos</InputLabel>
                                        <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={sesgo}
                                        onChange={handleChangeSesgo}
                                        input={<OutlinedInput label="Sesgos" />}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                        >
                                        {sesgos.map((bias) => (
                                            <MenuItem key={bias} value={bias}>
                                            <Checkbox checked={sesgo.indexOf(bias) > -1} />
                                            <ListItemText primary={bias} />
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Button type="submit" sx={{gridColumn: "3/3", gridRow: "4"}}>Suscribirse</Button>              
                            </form>
                        </div>
                    : <div style={{
                        gridRow: "2",
                        gridColumn: "4",
                        display: "grid",
                        placeContent: "center",
                    }}>
                        
                        <CircularProgress/>
                    </div>
                }
                <div className='subscriptions'>
                    <div className="title" style={{fontSize:'1.3rem'}}>
                        Suscripciones
                    </div>
                {
                    suscripciones !== null
                    ?   suscripciones.length !== 0
                    ?   <div>
                            {
                                suscripciones.map((suscrip, key) => (
                                    <Card sx={{ width: '90%', marginLeft: '50px', marginBottom: '10px' }} key={key}>
                                        <CardContent>
                                            <div style={{marginBottom: '20px'}}>
                                                <Typography gutterBottom variant="h6" component="span">
                                                    Suscripción {key+1}
                                                </Typography>
                                                <DeleteIcon sx={{marginLeft: '50px', ':hover': {color: 'red', opacity:'0.8', cursor: 'pointer'}}} onClick={(event) => handleDelete(suscrip.id)} />
                                            </div>
                                            <div style={{marginLeft: '50px'}}>
                                                <Typography variant="body2" color="text.primary" component="span">
                                                    Tópico: 
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" component="span">
                                                    {` ${suscrip.topico}`}
                                                </Typography>
                                            </div>
                                            <div style={{marginLeft: '50px'}}>
                                                <Typography variant="body2" color="text.primary" component="span">
                                                    Medio: 
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" component="span">
                                                    {` ${suscrip.medio}`}
                                                </Typography>
                                            </div>
                                            <div style={{marginLeft: '50px'}}>
                                                <Typography variant="body2" color="text.primary" component="span"  >
                                                    Sesgos: 
                                                </Typography>
                                                {suscrip.sesgos.map((bias) => (
                                                    <Typography variant="body2" color="text.secondary" component="div" key={bias} sx={{marginLeft: '30px'}} >
                                                        {` ${bias}`}
                                                    </Typography>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                            }
                        </div>
                    : <div>No tiene suscripciones aún</div>
                    :   <div style={{
                        gridRow: "3",
                        gridColumn: "4",
                        display: "grid",
                        placeContent: "center",
                    }}>
                        
                        <CircularProgress/>
                    </div>
                    }
                </div>
            </FrontPage>
        </>
    );
}

const FrontPage = styled.div`
padding-top:50px;
display: grid;
grid-template-columns: auto repeat(5, 1fr);
grid-template-rows: auto auto auto;
gap: 10px;
background-color: #f4f4f9;
height: 100%;

.title{
    padding: 10px;
    margin: 0.8rem 0;
    font-size:2rem;
    font-weight:300;
    background-color:white;
    color:#284b63c7;
    display:flex;
    align-items:center;
    gap:10px;
    grid-column: 3/6;
    grid-row: 1;
}

.content{
    grid-row: 2;
    grid-column: 3/6;
    background-color: white;
}

.form{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 80px);
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.subscriptions{
    grid-row: 3;
    grid-column: 3/6;
    background-color: white;
    margin-bottom: 10px;
}
`