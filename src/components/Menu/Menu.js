import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components';

const Menu = ({route}) => {
  console.log(route.subRoutes)
  return (
  <SMenu>
    <MenuButton>
        {route.name} 
    </MenuButton>
    <SubRoutesContainer>
    {route.subRoutes.map((subRoute) => (
    <SubRoute to={subRoute.link} key={subRoute.name}>
      {subRoute.name}
    </SubRoute>
    ))}
    </SubRoutesContainer>
  </SMenu>
  );
};

export default Menu;

const SubRoutesContainer = styled.div`
background: #f2f2f2;
border-radius: 8px;
position: absolute;
min-width: 5rem;
display: flex;
flex-direction: column;
box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
padding: 1rem;
left: -1rem;
visibility: hidden;
opacity: 0;
transition: 0.3s ease-in-out, opacity 0.3s ease-in-out;
`

const SMenu = styled.div`
position: relative;
display: inline-block;

&:hover ${SubRoutesContainer}  {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
}    

`

const MenuButton = styled.div`
padding: 1rem;

&:hover{
    transition: 0.5s ease;
    color: black;
    background-color: #f2f2f2;
    box-shadow: 0px 0px 10px white;
}
`

const SubRoute = styled(Link)`
text-decoration: none;
color: gray;
font-size: 1rem;
padding: 5px 0 5px 0;

&:hover {
  color: #000;
}
`

