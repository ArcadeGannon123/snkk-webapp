import React, { useContext} from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function User() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Base>
            <div className="user-container">              
                <Avatar        
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    alt="Remy Sharp" src="/static/images/avatar/1.jpg" 
                    sx={{
                        cursor: 'pointer',
                        '&hover':{
                            
                        }
                    }}
                />
                <div className="username">
                    USERNAME
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
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
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