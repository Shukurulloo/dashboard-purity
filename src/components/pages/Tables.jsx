import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/footer'
import { ContainerTb, TablesTitle, WrapTable } from '../styles/TablesStyle'
import TableSection from './table/TableSection'

const Tables = () => {
  return (
    <ContainerTb>
         <Navbar/>
         <div style={{width:'100%',display:'flex', justifyContent:'flex-start',}}>
          <TablesTitle> Tables </TablesTitle>
          </div>
        <WrapTable>
        <TableSection/>
        </WrapTable>
    <Footer/>
    </ContainerTb>
  )
}

export default Tables