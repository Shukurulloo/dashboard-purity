import React from 'react'
import Footer from './footer/footer'
import { ButtonSignin, WrapNavbar } from '../styles/SigninNavbar'
import Sidebarlogo from './icons/Sidebarlogo'
import { IoIosCube } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { FaKey } from 'react-icons/fa'
import { Accaunts, ContainerSignUp, WrapBg, WrapSignup, WrapperSignUp } from '../styles/SignupStyle'
import { SignInText, SignInTitle, WrapperSignin } from '../styles/SignInStyle'
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import {BiLogoGoogle} from "react-icons/bi";
import { FooterLeft, FooterRight, FooterStyle } from '../styles/FooterStyle'



function SignUp() {
  return (
    <ContainerSignUp>
      {/* <WrapBg> */}
        
<WrapNavbar style={{marginLeft: '0%;', width:'70%',background:'none', border:'none'}} >
    <div className='flex' style={{color:'#fff'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
      <path d="M20.8795 0H1.1219C0.502293 0 0 0.502293 0 1.1219V10.5297C0 11.1493 0.502293 11.6516 1.1219 11.6516H5.17558V20.8795C5.17522 21.1769 5.29311 21.4623 5.50329 21.6727C5.71347 21.8831 5.99869 22.0014 6.29611 22.0014H15.7039C16.3235 22.0014 16.8258 21.4991 16.8258 20.8795V11.6557H20.8795C21.1769 11.6557 21.4621 11.5375 21.6723 11.327C21.8825 11.1166 22.0004 10.8312 22 10.5338V1.1219C22.0004 0.824482 21.8825 0.539118 21.6723 0.328681C21.4621 0.118244 21.1769 0 20.8795 0ZM1.30042 1.30179H10.3498V10.3512H1.30042V1.30179ZM15.5254 20.701H6.476V11.6557H15.5254V20.701ZM20.6996 10.3512H11.6502V1.30179H20.6996V10.3512Z" fill="white"/>
      <path d="M7.44831 7.32455C7.70457 7.56505 8.10548 7.55869 8.35399 7.31018C8.60249 7.06167 8.60885 6.66077 8.36835 6.40451L6.2907 4.32686C6.03594 4.07448 5.62542 4.07448 5.37066 4.32686L3.28752 6.40451C3.11436 6.56701 3.04345 6.81092 3.10248 7.04093C3.16151 7.27094 3.34112 7.45055 3.57114 7.50959C3.80115 7.56862 4.04506 7.4977 4.20756 7.32455L5.82519 5.70692L7.44831 7.32455Z" fill="white"/>
      <path d="M14.5573 7.32455L16.1749 5.70692L17.7925 7.32455C18.0488 7.56505 18.4497 7.55869 18.6982 7.31018C18.9467 7.06167 18.9531 6.66077 18.7126 6.40451L16.6349 4.32686C16.3801 4.07448 15.9696 4.07448 15.7149 4.32686L13.6372 6.40451C13.3967 6.66077 13.4031 7.06167 13.6516 7.31018C13.9001 7.55869 14.301 7.56505 14.5573 7.32455Z" fill="white"/>
      <path d="M9.38176 14.6767C9.12514 14.4366 8.72423 14.4435 8.47609 14.6924C8.22795 14.9413 8.22219 15.3422 8.46309 15.5981L10.5407 17.6744C10.6626 17.7966 10.8281 17.8654 11.0008 17.8654C11.1734 17.8654 11.3389 17.7966 11.4608 17.6744L13.5384 15.5981C13.703 15.4338 13.7674 15.1941 13.7074 14.9694C13.6474 14.7446 13.472 14.569 13.2474 14.5087C13.0228 14.4483 12.783 14.5123 12.6184 14.6767L11.0008 16.2957L9.38176 14.6767Z" fill="white"/>
    </svg>
    <h1 style={{color:'#fff'}}>PURITY UI DASHBOARD</h1> 
    </div>

    <div className='navicons'>
   <div  className='navicon'> <IoIosCube style={{color:'#fff'}}/> 
   <Link to='/' style={{textDecoration:'none'}}><h3 style={{color:'#fff'}}> DASHBOARD</h3></Link></div> 
   <div className='navicon'><BsFillPersonFill  style={{color:'#fff'}}/> <Link to='/profile' style={{textDecoration:'none'}}><h3 style={{color:'#fff'}}> PROFILE</h3></Link></div> 
   <div className='navicon' > <CgProfile style={{color:'#fff'}}/><Link to='/signup' style={{textDecoration:'none'}}><h3 style={{width:'45px',color:'#fff'}}> SIGN UP</h3></Link></div> 
   <div className='navicon'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M5.18574 4.33959C5.18574 4.61889 5.18574 4.88959 5.27383 5.14311C4.34785 6.23021 1.90293 9.10267 1.6752 9.32182C1.62993 9.36243 1.59373 9.41211 1.56893 9.46763C1.54413 9.52315 1.53129 9.58327 1.53125 9.64408C1.53125 9.8267 1.64297 10.0029 1.7375 10.1017C1.8793 10.2499 2.48516 10.8107 2.59687 10.7033C2.92773 10.381 2.99434 10.2951 3.12969 10.1619C3.33379 9.96205 3.1082 9.55385 3.1791 9.38842C3.25 9.22299 3.3252 9.19076 3.44766 9.16498C3.57012 9.1392 3.78711 9.22728 3.95684 9.22943C4.13516 9.23158 4.23184 9.15639 4.36504 9.03178C4.47246 8.93295 4.5498 8.84057 4.55195 8.69662C4.55625 8.50326 4.27695 8.2476 4.48535 8.0435C4.69375 7.83939 4.99453 8.1767 5.21582 8.15092C5.43711 8.12514 5.70566 7.81791 5.73359 7.68685C5.76152 7.5558 5.48223 7.21849 5.52519 7.02728C5.54023 6.96283 5.67129 6.81244 5.77012 6.79096C5.86895 6.76947 6.30723 6.9392 6.40605 6.91771C6.52637 6.89193 6.66602 6.76517 6.77988 6.69428C7.11289 6.83822 7.41582 6.89623 7.80469 6.89623C9.27637 6.89623 10.4687 5.74896 10.4687 4.33529C10.4687 2.92162 9.27637 1.7793 7.80469 1.7793C6.33301 1.7793 5.18574 2.92592 5.18574 4.33959ZM9.09375 3.8418C9.09375 3.97777 9.05343 4.11069 8.97788 4.22375C8.90234 4.33681 8.79497 4.42493 8.66934 4.47696C8.54372 4.529 8.40549 4.54261 8.27212 4.51609C8.13876 4.48956 8.01626 4.42408 7.92011 4.32793C7.82397 4.23178 7.75849 4.10928 7.73196 3.97592C7.70543 3.84256 7.71905 3.70433 7.77108 3.5787C7.82312 3.45308 7.91124 3.3457 8.02429 3.27016C8.13735 3.19462 8.27027 3.1543 8.40625 3.1543C8.58859 3.1543 8.76345 3.22673 8.89239 3.35566C9.02132 3.48459 9.09375 3.65946 9.09375 3.8418Z" fill="white"/>
    </svg>
   <Link to='/signin' style={{textDecoration:'none'}}><h3 style={{width:'45px',color:'#fff'}}> SIGN IN</h3></Link></div> 
        <h3></h3>
    </div>

    <div className='flex' style={{justifyContent:'center'}}><ButtonSignin bg='#FFF' cl='black' >Free Download</ButtonSignin></div>
    </WrapNavbar>
    
    <WrapSignup>
    <SignInTitle cl='#fff'>Welcome</SignInTitle>
    <SignInText cl='#FFF' fwht='400' wd='333px' txaln='center'>Use these awesome forms to login or create new account in your project for free.</SignInText>
    
    <WrapperSignUp>
      <Accaunts>
        <h1>Register with</h1>
        <div className='platform'>
          <div className='Icons'><BsFacebook style={{width:'31px',height:'31px'}}/></div>
          <div className='Icons'><AiFillApple style={{width:'31px',height:'31px'}}/></div>
          <div className='Icons'><BiLogoGoogle style={{width:'31px',height:'31px'}}/></div>
        </div>
      </Accaunts>
    <h4 style={{marginTop: '55px'}}>Name</h4>
  <input type="text" placeholder='Your full name' />
  <h4 style={{marginTop: '20px'}}>Email</h4>
  <input type="text" placeholder='Your email address' />
  <h4 style={{marginTop: '20px'}}>Password</h4>
  <input type="text" placeholder='Your password'  />

  <div class="checkbox">
      <label><input type="checkbox" name="remember-me" formControlName="remember"/>Remember me</label>
    </div>
    <ButtonSignin wd='350px' bg='#4FD1C5' ht='45px' bdrs='15px'>SIGN IN</ButtonSignin>
    <p>Already have an account? <Link to='/signin' style={{textDecoration:'none', color:'#4FD1C5', fontWeight: '700'}}>Sign in </Link> </p>
  </WrapperSignUp>
    </WrapSignup>

    <FooterStyle  style={{width:'100%' , backgroundColor:'#fff'}}>
        <FooterLeft> 
            <p>@ 2021, Made with <span style={{color:'#4FD1C5'}}>❤️</span> by <span className='simmple'> Creative Tim</span> & <span className='simmple'>Simmmple</span> for a better web</p>
    </FooterLeft>
    <FooterRight style={{paddingRight:'100px'}}>
        <h3>Creative Tim</h3>
        <h3>Simmmple</h3>
        <h3>Blog</h3>
        <h3>License</h3>
    </FooterRight>
    </FooterStyle>

    </ContainerSignUp>
  )
}

export default SignUp