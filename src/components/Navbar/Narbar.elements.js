import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #313132; 
  position:relative;
  z-index:10;


`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  img {
    position: absolute;
    top: 5px;
    height:40px;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  margin-left:10%;
  .mobile-menu-user{
    display:none;
  }

  @media screen and (max-width: 960px) {
    background-color: #313132;
    position: absolute;
    top: 50px;
    right: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    padding:0;
    border-radius: 0 0 20px 20px;
    .mobile-menu-user{
      display:block;
      position:relative;
      margin-left:20%;
      margin-right:20%;
      margin-top:0;
      margin-top:0;
    }
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 960px) {
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
  height: 100%;
  padding: 0.5rem 1.5rem;
  margin-right:0.5em;
  color: #F7F9F4;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  border-radius:10px;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    color: #fff;
    background-color: #669495;
    
    transition: 0.5s all ease;

    div {
      svg {
        fill: #23394d;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding:0;
    margin:0;
    div {
      width: 30%;
      justify-content: center;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: center;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: center;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: center;

      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: #669495;
      margin-right: 0.5rem;
    }
  }
`;
