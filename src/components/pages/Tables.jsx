import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/footer'
import { ContainerTb, TablesFooter, TablesTitle, WrapTable } from '../styles/TablesStyle'
import AuthorsTable from './table/AuthorsTable'
import { FaCheckCircle } from 'react-icons/fa'
import { Title } from '../styles/DashboardStyle'
import { Text } from '../styles/SideBarStyle'
import { FiMoreVertical } from 'react-icons/fi'
import TableSection2 from './table/TablesSection2'

const Tables = () => {
  return (
    <ContainerTb>
         <Navbar/>
         <div style={{width:'100%',display:'flex', justifyContent:'flex-start',}}>
          <TablesTitle> Tables </TablesTitle>
          </div>
          <AuthorsTable/>
          <TablesFooter>
          <div className='wrapIcon'>
            <div className='actives'> 
             <Title fsize='18px' mg='0px 0px 0px 0px'>Projects</Title>
              <Text pdlft='0px' fwt='400' >
                <FaCheckCircle style={{margin:'0px 3px -1px 0px', color:'#68D391'}}/>
                <span style={{fontWeight:'700'}}>30 done</span>this month</Text>
                </div>
          
                </div>
                <TableSection2/>
          </TablesFooter>
    <Footer/>
    </ContainerTb>
  )
}

export default Tables