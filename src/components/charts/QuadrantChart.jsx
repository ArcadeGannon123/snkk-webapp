import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import {Scatter} from 'react-chartjs-2';
import  biobiochile  from '../../images/medios/biobiochile.png';
import  cambio21 from '../../images/medios/cambio21.png';
import  ciperchile  from '../../images/medios/ciperchile.png';
import  cnnchile  from '../../images/medios/cnnchile.png';
import  elespectador  from '../../images/medios/elespectador.png';
import  emol  from '../../images/medios/emol.png';
import  izquierdadiario  from '../../images/medios/izquierdadiario.png';
import  lacuarta  from '../../images/medios/lacuarta.png';
import  lanacion  from '../../images/medios/lanacion.png';
import  latercera  from '../../images/medios/latercera.png';
import  meganoticias  from '../../images/medios/meganoticias.png';
import  radioagricultura  from '../../images/medios/radioagricultura.png';
import  t13  from '../../images/medios/t13.png';
import  adprensa  from '../../images/medios/adprensa.png';
import defaultlogo from '../../images/icon2.png';
import './QuadrantChart.css';

const LOGOS = {
  "www.emol.com":emol,
  "www.adprensa.cl":adprensa,
  "www.cnnchile.com":cnnchile,
  "www.ciperchile.cl":ciperchile,
  "www.t13.cl":t13,
  "www.laizquierdadiario.cl":izquierdadiario,
  "www.biobiochile.cl":biobiochile,
  "www.elespectador.com":elespectador,
  "www.latercera.com":latercera,
  "www.lacuarta.com":lacuarta,
  "www.meganoticias.cl":meganoticias,
  "www.radioagricultura.cl":radioagricultura,
  "cambio21.cl":cambio21,
  "www.lanacion.cl":lanacion
}

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function QuadrantChart({medios,selectedbias,xlabels,ylabels}) {

  const [medialogos, setMediaLogos] = React.useState([]);

  const options = {
    responsive:true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    elements:{
      point:{
        pointStyle: medialogos,
        radius:10
      }
    },
    scales: {
      x:{
        max:1.0,
        min:-1.0,
        ticks: {
          display: false
        }
      },
      y: {        
        max:1.0,
        min:-1.0,
        ticks: {
          display: false
        }
      }
    },
    
  };

  const data = {
    datasets: [
      {
        label: 'Medios',
        data: selectedbias.map ((bias)=>(
          {x:bias[0],y:bias[1]}
        )),
        backgroundColor: 'rgba(255, 99, 132, 1)',        
      },
    ],
  };

  const canvasBackgroundColor = {
    id:'canvasBackgroundColor',
    beforeDraw(chart,args,pluginOptions){
      const{ ctx,chartArea:{top,bottom,left,right,width}, scales:{x,y}}=chart;
      //rgba(255,26,104,0.2)
      bgColors(1,1,'rgba(80, 143, 211, 0.486)');
      bgColors(1,0,'rgba(40, 75, 99, 0.7)');
      bgColors(0,1,'rgba(40, 75, 99, 0.7)');
      bgColors(0,0,'rgba(80, 143, 211, 0.486)');

      function bgColors(_y,_x,_color){
        ctx.fillStyle = _color;
        ctx.fillRect(x.getPixelForValue(_x),y.getPixelForValue(_y),x.getPixelForValue(0)-x.getPixelForValue(1),y.getPixelForValue(0)-y.getPixelForValue(1))
      }

    }
  }


  React.useEffect(() => { 
    var logos = [];
    medios.map((media) => {
        const img = new Image(50,50);
        img.src = LOGOS[media] ? LOGOS[media] : defaultlogo;
        logos.push(img);
    })
    setMediaLogos(logos);
  }, [medios]);


  return (
    <>    
      {medialogos !== 0 && (
        <div className='qchart-wrapper' >
        <div style={{display:'flex', justifyContent:'center'}}><span className='y-label'>{ylabels[1]}</span></div>
        <div style={{display:'flex',height:'100%'}}>
          <div style={{display:'flex', justifyContent:'center',textOrientation: 'mixed',writingMode: 'vertical-rl'}}><span className='x-label'>{xlabels[0]}</span></div>
          <div style={{flexGrow:'1'}}>
            <Scatter 
              options={options} 
              data={data} 
              plugins= {[canvasBackgroundColor]}
            />
          </div>
          <div style={{display:'flex', justifyContent:'center',textOrientation: 'mixed',writingMode: 'vertical-rl'}}><span className='x-label'>{xlabels[1]}</span></div>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}><span className='y-label'>{ylabels[0]}</span></div>
        </div>
      )}  
    </>    
  );
}