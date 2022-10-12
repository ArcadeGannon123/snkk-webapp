import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const UserContainer = styled.div`
  display:flex;
  gap:1rem;
  padding:5px 10px;

`


export const SideBarContainer = styled.div`

  top: 50px;
  height:100%;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #353535;
  z-index:10;
  @media screen and (max-width: 700px) {
    width:100%;
  }
`;
export const SideBarContainer2 = styled.div`

  top: 50px;
  height:100%;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #353535;
  z-index:10;
  @media screen and (max-width: 700px) {
    display:none;
  }
`;

export const FaBarsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  font-size:20px;
`;


export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color:#353535;
  position:fixed;
  z-index:10;
  transition: 0.5s all ease;
  box-shadow:  2px 2px 2px 1px rgba(0, 0, 0, 0.2);


`;

export const Wrapper = styled.div`
  height:100%;
  display: flex;
  flex-wrap: wrap;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  transition: 0.5s all ease;

  cursor:pointer;
  .link{
    text-decoration: none;
  }
  .logo{
    display:flex;    
    align-items: center;
    gap:10px;
    img{
      height: 30px;
    }
    div{
      margin: auto;
      font-weight: 300;   
      color:white;
    }
  }


`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin:0 auto 0 0;
  @media screen and (max-width: 700px) {
    display:none;
    color: black;
    background-color: #F7F9F4;
    position: absolute;
    top: 50px;
    right: ${({ open }) => (open ? "0" : "100%")}; //Import
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    padding:0;
    border-radius: 0 0 20px 20px;
  }
  .icon-login{
    display:none;    
    text-decoration:none;
    @media screen and (max-width: 700px) {
      display:flex;
    }
  }
  .user-bar{
    text-decoration:none;
    @media screen and (max-width: 700px) {
      display:none;
    }
  }

`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    width: 70%;
    display: flex;
    align-items: center;
    margin:1em;
  }
`;

export const MenuItemLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s all ease;
  font-weight:400;
  &:hover {
    color: #669495;
    transition: 0.2s all ease;

  }
  @media screen and (max-width: 700px) {
    color:black;
    width: 100%;
    padding:0;
    margin:0;
    div {
      border-radius:20px;
      padding:20px;
      width: 80%;
      justify-content: center;
      text-align:center;
      &:hover {
        background-color: #669495;
        transition: 0.2s all ease;
        color: black;

      }

      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: ${(props)=> props.variant === 'False' ? '#669495' : '#ffffff'}; 
      font-size:40px;
      margin-right: 0.5rem;
    }
  }
`;
