import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './componentStyles/NavBar.css'
import ThemeToggle from './ThemeToggle'
import HamburgerMenu from '../assets/hamburger_menu.svg'
import ASJSuperLogo from '../assets/asjsuperlogo.svg'

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    // const [activeMenu, setActive] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <>
        <div className='navbar'>
            <div className='logoContainer'>
                <img src={ASJSuperLogo} alt='logo' width={40} height={40} className='logo-image'/>
            </div>


            <div className='right-container'>
               <div className='theme-container'>
                    <ThemeToggle />
               </div>

                <div className={`navigation-container ${menuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <a href={import.meta.env.VITE_APP_G_DRIVE_RESUME_LINK} target={'_blank'} rel={'noopener noreferrer'}>Resume </a>
                </div> 


                <div className="hamburger" onClick={toggleMenu}>
                    <img src={HamburgerMenu} alt="Icon description" />
                </div>

            </div>
        </div>
        </>
        
    )
}

export default NavBar;