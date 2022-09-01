import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: flex-start;
padding: 0.5rem 5rem;
z-index: 99;

@media screen and (max-width: 1100px) {
    padding: 0.5rem 0.5rem;
}

img {
    margin-left: 5px;
}

.Logoimg {
    width: 95px;
}
`

export const NavLink = styled.a`
color: #7b7b7b;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
transition: ease-in 0.3s;
font-family: "Roboto", sans-serif;

font-size: 1.1rem;

&:hover {
    color: #000;
}

`

export const Bars = styled.div`
display: none;
color: #000;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

width: 100vw;
white-space: nowrap;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

justify-content: flex-end;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 15px;
background: transparent;
padding: 10px 22px;
color: #7b7b7b;
border: 1px solid #7b7b7b;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 5px;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
}
`