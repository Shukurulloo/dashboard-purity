import React from 'react'
import {  SideBarstyle, SidebarFooter, Text, WrapIcon, WrapSidebar } from './pages/styles/SideBarStyle'
import creativeLogo from './assets/logo-creative-tim-blacksidebar.png'
import Border from './pages/border'
import house from './assets/house.svg'
import tables from './assets/charttables.png'
import billing from './assets/defaultbilling.png'
import rtl from './assets/defaultrtl.png'
import person from './assets/defaultprofile.png'
import SigmIn from './assets/defaultsignIn.png'
import rocket from './assets/sharprocket.png'
import question from './assets/circleQuestion.png'
const SideBar = () => {
  return (
    <SideBarstyle>

        <WrapSidebar><img src={creativeLogo} alt="" /><h1>PURITY UI DASHBOARD</h1> </WrapSidebar>
        <Border/>

       <WrapSidebar bxshd='0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02);' style={{background: 'var(--black-amp-white-white, #FFF)'}}>
            <WrapIcon style={{}}>
                 <img src={house} alt=""  />
                 </WrapIcon>
                  <h3>Dashboard</h3>  
        </WrapSidebar>
      

     
        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
            <img src={tables} alt="" /> 
        </WrapIcon>
        <Text>Tables</Text> 
        </WrapSidebar>
     

        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
            <img src={billing} alt="" /> 
        </WrapIcon>
        <Text>Billings</Text>
        </WrapSidebar>

        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
            <img src={rtl} alt="" /> 
        </WrapIcon>
        <Text>RTL</Text>
        </WrapSidebar>
        
        <h5>ACCOUNT PAGES</h5>

        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
            <img src={person} alt="" /> 
        </WrapIcon>
        <Text>Profile</Text>
        </WrapSidebar>
      
        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
            <img src={SigmIn} alt="" /> 
        </WrapIcon>
        <Text>Sign In</Text>
        </WrapSidebar>

        <WrapSidebar> 
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'>
            <img src={rocket} alt="" /> 
        </WrapIcon>
        <Text>Sign Up</Text>
        </WrapSidebar>

        <SidebarFooter>
        <WrapIcon bg='var(--black-amp-white-white, #FFF)'style={{marginLeft:'20px'}}>
            <img src={question} alt="" /> 
        </WrapIcon>
        <h1>Need help?</h1>
        <p>Please check our docs</p>
        <button>DOCUMENTATION</button>
        </SidebarFooter>
    </SideBarstyle>
  )

  }
export default SideBar