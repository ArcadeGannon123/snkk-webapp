import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

function SearchBar({setInput}) {
    
    const onChangeHandlerInput= event => setInput(event.target.value);
    return (
      <FormControl variant="standard" sx={{width:'100%'}}>
          <InputLabel htmlFor="input-with-icon-adornment">
              Titulo de la noticia
          </InputLabel>
          <Input
              id="input-with-icon-adornment"
              startAdornment={
                  <InputAdornment position="start">
                      <SearchIcon />
                  </InputAdornment>
              }
              onChange={onChangeHandlerInput}
          />
      </FormControl>
    );
}

export default SearchBar;

