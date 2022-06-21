import React from 'react';
import styled from 'styled-components';

function User({data}) {
    return (
        <Base>
            <Logo src={require('./images/icono.png')} />
            <UserName>{data.username}</UserName>
        </Base>
    );
}

export default User;

const Base = styled.div`
    position: relative;
    border: 1px solid #fff;
    margin: 1em;
    border-radius: 25px;
    padding: 1em;
    background-color: #000;
`

const Logo = styled.img`
    display: block;
    max-width:90%;
    margin-left: auto;
    margin-right: auto;
`

const UserName = styled.div`
    color: #fff;
    text-align: center;


`