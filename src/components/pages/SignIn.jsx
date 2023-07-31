import React from 'react'
import { FooterLeft, FooterRight, FooterStyle } from '../styles/FooterStyle'
import { SignInText, SignInTitle, SigninLeft, SigninRight, WrapSignIn, WrapperSignin } from '../styles/SignInStyle'
import SigninNavbar from './signInNavbar/SigninNavbar'
import { ButtonSignin } from '../styles/SigninNavbar'
import { Link } from 'react-router-dom'
import { Checkbox } from '../styles/SignupStyle'

const SignIn = () => {
  return (
    <WrapSignIn>
<div className='wrapCont'>
  <SigninLeft>
  <SigninNavbar/>
  <WrapperSignin>
  <SignInTitle>Welcome Back</SignInTitle>
  <SignInText>Enter your email and password to sign in</SignInText>
  <h4 style={{marginTop: '55px'}}>Email</h4>
  <input type="text" placeholder='Your email address' />
  <h4>Password</h4>
  <input type="text" placeholder='Your password'  />

  <Checkbox>
      <input type="checkbox" id='check' />
      <label for="check" style={{ paddingBottom:'19px'}}></label>
      <h2>Remember me </h2>
    </Checkbox>
    <ButtonSignin wd='350px' bg='#4FD1C5' ht='45px' bdrs='15px'>SIGN IN</ButtonSignin>
    <p>Don't have an account? <Link to='/signup' style={{textDecoration:'none'}}> <h5>Sign up</h5>  </Link> </p>
  </WrapperSignin>
  </SigninLeft>
<SigninRight>
      {/* <div className='background1'></div>
    <div  className='background2'></div> */}
</SigninRight>
</div>

         <FooterStyle  style={{width:'100%' , backgroundColor:'#fff', }}>
        <FooterLeft style={{justifyContent:'right',paddingRight:'200px'}}> 
            <p>@ 2021, Made with <span style={{color:'#4FD1C5'}}>❤️</span> by <span className='simmple'> Creative Tim</span> & <span className='simmple'>Simmmple</span> for a better web</p>
    </FooterLeft>
    <FooterRight style={{paddingRight:'100px',justifyContent:'center'}}>
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