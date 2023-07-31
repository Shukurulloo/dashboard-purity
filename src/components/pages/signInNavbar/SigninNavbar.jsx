import React from 'react'
import { ButtonSignin, WrapNavbar } from '../../styles/SigninNavbar'
import Sidebarlogo from '../icons/Sidebarlogo'
import { IoIosCube} from "react-icons/io";
import { BsFillPersonFill } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const SigninNavbar = () => {
  return (
    <WrapNavbar style={{marginLeft: '36%', backdropFilter: 'blur(10.500000953674316px)', boxShadow: '0px 7.000000476837158px 23.000001907348633px 0px rgba(0, 0, 0, 0.05)'}}>
    <div className='flex'>
    <Sidebarlogo />
    <h1>PURITY UI DASHBOARD</h1> 
    </div>

    <div className='navicons'>
   <div  className='navicon'> <IoIosCube /> <Link to='/' style={{textDecoration:'none'}}><h3> DASHBOARD</h3></Link></div> 
   <div className='navicon'><BsFillPersonFill /> <Link to='/profile' style={{textDecoration:'none'}}><h3> PROFILE</h3></Link></div> 
   <div className='navicon' > <CgProfile /><Link to='/signup' style={{textDecoration:'none'}}><h3 style={{width:'45px'}}> SIGN UP</h3></Link></div> 
   <div className='navicon'><FaKey /><Link to='/signin' style={{textDecoration:'none'}}><h3 style={{width:'45px'}}> SIGN IN</h3></Link></div> 
        <h3></h3>
    </div>

    <div className='flex' style={{justifyContent:'right'}}><ButtonSignin>Free Download</ButtonSignin></div>
    </WrapNavbar>
  )
}

export default SigninNavbar