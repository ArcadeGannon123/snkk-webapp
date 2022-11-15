import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList({data}) {
  return (     
        <List sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto', maxHeight: '300px'}}>
        {data.map((usuario) => ( 
            <>  
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt={usuario.nombreUsuario} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary={usuario.nombreUsuario}
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {usuario.descripcion}
                    </Typography>
                    {'  |  '+usuario.fecha.split('T')[0]}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>))}
    </List>
  );
}
