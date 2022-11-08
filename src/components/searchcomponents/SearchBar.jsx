import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

function SearchBar(props) {
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
          />
      </FormControl>
    );
}

export default SearchBar;

