import React, { useState } from 'react'
import {Feature, Company} from './styles'
import * as IconsAi from 'react-icons/ai'
import {BsListCheck} from 'react-icons/bs'

const DropdownFeature = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    
    <Feature onClick={handleClick} className={click ? 'dropdown-menu clicked' : "dropdown-menu"}>
            <div className="dropdownlist">
            <li>
           <BsListCheck/> Todo List
        </li>
        <li>
            <IconsAi.AiFillCalendar/> Calendar
        </li>
        <li>
           <IconsAi.AiFillBell/> Reminders
        </li>
        <li>
           <IconsAi.AiFillClockCircle/> Planning
        </li>
            </div>
    </Feature>
   
  )
}

const DropdownCompany = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    
    <Company onClick={handleClick} className={click ? 'dropdown-menu clicked' : "dropdown-menu"}>
            <div className="dropdownlist">
            <li>
            History
        </li>
        <li>
             Our Team
        </li>
        <li>
            Blog
        </li>
        
            </div>
    </Company>
   
  )
}

export {DropdownFeature, DropdownCompany}