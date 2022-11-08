import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Cookies from 'universal-cookie';

export default function UserAvatar() {

    const cookies = new Cookies();
  return (
    <>
      <Avatar alt={cookies.get('userData').nombre} src="/static/images/avatar/1.jpg" />
    </>
  );
}