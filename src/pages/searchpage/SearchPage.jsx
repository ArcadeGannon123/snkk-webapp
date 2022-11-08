import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import MultipleSelectChip from '../../components/searchcomponents/MultipleSelectChip';
import SearchBar from  '../../components/searchcomponents/SearchBar';
import MultipleSelectPlaceholder from '../../components/searchcomponents/MultipleSelectPlaceholder';

function SearchPage(props) {
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
                    <div className="subtitle-bar" style={{fontSize:'1.2rem'}}>
                        <SearchIcon fontSize='small' />
                        Avanzado
                    </div>
                    <div className="search-options">    
                        <div className="sub-text">Sesgos</div>                    
                        <MultipleSelectChip/>
                        <div className="sub-text">Medio de comunicación</div>  
                        <MultipleSelectChip/>
                        <div className="sub-text">Periodistas</div>  
                        <MultipleSelectPlaceholder/>
                    </div>

                </div>
            </div>            
        </>
    );
}

export default SearchPage;