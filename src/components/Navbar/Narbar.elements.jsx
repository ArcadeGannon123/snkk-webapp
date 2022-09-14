import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: ${(props)=> props.variant === 'False' ? '#0000000' : '#041511'}; 
  position:fixed;
  z-index:10;
  transition: 0.5s all ease;
  box-shadow:  2px 2px 2px 1px ${(props)=> props.variant === 'False' ? '#0000000' : 'rgba(0, 0, 0, 0.2)'};


`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  margin-left: 20%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-top:5px;
  margin-bottom:5px;
  background-color: ${(props)=> props.variant === 'False' ? '#0000000' : '#ffffff'}; 
  border-radius:30px;
  transition: 0.5s all ease;
  cursor:pointer;
  .link{
    text-decoration: none;
  }
  .logo{
    display:flex;
    img{
      height: 30px;
      margin: 10px;
    }
    div{
      color: black;
      margin: auto;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;      
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 1460px) {
    margin-left: 10%;
  }
  @media screen and (max-width: 1300px) {
    margin-left: 5%;
  }

  @media screen and (max-width: 1220px) {
    margin-left: 0;
  }

`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin:auto; 
  @media screen and (max-width: 1160px) {
    color: black;
    background-color: #F7F9F4;
    position: absolute;
    top: 65px;
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
    @media screen and (max-width: 1160px) {
      display:flex;
    }
  }
  .user-bar{
    text-decoration:none;
    @media screen and (max-width: 1160px) {
      display:none;
    }
  }

`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1160px) {
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
  color: ${(props)=> props.variant === 'False' ? '#3B413A' : '#ffffff'};
  font-size: 1rem;
  border-radius:10px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s all ease;
  font-family: 'Poppins', sans-serif;
  font-weight:600;
  &:hover {
    color: #669495;
    transition: 0.2s all ease;

  }
  @media screen and (max-width: 1160px) {
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
  @media screen and (max-width: 1160px) {
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
