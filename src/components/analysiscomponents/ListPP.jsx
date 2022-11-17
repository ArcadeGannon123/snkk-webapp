import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupsIcon from '@mui/icons-material/Groups';

export default function AlignItemsListPP({data}) {
  return (     
        <List sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto', maxHeight: '300px'}}>
        {data.map((partido,i) => (<div key={i}>  
            <ListItem>
                  <ListItemIcon>
                    <GroupsIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={partido}
                  />
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>))}
    </List>
  );
}
