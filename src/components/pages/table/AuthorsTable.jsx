import React from 'react'
import { TableButton, TableFooter, TableStyleTb, Wrabtab, WraptableTb } from '../../styles/AuthorsTableStyle'
import { Title } from '../../styles/DashboardStyle'
import Esthera from '../../assets/Credits to Unsplash.comEsthera.png'
import Alexa from '../../assets/Credits to Unsplash.comAlexa.png'
import Laurent from '../../assets/Credits to Unsplash.comLaurent.png'
import Freduardo from '../../assets/Credits to Unsplash.comFreduardo.png'
import Daniel from '../../assets/Credits to Unsplash.comDaniel.png'
import Mark from '../../assets/Credits to Unsplash.comMark.png'
import { defer } from 'react-router-dom'





const AuthorsTable = () => {
  return (

<TableStyleTb style={{backgroundColor:'white', width:'96%'}}>

        <div style={{display:'flex', justifyContent:'left', width:'100%'}}>
            <Title fsize='18px' mg='20px 0px 10px 20px'>Authors Table</Title>
        </div>
        <WraptableTb style={{border:'none'}}>
        <Wrabtab style={{flex:'2',}} jfct='left'><h4>AUTHOR</h4> </Wrabtab>
        <Wrabtab ><h4 style={{paddingRight:'27px'}}>FUNCTION</h4></Wrabtab>
        <Wrabtab jfct=''><h4 style={{padding:''}}>STATUS </h4></Wrabtab>
        <Wrabtab jfct=''><h4 >EMPLOYED </h4></Wrabtab>
        <Wrabtab jfct=''><h4 ></h4></Wrabtab>
        </WraptableTb>
        
        <WraptableTb >
        <Wrabtab style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
                <img src={Esthera} alt="" />
        <div className='miniWrap'>
          <h2 style={{paddingLeft:'0px'}}>Chakra Soft UI Version</h2>
          <h3>esthera@simmmple.com</h3></div></Wrabtab>
        <Wrabtab> 
        <div className='miniWrap'>
            <h2 style={{paddingLeft:'0px'}}>Manager</h2> <h3>Organization</h3></div></Wrabtab>
        <Wrabtab><TableButton style={{ "&:hover": { backgroundColor: "#48BB78" } }}>Online</TableButton></Wrabtab>
        <Wrabtab><h2 style={{paddingLeft:'0px'}}>14/06/21</h2></Wrabtab>
        <Wrabtab><p>Edit</p></Wrabtab>
        </WraptableTb>

        <WraptableTb >
        <Wrabtab style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
        <img src={Alexa} alt="" />
        <div className='miniWrap'>
          <h2 style={{paddingLeft:'0px'}}>Add Progress Track</h2>
          <h3>alexa@simmmple.com</h3></div></Wrabtab>
        <Wrabtab>
            <div className='miniWrap'>
            <h2 style={{paddingLeft:'0px'}}>Programmer</h2> <h3>Developer</h3></div></Wrabtab>
        <Wrabtab><TableButton bg='#CBD5E0;'>Offline</TableButton></Wrabtab>
        <Wrabtab><h2 style={{paddingLeft:'0px'}}>14/06/21</h2></Wrabtab>
        <Wrabtab><p>Edit</p></Wrabtab>
        </WraptableTb>

        <WraptableTb >
        <Wrabtab style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
        <img src={Laurent} alt="" />
        <div className='miniWrap'>
          <h2 style={{paddingLeft:'0px'}}>Chakra Soft UI Version</h2>
          <h3>laurent@simmmple.com</h3></div></Wrabtab>
        <Wrabtab>
            <div className='miniWrap'>
            <h2 style={{paddingLeft:'0px'}}>Executive</h2> <h3>Projects</h3></div></Wrabtab>
        <Wrabtab><TableButton>Online</TableButton></Wrabtab>
        <Wrabtab><h2 style={{paddingLeft:'0px'}}>14/06/21</h2></Wrabtab>
        <Wrabtab><p>Edit</p></Wrabtab>
        </WraptableTb>

        <WraptableTb >
        <Wrabtab style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
        <img src={Freduardo} alt="" />
        <div className='miniWrap'>
          <h2 style={{paddingLeft:'0px'}}>Chakra Soft UI Version</h2>
          <h3>freduardo@simmmple.com</h3></div></Wrabtab>
        <Wrabtab>
            <div className='miniWrap'>
            <h2 style={{paddingLeft:'0px'}}>Manager</h2> <h3>Organization</h3></div>
        </Wrabtab>
        <Wrabtab><TableButton>Online</TableButton></Wrabtab>
        <Wrabtab><h2 style={{paddingLeft:'0px'}}>14/06/21</h2></Wrabtab>
        <Wrabtab><p>Edit</p></Wrabtab>
        </WraptableTb>

        <WraptableTb >
        <Wrabtab style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
        <img src={Daniel} alt="" />
        <div className='miniWrap'>
          <h2 style={{paddingLeft:'0px'}}>Chakra Soft UI Version</h2>
          <h3>daniel@simmmple.com</h3></div></Wrabtab>
        <Wrabtab>
            <div className='miniWrap'>
            <h2 style={{paddingLeft:'0px'}}>Programmer</h2> <h3>Developer</h3></div>
        </Wrabtab>
        <Wrabtab><TableButton bg='#CBD5E0;'>Offline</TableButton></Wrabtab>
        <Wrabtab><h2 style={{paddingLeft:'0px'}}>14/06/21</h2></Wrabtab>
        <Wrabtab><p>Edit</p></Wrabtab>
        </WraptableTb> 

        <WraptableTb>
        <Wrabtab style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
        <img src={Mark} alt="" />
        <div className='miniWrap'>
          <h2 style={{paddingLeft:'0px'}}>Chakra Soft UI Version</h2>
          <h3>mark@simmmple.com</h3></div></Wrabtab>
        <Wrabtab>
           <div className='miniWrap'>
            <h2 style={{paddingLeft:'0px'}}>Designer</h2> <h3>UI/UX Design  </h3></div>
        </Wrabtab>
        <Wrabtab><TableButton bg='#CBD5E0;'>Offline</TableButton></Wrabtab>
        <Wrabtab><h2 style={{paddingLeft:'0px'}}>14/06/21</h2></Wrabtab>
        <Wrabtab><p>Edit</p></Wrabtab>
        </WraptableTb>
    </TableStyleTb>

  )
}

export default AuthorsTable