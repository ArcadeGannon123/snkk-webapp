import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextRating from '../components/Rating';
import Cookies from 'universal-cookie';

const data={
  "id": "633fab77c861d648b77693ef",
  "url": "https://www.emol.com/noticias/Nacional/2022/06/21/1064706/liberan-chileno-secuestrado-en-haiti.html",
  "title": "Liberan a misionero chileno secuestrado en Haití: Está en buen estado de salud y junto a familiares",
  "urlToImage": "https://static.emol.cl/emol50/Fotos/2022/06/21/file_20220621164007.jpg",
  "published_date": "2022-01-21T03:00:00",
  "fechaAnalisis": "2022-10-07T04:30:47.479",
  "cantidadSesgosReportados": 0,
  "reportesFalsedad": 0,
  "numeroReportes": 0,
  "medio": null,
  "sesgoConservadorProgresista": {
    "conservador": 0.1871309112115986,
    "liberal": 0.7449884192131123,
    "neutral": 0.06788066957528913
  },
  "sesgoIzquierdaDerecha": {
    "extremaIzquierda": 0.2,
    "izquierda": 0.1,
    "neutral": 0.05,
    "derecha": 0.35,
    "extremaDerecha": 0.3
  },
  "sesgoLenguajeOfensivo": {
    "noOfensivo": 0.0011693576532331067,
    "ofensivo": 0.998830642346767
  },
  "sesgoSensacionalismo": {
    "noSensacionalista": 0.9995580314412656,
    "pocoSensacionalista": null,
    "sensacionalista": 0.0004419685587343249
  }
}


export default function MediaCard({data}) {

    const cookies = new Cookies();

    const handleClick = () =>{
        cookies.set('medioData',data,{path:'/'});
        window.location.href = './detalles/medio/'+data.medio.replaceAll('.','');
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://logo.clearbit.com/${data.medio}`}
        alt="media"
        sx={{objectFit:'contain'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.medio.replace('www.','')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Rating:
        </Typography>
        <TextRating rating={data.confiabilidad}/>
      </CardContent>
      <CardActions>
        <Button href={'https://'+data.medio} target="_blank" rel="noreferrer noopener"  size="small">Ir al sítio</Button>
        <Button onClick={handleClick} size="small">Detalles</Button>
      </CardActions>
    </Card>
  );
}
