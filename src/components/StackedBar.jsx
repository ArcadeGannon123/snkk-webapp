import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

function StackedBar({data,font}) {

    const [grid,setGrid] = useState('50% 50%');

    useEffect(() => {
        const keys = Object.keys(data);
        const values= [];
        keys.map((key)=> {
            const _value=Math.round(data[key]*100);
            if (_value !==0){
                values.push(( _value).toString()+'%')
            }
        } );
        
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
                        <div className='label'>
                            {data[key]*100 > 1 ? key : ''}
                        </div>
                    </div>
                    ))
                }
            </div>
        </BarContainer>
    );
}

export default StackedBar;

const BarContainer = styled.div`
width:100%;
margin:1.2rem 0;
.bar{
    display:grid;
    width:100%;

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
    font-size: 0.8rem;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.bias{
    
    display:grid;
    align-items:center;
}



`