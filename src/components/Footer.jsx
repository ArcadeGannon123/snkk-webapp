import React from 'react';
import styled from 'styled-components'

function Footer(props) {
    return (
        <>
            <Base>
                <div className='footer-logo'>
                    <img src={require('./images/icono.png')} alt='logo' />
                </div>
                <div className='footer-about'>BLANKPOINT© </div>
            </Base>
        </>
    );
}

export default Footer;

const Base = styled.div`
    display:grid;
    grid-template-columns: 33.33% 66.66%;
    background-color:#313132;

    img{
    }


`