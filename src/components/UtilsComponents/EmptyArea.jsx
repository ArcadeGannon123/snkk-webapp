import React from 'react';
import './Utils.css';

function EmptyArea(props) {
    return (
        <div className='empty-message'>
            <img src='https://static.thenounproject.com/png/1496955-200.png' alt='' />
            <p className='text-message'>sin datos</p>
        </div>
    );
}

export default EmptyArea;