import React from 'react'
import { FooterLeft, FooterRight, FooterStyle } from '../styles/FooterStyle'
import { WrapSignIn } from '../styles/SignInStyle'

const SignIn = () => {
  return (
    <WrapSignIn>
<div className='left'></div>
<div className='right'>
      <div className='background1'></div>
    <div  className='background2'></div>
</div>













          <FooterStyle  style={{width:'100%' , background:'transparent'}}>
        <FooterLeft> 
            <p>@ 2021, Made with <span style={{color:'red'}}>❤️</span> by <span className='simmple'> Creative Tim</span> & <span className='simmple'>Simmmple</span> for a better web</p>
    </FooterLeft>
    <FooterRight style={{paddingRight:'100px'}}>
        <h3>Creative Tim</h3>
        <h3>Simmmple</h3>
        <h3>Blog</h3>
        <h3>License</h3>
    </FooterRight>
    </FooterStyle>
    </WrapSignIn>
  )
}

export default SignIn