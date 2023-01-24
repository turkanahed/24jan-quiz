import React from 'react'
import { LeftSide, RightSide } from './style'
import { Link, NavLink } from "react-router-dom"
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header
      className='py-4'
      style={{ backgroundColor: "white"}}>
      <div className="container d-flex justify-content-between">
        <LeftSide>
          <h3>Aroma</h3>
          <nav>
            <ul>
              <li><NavLink to="/" activeclassname="ative">Home</NavLink></li>
              <li><NavLink to="/shop" activeclassname="ative">Shop</NavLink></li>
              <li><NavLink to="/blog" activeclassname="ative">Blog</NavLink></li>
              <li><NavLink to="/pages" activeclassname="ative">Pages</NavLink></li>
              <li><NavLink to="/contact" activeclassname="ative">Contact</NavLink></li>
            </ul>
          </nav>
        </LeftSide>
        <RightSide>
          <span><FiSearch /></span>
          <span><FiShoppingCart /><sup>1</sup></span>
          <button>Buy Now</button>
          <button><Link to="/add">Add</Link></button>
        </RightSide>
      </div>
    </header>
  )
}

export default Header