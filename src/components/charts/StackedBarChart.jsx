import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const backColor = {
  'izder':['#083e77ab','#f4d35eab','#f95738ab'],  
  'copr':['#f72585','#ffb3c6','#3a0ca3'], 
  'libe':['#00afb9','#fdfcdc','#80b918'],
  'sent':['#9e2a2b','#efd3d7','#d9ed92'], 
  'sens':['#f8ecbe','#970a81'],
  'gene':['#0085cc','#fffbb0','#fb90f1'],        
  'ofen':['#c0c0c0','#403d39'],
}

export function StackedBarChart({title,labels,bias,color='izder'}) {

  

const options = {
  plugins: {
    title: {
      display: true,
      text: title,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      max:1.0,
    },
  },
};

const _labels=bias[0].map((s,i)=>(i.toString()));

const datasets = labels.map((label,i) => (
  {
    label: label,
    data: bias[i],
    backgroundColor: backColor[color][i],
  }
));

const data = {
  labels:_labels,
  datasets: datasets,
};


  return <Bar options={options} data={data} />;
}