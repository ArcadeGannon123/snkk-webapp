import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';

function StackedBar({data,font}) {

    const [grid,setGrid] = useState('50% 50%');

    useEffect(() => {
        const keys = Object.keys(data);
        const values= [];
        keys.map((key)=> values.push(( Math.round(data[key]*100) ).toString()+'%') );
        
        setGrid(values.join(' '))
    }, []);

    const Bcolor = {
        0:'#353535',
        1:'#3C6E71',
        2:'#b8dbd9',
        3:'#D9D9D9',
        4:'#284B63',
    }
    const Tcolor = {
        0:'#eeeeee',
        1:'#eeeeee',
        2:'#272727',
        3:'#272727',
        4:'#eeeeee',
    }


    return (
        <BarContainer>
            <div className="bar" style={{gridTemplateColumns: grid}}>
                {
                    Object.keys(data).map((key, i) => (
                    <div key={i}  title={key} className="bias">
                        <div className="percent" style={{backgroundColor:Bcolor[i], color:Tcolor[i]}}>
                            { data[key]*100 > 1 ? Math.round(data[key]*100)+'%' : ''}
                        </div>
                        <Box className='label' component="div" sx={{    textOverflow: 'ellipsis',
                                                                        overflow: 'hidden',
                                                                        padding:'0 0.5rem'}}>
                            {data[key]*100 > 1 ? key : ''}
                        </Box>
                    </div>
                    ))
                }
            </div>
        </BarContainer>
    );
}

export default StackedBar;

const BarContainer = styled.div`
margin:1rem;
.bar{
    display:grid;

}
.percent{
    width:100%;
    text-align:center;
    font-size:0.8rem;
    font-weight:600;
}
.label{
    width:100%;    
    text-align:center;
    cursor: help;
    font-size: 0.8rem;
}
.bias{
    
    display:flex;
    align-items:center;
    flex-direction:column;
}



`