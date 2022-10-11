import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextRating from '../components/Rating';
import StackedBar from '../components/StackedBar';
import Cookies from 'universal-cookie';

export default function MediaCard({data}) {

    const cookies = new Cookies();

    const handleClick = () =>{
        cookies.set('data',data,{path:'/'});
        window.location.href = './detalles/medio/'+data.medio.name;
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://logo.clearbit.com/${data.medio.nombre}`}
        alt="media"
        sx={{backgroundColor:'#353535'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.medio.nombre.replace('www.','')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Rating:
        </Typography>
        <TextRating/>
        <Typography variant="body2" color="text.secondary">
            sesgo:
        </Typography>
        <StackedBar data={data.sesgoIzquierdaDerecha} />
      </CardContent>
      <CardActions>
        <Button href={data.url} target="_blank" rel="noreferrer noopener"  size="small">Ir al sítio</Button>
        <Button onClick={handleClick} size="small">Detalles</Button>
      </CardActions>
    </Card>
  );
}
