import React, { useContext} from 'react';
import styled from 'styled-components';
import {FaUserCircle} from "react-icons/fa";
import { UserContext } from './UserContext';

function User() {
    
    const {point,setPoint} = useContext(UserContext);
    const {user,setUser} = useContext(UserContext);
    return (
        <Base>
            <div className="icon">              
                  <FaUserCircle />
            </div>
            <div className="user-data">
                <div className="username">
                    {user}
                </div>
                <div className="puntaje">
                    puntaje: {point}
                </div>
            </div>
        </Base>
    );
}

export default User;

const Base = styled.div`
display:flex;
align-items:center;
margin-left: 30px;
.icon{
  font-size:50px;
  display:flex;
    align-items:center;

}
.user-data{
    padding-left:10px;
    font-size: 16px;
}
`