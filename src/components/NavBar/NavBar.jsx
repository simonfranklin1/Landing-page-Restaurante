import './NavBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import { useState } from 'react';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className='app__navbar-links'>
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#laurels">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="/" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className={`app__navbar-smallscreen`}>
        <GiHamburgerMenu color='#fff' fontSize={27} style={{cursor: 'pointer'}} onClick={() => setToggleMenu(true)} />
        
          <div className={`app__navbar-smallscreen_overlay flex__center ${toggleMenu ? 'app__navbar-smallscreen_overlay-opened' : 'app__navbar-smallscreen_overlay-closed'}`}>
            <MdOutlineRestaurantMenu className='overlay__close' onClick={() => setToggleMenu(false)} />   
            <ul className='app__navbar-smallscreen-links'>
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#laurels">Awards</a></li>
              <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
          </div> 
        
      </div>
    </nav>
  )
}

export default NavBar