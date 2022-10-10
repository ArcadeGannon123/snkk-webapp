import React,{useState,useEffect} from 'react';
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
  




function BarChart({datos,title, label}) {

    const [labels,setLabels] = useState([]);
    const [values,setValues] = useState([]);

    const data = {
      labels,
      datasets: [
        {
          label: label,
          data: values,
          backgroundColor: '#284B637f',
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: title,
        },
      },
    };

    useEffect(() => {
      
      console.log(datos)
      const keys = Object.keys(datos);
      const values= [];
      keys.map((key)=> values.push(datos[key])); 
      setLabels(keys)
      setValues(values)
    }, []);


    return (
      <div style={{height:'100%',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',padding:'0 1rem'}}>
        <Bar options={options}  data={data}/>
      </div>
    );
}

export default BarChart;