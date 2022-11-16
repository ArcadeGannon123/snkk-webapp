import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from  '../../components/searchcomponents/SearchBar';
import MultipleSelectCheckmarks from '../../components/searchcomponents/MultipleSelectCheckmarks';
import MultipleSelectCheckmarksGroup from '../../components/searchcomponents/MultipleSelectCheckmarksGroup';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './SearchPage.css'
import Button from '@mui/material/Button';
import axios from 'axios';
import RowNews from '../../components/NewsComponents/RowNews';
import LoadingArea from '../../components/UtilsComponents/LoadingArea';

function SearchPage(props) {

    const [title, setTitle] = React.useState('');
    const [selectedmedia, setSelectedmedia] = React.useState([]);
    const [selectedbias, setSelectedbias] = React.useState([]);
    const [selectedjour, setSelectedjour] = React.useState([]);
    const [waiting, setWaiting] = React.useState(false);  

    const [medios, setMedios] = React.useState([]);
    const [periodistas, setPeriodistas] = React.useState([]);

    const [respuesta,setRespuesta] = React.useState(null);

    const getMedios = async () => {    
        const url = 'https://api-news-feria-2022.herokuapp.com/medio/lista-nombres';        
        
        await axios.get(url)
        .then(res => {                               
            setMedios(res.data)        
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getPeriodista = async () => {    
        const url = 'https://api-news-feria-2022.herokuapp.com/periodista/lista-nombres';    
        await axios.get(url)
        .then(res => {                               
            setPeriodistas(res.data)
        
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getSearch = async () => {    
        const url = 'https://api-news-feria-2022.herokuapp.com/noticia/buscador-filtros';  
        const body = {titulo:title,sesgos:selectedbias,medios:selectedmedia,periodistas:selectedjour}      
        
        await axios.post(url,body)
        .then(res => {                            
            setRespuesta(res.data)    
            setWaiting(false);    
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleSearch = () => {        
        setWaiting(true);
        getSearch();
    }

    React.useEffect(() => {
        getMedios();
        getPeriodista();
    }, []);

    return (
        <>   
            <Navbar />                
            <div className='front-page'>
                <div className="main-title" style={{marginBottom:0}}>
                    <span>
                        <SearchIcon fontSize='large' />
                        Búsqueda
                    </span>
                </div>    
                <div className="body-container">
                    <div className="search-input">
                        <SearchBar setInput={setTitle} />
                    </div>
                    <div className="subtitle-bar" style={{padding:0,margin:'30px 0 0',fontSize:'1.2rem',boxShadow:'none'}}>
                        <FilterAltIcon fontSize='small' />
                        Filtros
                    </div>
                    <div className="search-options">                
                        <MultipleSelectCheckmarksGroup label='Sesgos' selection={selectedbias} setSelection={setSelectedbias}/>
                        <MultipleSelectCheckmarks label='Medios de comunicación' options={medios} selection={selectedmedia} setSelection={setSelectedmedia}/>
                        <MultipleSelectCheckmarks label='Periodistas' options={periodistas} selection={selectedjour} setSelection={setSelectedjour}/>
                    </div>
                    <div className="search-actions">
                        <Button onClick={handleSearch} variant='outlined' size="medium" startIcon={<SearchIcon/>}>Buscar</Button>
                    </div>
                    <div className="search-results">
                        
                        {waiting ? 
                        <div style={{marginTop:'60px'}}>
                            <LoadingArea/>
                        </div>
                        :
                        respuesta ?
                        respuesta.map((news,i) =>(
                            <div key={i} >
                                <RowNews data={news}/>
                                <hr/>
                            </div>
                        ))
                        :
                        <></>
                        }
                    </div>

                </div>
            </div>            
        </>
    );
}

export default SearchPage;
