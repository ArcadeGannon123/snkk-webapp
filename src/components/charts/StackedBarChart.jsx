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

const backColor = [
  'rgb(255, 99, 132)',
  'rgb(75, 192, 192)',
  'rgb(53, 162, 235)'
]

export function StackedBarChart({title,labels,bias}) {

  

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
    backgroundColor: backColor[i],
  }
));

const data = {
  labels:_labels,
  datasets: datasets,
};


  return <Bar options={options} data={data} />;
}