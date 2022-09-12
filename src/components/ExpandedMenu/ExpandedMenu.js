import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components';
import {FaAngleDown, FaAngleRight} from 'react-icons/fa';

const ExpandedMenu = ({route}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  console.log(route.subRoutes)
  return (
  <SMenu>
    <MenuButton onClick={toggleMenu}>
        {route.name} {isMenuOpen ? <FaAngleDown/> : <FaAngleRight/>}
    </MenuButton>
    <SubRoutesContainer isOpen={isMenuOpen}>
    {route.subRoutes.map((subRoute) => (
    <SubRoute to={subRoute.link} key={subRoute.name}>
      {subRoute.name}
    </SubRoute>
    ))}
    </SubRoutesContainer>
  </SMenu>
  );
};

export default ExpandedMenu;

const SubRoutesContainer = styled.div`
display: ${(props) => (props.isOpen ? "flex" : "none")};
flex-direction: column;
padding: 1rem;

`

const SMenu = styled.div`
font-size: 1.2rem;
color: gray; 
line-height: 1.5rem;

&:hover{
  color: black;
}`

const MenuButton = styled.div`
font-size: 1.2rem;
padding: 0.5rem;

`

const SubRoute = styled(Link)`
text-decoration: none;
color: gray;
&:hover{
  color: black;
}
`

