import React from 'react';
import './NewsReport.css';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DashScore from '../../components/DashScore'
import AlignItemsList from '../../components/ActivityList';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import AlignItemsListPP from './ListPP';

const partidos =[
    'Unión Demócrata Independiente',
    'Renovación Nacional',
    'Partido Socialista de Chile',
    'Partido Demócrata Cristiano',
    'Unión Demócrata Independiente',
    'Renovación Nacional',
    'Partido Socialista de Chile',
    'Partido Demócrata Cristiano'
]

function NewsReport({data}) {
    return (
        <div className='news-report-container'>
            {console.log(data)}
            <div className="subtitle-bar" style={{fontSize:'1.3rem'}}>
                <SummarizeIcon/>
                Reporte                                    
            </div>  
            <div className="report-body">
                <div className="report-scores">
                    <div>
                        <DashScore data={{title:'Nº de visitas',score:data.visualizaciones}}/>
                    </div>
                    <div>
                        <DashScore data={{title:'Nº de veces analizada por usuarios',score:data.numeroAnalisis}}/>
                    </div>
                    <div>
                        <DashScore data={{title:'Nº de veces resportada como noticia falsa',score:data.reportesFalsedad}}/>
                    </div>
                </div>
                <div className="report-list-container">
                    <div className="list-events">
                        <div className="subtitle-bar" style={{fontSize:'1rem',marginTop:0}}>
                            <ListAltIcon fontSize='small'/>
                            Eventos                                    
                        </div>  
                        <AlignItemsList data={data.eventos}/>
                    </div>
                    <div className="list-pp">
                        <div className="subtitle-bar" style={{fontSize:'1rem',marginTop:0}}>
                            <GroupsIcon fontSize='small'/>
                            Partidos mencionados                                    
                        </div>  
                        <AlignItemsListPP data={data.partidos}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsReport;