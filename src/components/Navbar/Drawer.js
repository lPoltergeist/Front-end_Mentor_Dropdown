import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { route } from '../Data/Menuitem'
import ExpandedMenu from '../ExpandedMenu/ExpandedMenu'
import Logo from '../../images/logo.svg'


const Drawer = ({isOpen, toggleDrawer}) => {
  return (
    <>
    {isOpen && <Backdrop onClick={toggleDrawer}/>}
    <SDrawer isOpen={isOpen}>
    <SNavBarBrand><img src={Logo} /></SNavBarBrand>
      <RightNav>
    <NavRoutes >
    {route.map((routes) => {
        if( routes.subRoutes) {
          return <ExpandedMenu route={routes} key={routes.name} />;
        }
          return (
            <NavRoute onClick={toggleDrawer} to={routes.link} key={routes.name}>
              {routes.name}
            </NavRoute>
          )
          })}</NavRoutes>
          <LoginButton>Register</LoginButton>
          </RightNav>
    </SDrawer>
    </>
  )
}

export default Drawer

const SNavBarBrand = styled.div`
font-size: 3rem;
margin-left: 1.5rem;`

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
transform: translateX(${(props) => (props.isOpen ? "0" : "-200%")});
`

const RightNav = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`

const NavRoutes = styled.div`
margin-left: 1.5rem;
font-size: 2rem;
color: gray;
`

const NavRoute = styled(Link)`
display: flex;
text-decoration: none;
color: gray;
font-size: 1.2rem;
padding: 0.5rem;
`

const LoginButton = styled.button`
margin-left: 1.5rem;
padding: 0.7rem 3rem;
background-color: black;
color: white;
border: 1px solid white;
border-radius: 3rem;
align-self: flex-start;

&:hover {
  transition: 0.3s ease;

}
`
