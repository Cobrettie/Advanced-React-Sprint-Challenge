import React from 'react';
import { useDarkMode } from '../../Hooks/useDarkMode';
import { StyledNavItem } from './NavMenuStyles';
import '../../App.css'

export default function NavMenu() {
  const [darkMode, setDarkMode] = useDarkMode(false)

  const toggleDarkMode = event => {
    event.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <nav className={darkMode ? 'darkModeNav styledNav' : 'styledNav'}>
        <StyledNavItem>Women's World Cup Players</StyledNavItem>
        <div 
          onClick={toggleDarkMode} 
          className={darkMode ? 'toggled darkModeToggler' : 'darkModeToggler'}
          data-testid='darkModeToggler'
          >Toggle Dark Mode
        </div>
      </nav>
    </div>
  )
}
