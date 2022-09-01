import React,{ useState } from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './styles';
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import Logo from '../../images/logo.svg'
import ArrowUp from '../../images/icon-arrow-up.svg'
import ArrowDown from '../../images/icon-arrow-down.svg'
import {DropdownFeature, DropdownCompany} from '../Dropdown/Dropdown';
import Sidebar from '../SideMenu/Sidebar';



const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [Feature, setFeature] = useState(false);
  const HandleFeature = () => setFeature(!Feature);

  const [Company, setCompany] = useState(false);
  const HandleCompany = () => setCompany(!Company);
  

  return (
    <>
            <Nav>
                <NavLink to="/">
                  <img className="Logoimg" src={Logo} />
                </NavLink>
                <Bars onClick={handleMenu}>
                {isMenuOpen ? <AiOutlineClose/> : <FaBars/>}
                {isMenuOpen && <Sidebar/>}
                  </Bars>
                  
                
                
                <NavMenu>
                  <NavLink  onClick={HandleFeature} activeStyle>
                    Feature {Feature ? <img src={ArrowUp}/> : <img src={ArrowDown}/>}
                    {Feature && <DropdownFeature/>}
                  </NavLink>
                  <NavLink onClick={HandleCompany} activeStyle>
                    Company {Company ? <img src={ArrowUp}/> : <img src={ArrowDown}/>}
                    {Company && <DropdownCompany/>}
                  </NavLink>
                  <NavLink activeStyle>
                    Careers
                  </NavLink>
                  <NavLink activeStyle>
                    About
                  </NavLink>
                </NavMenu>

                <NavBtn>
                <NavLink to="" activeStyle>
                    Login
                  </NavLink>
                  <NavBtnLink to="">Register</NavBtnLink>
                </NavBtn>
            </Nav>
            </>
  )
}

export default Navbar