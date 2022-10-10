import React,{useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);




function Donut({datos,title, label}) {

    const [labels,setLabels] = useState([]);
    const [values,setValues] = useState([]);

    const data = {
        labels: labels,
        datasets: [
            {
            label: '# of Votes',
            data: values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
    };
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
            display: true,
            position: "left"
            },
            title: {
              display: true,
              text: title,
            },
        },
    };

    useEffect(() => {    
        const keys = Object.keys(datos);
        const values= [];
        keys.map((key)=> values.push(datos[key])); 
        setLabels(keys)
        setValues(values)
    }, []);

    return (
        <div style={{height:'100%',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <Doughnut options={options}  data={data}/>
        </div>
    );
}

export default Donut;