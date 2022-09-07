import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SidebarData } from '../Data/Menuitem'

const Drawer = ({isOpen, toggleDrawer}) => {
  return (
    <>
    {isOpen && <Backdrop/>}
    <SDrawer isOpen={isOpen}>
    <NavRoutes>
        {SidebarData.map((route) => (
        <NavRoute to={route.link} key={route.name}>
          {route.name}
          </NavRoute>))}</NavRoutes>
          <LoginButton>Register</LoginButton>
    </SDrawer>
    </>
  )
}

export default Drawer

const Backdrop = styled.div`
height: 100%;
width: 100%;
z-index: 100;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.6);
`;

const SDrawer = styled.div`
z-index: 150;
position: absolute;
top: 0;
height: 100vh;
width: 60%;
background-color: white;
transition: 0.3s ease;
transform: translateX(${(props) => (props.isOpen ? "100%" : "-100%")});
`

const RightNav = styled.div`
display: flex;
gap: 2rem;`

const NavRoutes = styled.div`
@media (max-width: 768px){
  display: none;
}
gap: 1rem;
display: flex;
font-size: 2rem;
align-items: center;`

const NavRoute = styled(Link)`
text-decoration: none;
color: gray;
padding: 0.5rem;
transition: 0.5s ease;`

const LoginButton = styled.button`
padding: 0.7rem 3rem;
background-color: black;
color: white;
border: 1px solid white;
border-radius: 3rem;

&:hover {
  transition: 0.3s ease;

}
`
