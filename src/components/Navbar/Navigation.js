import React,{useState} from 'react'
import Navbar from './Navbar'
import { SidebarData } from '../Data/Menuitem'
import Drawer from './Drawer'

const Navigation = () => {
const [isOpen, setIsOpen] = useState(false);
const toggleDrawer = () => setIsOpen(!isOpen);

    console.log(SidebarData)
  return (
   <>
    <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    <Navbar toggleDrawer={toggleDrawer}/>
    </>
  )
}

export default Navigation