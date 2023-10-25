import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css'
import WorldImage from '../../images/WorldImage.png'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'

const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)


  return (
    <nav>
        <div className="container nav__container">
          <Link to='/' className='logo' onClick={()=> setIsNavShowing(false)}>
            <img src={WorldImage} alt='Nav Logo'></img>
          </Link>

          <ul className={`nav__links ${isNavShowing ? 'show__nav': 'hide__nav'}`}>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'active-nav': ''}  onClick={()=> setIsNavShowing(prev => !prev)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/create" className={({isActive}) => isActive ? 'active-nav': ''}  onClick={()=> setIsNavShowing(prev => !prev)}>Plan an activity</NavLink>
            </li>
            {/* <li>
              <NavLink to="/gallery" className={({isActive}) => isActive ? 'active-nav': ''} onClick={()=> setIsNavShowing(prev => !prev)}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? 'active-nav': ''}   onClick={()=> setIsNavShowing(prev => !prev)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive}) => isActive ? 'active-nav': ''}   onClick={()=> setIsNavShowing(prev => !prev)}>Contact</NavLink>
            </li> */}

          </ul>

        <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(prev => !prev)}>

          {
            isNavShowing ?  <MdOutlineClose/> :  <FaBars/>
          }
        </button>
          
        </div>
    </nav>
  )
}

export default NavBar