import React from 'react'
import { ButtonSignin, WrapNavbar } from '../../styles/SigninNavbar'
import Sidebarlogo from '../icons/Sidebarlogo'
import { IoIosCube} from "react-icons/io";
import { BsFillPersonFill } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';

const SigninNavbar = () => {
  return (
    <WrapNavbar>
    <div>
    <Sidebarlogo />
    <h1>PURITY UI DASHBOARD</h1> 
    </div>

    <div>
        <h3><IoIosCube/> DASHBOARD</h3>
        <h3><BsFillPersonFill style={{}}/> PROFILE</h3>
        <h3><FaKey/> SIGN IN</h3>
        <h3></h3>
    </div>

    <div><ButtonSignin>Free Download</ButtonSignin></div>
    </WrapNavbar>
  )
}

export default SigninNavbar