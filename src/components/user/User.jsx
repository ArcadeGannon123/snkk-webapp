import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'universal-cookie';

function User() {
    const cookies = new Cookies();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleSesion = () => {
        cookies.remove('userData', { path: '/' });        
        window.location.href = './';
    };
    const handleProfile = () => {
        window.location.href = '/perfil/' + cookies.get('userData').id;
    }
    return (
        <Base>
            <div className="user-container" onClick={handleClick}>              
                <Avatar        
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    alt={cookies.get('userData').nombre} src="/static/images/avatar/1.jpg" 
                    sx={{
                        cursor: 'pointer',
                        '&hover':{
                            
                        }
                    }}
                />
                <div className="username" style={{cursor:'pointer'}}>
                    {cookies.get('userData').nombre}
                </div>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleProfile}>Perfil</MenuItem>
                <MenuItem onClick={handleSesion}>Cerrar sesión</MenuItem>
            </Menu>
        </Base>
        
    );
}

export default User;

const Base = styled.div`
display:flex;
margin: 0 20px;
.user-container{
    display:flex;
    align-items:center;

}
.username{
    color:white;
    font-size:0.9rem;
    margin: 0 0.8rem;
}
`