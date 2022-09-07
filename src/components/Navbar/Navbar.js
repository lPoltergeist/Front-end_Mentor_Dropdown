import React,{ useState } from 'react'
import { SidebarData } from '../Data/Menuitem'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'


const Navbar = ({toggleDrawer}) => {

  return (
    <SNavbar>
      <NavContainer>
        <SNavBarBrand>Logo</SNavBarBrand>
        <RightNav><NavRoutes>
        {SidebarData.map((route) => (
        <NavRoute to={route.link} key={route.name}>
          {route.name}
          </NavRoute>))}</NavRoutes>
          <LoginButton>Register</LoginButton>
          </RightNav>
          <DrawerButton onClick={toggleDrawer}>
          <FaBars/>
        </DrawerButton>
      </NavContainer>

            </SNavbar>
  )
}

export default Navbar

const DrawerButton = styled.button`
all: unset;
font-size: 3rem;
display: grid;
@media (min-width: 768px){
  display: none;
}`

const SNavbar = styled.nav`
background-color: transparent;
`
const NavContainer = styled.div`
padding: 1rem;
max-width: 1300px;
height: 80px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
color: gray;`

const SNavBarBrand = styled.div`
font-size: 3rem;`

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