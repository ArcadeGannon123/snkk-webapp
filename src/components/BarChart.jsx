import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    aspectRatio:3/2,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Actividad ultimos 30 dias',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'numero de analisis',
        data: [30,42,10,0,2,16,80],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


function BarChart(props) {

    return (
        <div>
            <Bar options={options}  data={data}/>
        </div>
    );
}

export default BarChart;