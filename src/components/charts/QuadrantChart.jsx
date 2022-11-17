import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function QuadrantChart({medios,selectedbias,xlabels,ylabels}) {

  const [medialogos, setMediaLogos] = React.useState([]);

  const options = {
    responsive: true,
    elements:{
      point:{
        pointStyle: medialogos,
        radius:10
      }
    },
    scales: {
      x:{
        max:1.0,
        min:-1.0
      },
      y: {        
        max:1.0,
        min:-1.0
      },
    }
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
        img.src = `https://logo.clearbit.com/${media}`;
        logos.push(img);
    })
    setMediaLogos(logos);
  }, [medios]);


  return (
    <>    
      {medialogos !== 0 && (
        <div style={{color:'white'}}>
        <div style={{textAlign:'center',fontSize:'1.2rem',backgroundColor:'#284b6397'}}>{ylabels[1]}</div>
        <div style={{display:'flex'}}>
          <div style={{textAlign:'center',textOrientation: 'mixed',writingMode: 'vertical-rl',fontSize:'1.2rem',backgroundColor:'#284b6397'}}>{xlabels[0]}</div>
          <div style={{flexGrow:'1'}}>
            <Scatter 
              options={options} 
              data={data} 
              plugins= {[canvasBackgroundColor]}
            />
          </div>
          <div style={{textAlign:'center',textOrientation: 'mixed',writingMode: 'vertical-rl',fontSize:'1.2rem',backgroundColor:'#284b6397'}}>{xlabels[1]}</div>
        </div>
        <div style={{textAlign:'center',fontSize:'1.2rem',backgroundColor:'#284b6397'}}>{ylabels[0]}</div>
        </div>
      )}  
    </>    
  );
}