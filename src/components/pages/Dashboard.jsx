import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/footer'
import { ContainerDt, DivText, Flex, Grid, MidLeft, MidRight, MiniMid, Title,  WrapDash, WrapData, WrapImg, WrapMid, WrapMini, WrapMiniRight, WrapMinileft } from '../styles/DashboardStyle'
import { Text, WrapIcon,} from '../styles/SideBarStyle'
import { FaRocket, FaShoppingCart, FaWallet, FaWrench, FaCheckCircle} from 'react-icons/fa'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FiArrowRight } from "react-icons/fi";
import chakra from '../assets/og-imagechakra.png'
import graphic from '../assets/Graphgraphic.png'
import progres from '../assets/Progress1.png'
import progres2 from '../assets/Progress2.png'
import progres3 from '../assets/Progress3.png'
import progres4 from '../assets/Progress4.png'
import sales from '../assets/Data.png'
import TableSection from './table/TableSection'





const Dashboard = () => {
  return (
    <ContainerDt>
    <Navbar/>
    <div style={{width:'100%',display:'flex', justifyContent:'flex-start',}}><Title>Dashboard</Title></div>
     <Grid>
    <WrapDash >
      <div >
      <Text pdlft='0px'>Today’s Money</Text>
      <div style={{display:'flex', alignItems:'center'}}>
      <Title fsize='18px' mg='0px 0px 0px 0px'>$53,000</Title>
      <p>+55%</p></div>
      </div>
      <WrapIcon wd='45px' ht='45px' mgrht='0px'>
      <FaWallet style={{width:'22.5px',height:'22.5px', color:'white'}}/> 
      </WrapIcon>
    </WrapDash>

    <WrapDash>
      <div>
      <Text pdlft='0px'>Today’s Users</Text>
      <div style={{display:'flex', alignItems:'center'}}>
      <Title fsize='18px' mg='0px 0px 0px 0px'>2,300</Title>
      <p>+5%</p></div>
      </div>
      <WrapIcon wd='45px' ht='45px' mgrht='0px'>
      <AiOutlineGlobal style={{width:'22.5px',height:'22.5px', color:'white'}}/> 
      </WrapIcon>
    </WrapDash>

    <WrapDash>
      <div>
      <Text pdlft='0px'>New Clients</Text>
      <div style={{display:'flex', alignItems:'center'}}>
      <Title fsize='18px' mg='0px 0px 0px 0px'>+3,052</Title>
      <p style={{color:'red'}}>-14%</p></div>
      </div>
      <WrapIcon wd='45px' ht='45px' mgrht='0px'>
      <FaWallet style={{width:'22.5px',height:'22.5px', color:'white'}}/> 
      </WrapIcon>
    </WrapDash>

    <WrapDash>
      <div>
      <Text pdlft='0px'>Total Sales</Text>
      <div style={{display:'flex', alignItems:'center'}}>

      <Title fsize='18px' mg='0px 0px 0px 0px'>$173,000</Title>
      <p>+8%</p></div>
      </div>

      <WrapIcon wd='45px' ht='45px' mgrht='0px'>
      <FaShoppingCart style={{width:'22.5px',height:'22.5px', color:'white'}}/> 
      </WrapIcon>
    </WrapDash>
    </Grid>


            <Flex>
            <WrapMini style={{flex:'3', marginRight:'20px'}}>
              <WrapMinileft>
            <div style={{flexDirection:'column', padding:'0px 0px 40px 20px',marginTop:'0px'}}>
              <Text pdlft='0px'>Built by developers</Text>
            <Title fsize='18px' mg='8px 0px 0px 0px'>Purity UI Dashboard</Title>
            <p>From colors, cards, typography to complex elements,
            you will find the full documentation.</p> </div>
            <DivText><h5>Read more</h5>
            <FiArrowRight/></DivText>
            </WrapMinileft>
            <WrapMiniRight>
              <img src={chakra} alt="" />
            </WrapMiniRight>
            </WrapMini>

            <WrapMini  flxdn='row' wd='' style={{flex:'2', padding:'0px 20px'}}>
              <WrapImg>
              <Title fsize='18px' mg='8px 0px 0px 20px' clr='var(--black-amp-white-white, #FFF);'>Work with the Rockets</Title>
              <p>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
              <DivText mg='150px 0px 0px 20px'><h5 style={{color:'var(--black-amp-white-white, #FFF'}}>Read more</h5>
            <FiArrowRight style={{color:'white'}}/></DivText>
              </WrapImg>
            </WrapMini> 
            </Flex>

            <WrapMid>

              <MidLeft>
                <img src={graphic} alt="" style={{ padding:'12px 0px 24px 0px', width:'560px'}} />
             <div className='active'> 
             <Title fsize='18px' mg='0px 0px 0px 0px'>Active Users</Title>
              <Text pdlft='0px' fwt='400'><span style={{color: 'var(--green-green-400, #48BB78)'}}>(+23)</span> than last week</Text></div>

              <WrapData mjtp='20px'>
              <MiniMid ><div className='icons'>
                <WrapIcon wd='25px' ht='25px' mgrht='10px' bdrds='7px'>
              <FaWallet style={{width:'13.5px',height:'13.5px', color:'white'}}/> 
              </WrapIcon> 
              <Text pdlft='0px'>Users</Text>
              </div>
              <Title fsize='18px' mg='7px 0px -9px 0px'>32,984</Title>
              <img src={progres} alt="" className='progress'/></MiniMid>

              <MiniMid>
              <div className='icons'><WrapIcon wd='25px' ht='25px' mgrht='10px' bdrds='7px'>
              <FaRocket style={{width:'13.5px',height:'13.5px', color:'white'}}/> 
              </WrapIcon>
              <Text pdlft='0px'>Clicks</Text></div>
              <Title fsize='18px' mg='7px 0px -9px 0px'>2,42m</Title>
              <img src={progres2} alt="" className='progress' />
              </MiniMid>
              
              <MiniMid>
              <div className='icons'><WrapIcon wd='25px' ht='25px' mgrht='10px' bdrds='7px'>
              <FaShoppingCart style={{width:'13.5px',height:'13.5px', color:'white'}}/> 
              </WrapIcon>
              <Text pdlft='0px'>Sales</Text></div>
              <Title fsize='18px' mg='7px 0px -9px 0px'>2,400$</Title>
              <img src={progres3} alt="" className='progress'/>
              </MiniMid>

              <MiniMid>
              <div className='icons'><WrapIcon wd='25px' ht='25px' mgrht='10px' bdrds='7px'>
              <FaWrench style={{width:'13.5px',height:'13.5px', color:'white'}}/> 
              </WrapIcon>
              <Text pdlft='0px'>Items</Text></div>
              <Title fsize='18px' mg='7px 0px -9px 0px'>320</Title>
              <img src={progres4} alt="" className='progress' />
              </MiniMid>
              </WrapData>
              </MidLeft>

              <MidRight>
              <Title fsize='18px' mg='20px 0px 0px 20px'>Sales overview</Title>
              <Text pdlft='20px' fwt='400'><span style={{color: 'var(--green-green-400, #48BB78)'}}>(+5) more</span> in 2021</Text>
                <img src={sales} alt="" />
                </MidRight>
            </WrapMid>

          <WrapMid>
            <MidLeft flx='4'>
            <div className='active'> 
             <Title fsize='18px' mg='0px 0px 0px 0px'>Projects</Title>
              <Text pdlft='0px' fwt='400' >
                <FaCheckCircle style={{margin:'0px 3px -1px 0px', color:'#68D391'}}/>
                <span style={{fontWeight:'700'}}>30 done</span> than last week</Text>
                </div>
                <TableSection/>
            </MidLeft>
            <MidRight flx='2'>
          

            </MidRight>
          </WrapMid>
           
    <Footer/>
    </ContainerDt>
  )
}

export default Dashboard 