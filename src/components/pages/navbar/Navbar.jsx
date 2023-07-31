import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'; 
import { FaRegBell, FaRegSun, FaUserTie } from 'react-icons/fa';
import { NavLeft, NavRight, NavbarStyle, WrapInput } from '../../styles/Navbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarStyle>
        <NavLeft>
                <p><span style={{color: 'var(--gray-gray-400, #A0AEC0)',paddingRight:'3px'}}>Pages</span>  / Dashboard</p>     
        </NavLeft>

        <NavRight>
        <WrapInput>
        <AiOutlineSearch style={{margin:'6px '}}/>
        <input type="search" placeholder='Type here...' />
        </WrapInput>

        <FaUserTie style={{color:'#718096',marginLeft:'20px'}}/>
        <Link to='/signin' style={{textDecoration:'none'}}><p>Sign In</p></Link>

        <FaRegSun style={{color:'#718096',margin:'0px 23px 0px 0px'}}/>

        <FaRegBell style={{color:'#718096', margin:'0px 57px 0px 0px'}}/>

        </NavRight>

    </NavbarStyle>
  )
}

export default Navbar