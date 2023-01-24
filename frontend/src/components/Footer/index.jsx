import React from 'react'
import { Container } from './style'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>Copyright ©2023 All rights reserved | This template is made with <span><FaHeart/></span> by <a href="/">Colorlib</a></p>
      </Container>
    </footer>
  )
}

export default Footer