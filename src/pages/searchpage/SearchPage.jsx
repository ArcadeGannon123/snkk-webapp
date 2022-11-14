import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from  '../../components/searchcomponents/SearchBar';
import MultipleSelectCheckmarks from '../../components/searchcomponents/MultipleSelectCheckmarks';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './SearchPage.css'
import Button from '@mui/material/Button';

function SearchPage(props) {
    
    const [selectedmedia, setSelectedmedia] = React.useState([]);
    const [selectedbias, setSelectedbias] = React.useState([]);
    const [selectedjour, setSelectedjour] = React.useState([]);

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
                        <SearchBar />
                    </div>
                    <div className="subtitle-bar" style={{padding:0,margin:'30px 0 0',fontSize:'1.2rem'}}>
                        <FilterAltIcon fontSize='small' />
                        Filtros
                    </div>
                    <div className="search-options">                
                        <MultipleSelectCheckmarks label='Sesgos' options={bias} selection={selectedbias} setSelection={setSelectedbias}/>
                        <MultipleSelectCheckmarks label='Medios de comunicación' options={media} selection={selectedmedia} setSelection={setSelectedmedia}/>
                        <MultipleSelectCheckmarks label='Periodistas' options={periodistas} selection={selectedjour} setSelection={setSelectedjour}/>
                    </div>
                    <div className="search-actions">
                        <Button variant='outlined' size="medium" startIcon={<SearchIcon/>}>Buscar</Button>
                    </div>

                </div>
            </div>            
        </>
    );
}

export default SearchPage;

const media = [
    'La cuarta',
    'La tercera',
    'El mercurio'
]
const bias = [
    'Izquierda Derecha',
    'Progresista conservador',
    'sensacionalistmo'
]
const periodistas = [
    'juanito',
    'marcela cabezas',
    'merluciano'
]