import React from 'react'
import { FooterLeft, FooterRight, FooterStyle } from '../../styles/FooterStyle'



const Footer = () => {
  return (
    <FooterStyle >
        <FooterLeft> 
            <p>@ 2021, Made with <span style={{color:'red'}}>❤️</span> by <span className='simmple'> Creative Tim</span> & <span className='simmple'>Simmmple</span> for a better web</p>
    </FooterLeft>
    <FooterRight>
        <h3>Creative Tim</h3>
        <h3>Simmmple</h3>
        <h3>Blog</h3>
        <h3>License</h3>
    </FooterRight>
    </FooterStyle>
  )
}

export default Footer