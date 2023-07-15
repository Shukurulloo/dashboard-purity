import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/footer'
import { ContainerDt, Title, WrapDash, WrapDrid } from '../styles/DashboardStyle'
import { Text, WrapIcon,} from '../styles/SideBarStyle'
import { FaShoppingCart, FaWallet } from 'react-icons/fa'
import { AiOutlineGlobal } from 'react-icons/ai'


const Dashboard = () => {
  return (
    <ContainerDt>
    <Navbar/>
    <Title>Dashboard</Title>
<WrapDrid>
    <WrapDash>
      <div  style={{marginLeft:'20px'}}>
      <Text pdlft='0px'>Today’s Money</Text>
      <div style={{display:'flex', alignItems:'center'}}>
      <Title fsize='18px' mg='0px 0px 0px 0px'>$53,000</Title>
      <p>+55%</p></div>
      </div>
      <WrapIcon wd='45px' ht='45px' mgrht='20px'>
      <FaWallet style={{width:'22.5px',height:'22.5px', color:'white'}}/> 
      </WrapIcon>
    </WrapDash>

    <WrapDash>
      <div  style={{marginLeft:'20px'}}>
      <Text pdlft='0px'>Today’s Users</Text>
      <div style={{display:'flex', alignItems:'center'}}>
      <Title fsize='18px' mg='0px 0px 0px 0px'>2,300</Title>
      <p>+5%</p></div>
      </div>
      <WrapIcon wd='45px' ht='45px' mgrht='20px'>
      <AiOutlineGlobal style={{width:'22.5px',height:'22.5px', color:'white'}}/> 
      </WrapIcon>
    </WrapDash>

    <WrapDash>
      <div  style={{marginLeft:'20px'}}>
      <Text pdlft='0px'>New Clients</Text>
      <div style={{display:'flex', alignItems:'center'}}>
      <Title fsize='18px' mg='0px 0px 0px 0px'>+3,052</Title>
      <p style={{color:'red'}}>-14%</p></div>
      </div>
      <WrapIcon wd='45px' ht='45px' mgrht='20px'>
      <FaWallet style={{width:'22.5px',height:'22.5px', color:'white'}}/> 
      </WrapIcon>
    </WrapDash>

    <WrapDash>
      <div  style={{marginLeft:'20px'}}>
      <Text pdlft='0px'>Total Sales</Text>
      <div style={{display:'flex', alignItems:'center'}}>
      <Title fsize='18px' mg='0px 0px 0px 0px'>$173,000</Title>
      <p>+8%</p></div>
      </div>
      <WrapIcon wd='45px' ht='45px' mgrht='20px'>
      <FaShoppingCart style={{width:'22.5px',height:'22.5px', color:'white'}}/> 
      </WrapIcon>
    </WrapDash>

</WrapDrid>
    <Footer/>
    </ContainerDt>
  )
}

export default Dashboard