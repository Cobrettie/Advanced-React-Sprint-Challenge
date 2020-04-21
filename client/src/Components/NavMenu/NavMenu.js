import React from 'react';
import { useDarkMode } from '../../Hooks/useDarkMode';
import { NavContainerDiv, StyledNavItem } from './NavMenuStyles';
import '../../App.css'

export default function NavMenu() {
  const [darkMode, setDarkMode] = useDarkMode(false)

  const toggleDarkMode = event => {
    event.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <NavContainerDiv>
      <nav className={darkMode ? 'darkModeNav styledNav' : 'styledNav'}>
        <StyledNavItem>Women's World Cup Players</StyledNavItem>
        <div 
          onClick={toggleDarkMode} 
          className={darkMode ? 'toggled darkModeToggler' : 'darkModeToggler'}>Toggle Dark Mode
        </div>
      </nav>
    </NavContainerDiv>
  )
}
