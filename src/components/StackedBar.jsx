import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

function StackedBar({data,font}) {

    const [grid,setGrid] = useState('50% 50%');
    const [barra,setBarra] = useState(null);

    useEffect(() => {
        const keys = Object.keys(data);
        const values= [];
        const nKeys= [];
        
        keys.map((key)=> {
            const _value=Math.round(data[key]*100);
            if (_value !==0){
                values.push(( _value).toString()+'%');
                nKeys.push(key);
            }
        } );
        
        setGrid(values.join(' '));
        setBarra(nKeys);
        console.log(grid)
        console.log(barra)
    }, []);

    const Bcolor2 = {
        'izquierda':'#3C6E71',
        'neutral':'#D9D9D9',
        'derecha':'#284B63',
        'conservador':'#3C6E71',
        'liberal':'#284B63',
        'noOfensivo':'#e8eddf',
        'ofensivo':'#f5cb5c',
        'noSensacionalista':'#e8eddf',
        'sensacionalista':'#f5cb5c',
        'igualdad':'#3C6E71',
        'libertad':'#284B63',
    }
    const Tcolor2 = {
        'izquierda':'#fff',
        'neutral':'#202020',
        'derecha':'#fff',
        'conservador':'#fff',
        'liberal':'#fff',
        'noOfensivo':'#202020',
        'ofensivo':'#202020',
        'noSensacionalista':'#202020',
        'sensacionalista':'#202020',
        'igualdad':'#fff',
        'libertad':'#fff',
    }

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
            {barra ? 
            <div className="bar" style={{gridTemplateColumns: grid}}>
                {
                    barra.map((key, i) => (
                    <div key={i}  title={key} className="bias">
                        <div className="percent" style={{backgroundColor:Bcolor2[key], color:Tcolor2[key]}}>
                            { data[key]*100 > 1 ? Math.round(data[key]*100)+'%' : ''}
                        </div>
                        <div className='label'>
                            {data[key]*100 > 1 ? key : ''}
                        </div>
                    </div>
                    ))
                }
            </div>
            :<></>}
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