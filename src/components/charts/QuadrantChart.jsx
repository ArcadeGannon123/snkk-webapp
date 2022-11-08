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
    elements:{
      point:{
        pointStyle: medialogos
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
        <div style={{color:'#284b63c7'}}>
        <div style={{textAlign:'center'}}>{ylabels[1]}</div>
        <div style={{display:'flex'}}>
          <div style={{textAlign:'center',textOrientation: 'mixed',writingMode: 'vertical-rl'}}>{xlabels[0]}</div>
          <div style={{flexGrow:'1'}}>
            <Scatter 
              options={options} 
              data={data} 
            />
          </div>
          <div style={{textAlign:'center',textOrientation: 'mixed',writingMode: 'vertical-rl'}}>{xlabels[1]}</div>
        </div>
        <div style={{textAlign:'center'}}>{ylabels[0]}</div>
        </div>
      )}  
    </>    
  );
}