import React from 'react'
import {  SideBarstyle, SidebarFooter, Text, WrapIcon, WrapSidebar } from '../../styles/SideBarStyle'
import Border from '../../border'
import { Link } from 'react-router-dom'
import {FaFile, FaHome, FaQuestionCircle, FaRocket, FaWrench} from 'react-icons/fa';
import { BsCreditCard2BackFill, BsFillBarChartFill, BsFillPersonFill } from 'react-icons/bs';
import Sidebarlogo from '../icons/Sidebarlogo';

const SideBar = () => {
  return (
    <SideBarstyle>

          <div  className='sidebartitle'>
            <Sidebarlogo />
            <h1 style={{marginLeft:'10px'}}>PURITY UI DASHBOARD</h1> 
            </div>
        <Border/>

       <WrapSidebar >
            <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
            <FaHome style={{color:'#4FD1C5'}}/> 
             {/* <img src={house} alt=""  /> */}
                 </WrapIcon>
                  <Link to='/' style={{textDecoration:'none'}}><Text>Dashboard</Text> </Link> 
        </WrapSidebar>
      

     
        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
        <BsFillBarChartFill style={{color:'#4FD1C5'}}/>
            {/* <img src={tables} alt="" />  */}
        </WrapIcon>
        <Link to='/tables' style={{textDecoration:'none'}}><Text>Tables</Text> </Link>
        </WrapSidebar>
     

        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
       
            {/* <img src={billing} alt="" />  */}
            <BsCreditCard2BackFill style={{color:'#4FD1C5'}}/>
        </WrapIcon>
        <Link to='/billings' style={{textDecoration:'none'}}><Text>Billings</Text></Link>
        </WrapSidebar>

        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
             <FaWrench style={{color:'#4FD1C5'}}/>
        
            {/* <img src={rtl} alt="" />  */}
            
        </WrapIcon>
        <Link to='/rtl' style={{textDecoration:'none'}}><Text>RTL</Text></Link>
        </WrapSidebar>
        
        <h5>ACCOUNT PAGES</h5>

        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
        <BsFillPersonFill style={{color:'#4FD1C5'}}/>
            {/* <img src={person} alt="" />  */}
        </WrapIcon>
       <Link to='/profile' style={{textDecoration:'none'}}> <Text>Profile</Text></Link>
        </WrapSidebar>
      
        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
         <FaFile style={{color:'#4FD1C5'}}/>
            {/* <img src={SigmIn} alt="" />  */}
        </WrapIcon>
       <Link to='/signin' style={{textDecoration:'none'}}> <Text>Sign In</Text> </Link>
        </WrapSidebar>

        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
              <FaRocket style={{color:'#4FD1C5'}}/>
            {/* <img src={rocket} alt="" />  */}
        </WrapIcon>
        <Link to='/signup' style={{textDecoration:'none'}}><Text>Sign Up</Text></Link>
        </WrapSidebar>

        <SidebarFooter>
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'style={{marginLeft:'20px'}}>
        <FaQuestionCircle style={{color:'#4FD1C5'}}/>
            {/* <img src={question} alt="" />  */}
        </WrapIcon>
        <h1>Need help?</h1>
        <p>Please check our docs</p>
        <button>DOCUMENTATION</button>
        </SidebarFooter>
    </SideBarstyle>
  )

  }
export default SideBar