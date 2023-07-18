import React from 'react'
import { TableStyle, Wraptable } from '../../styles/TableSection'
import avatars1 from '../../assets/Avatars Group 3 (Horizontal)5.png'
import avatars2 from '../../assets/Avatars Group 3 (Horizontal)2.png'
import percent60 from '../../assets/Progress60%.png'
import process10 from '../../assets/Progress10%.png'
import TableIcon1 from '../icons/tableIcons/TableIcon1'
import TableIcon02 from '../icons/tableIcons/TableIcon2'




const TableSection = () => {
  return (
    <TableStyle>
        <Wraptable style={{border:'none'}}>
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><h4>COMPANIES</h4></div>
        <div className='wrabtab'><h4>MEMBERS </h4></div>
        <div className='wrabtab'><h4>BUDGET </h4></div>
        <div className='wrabtab'><h4>COMPLETION </h4></div>
        </Wraptable>
        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><TableIcon1/><h2>Chakra Soft UI Version</h2></div>
        <div className='wrabtab'><img src={avatars1} alt="" /></div>
        <div className='wrabtab'><h2>$14,000 </h2></div>
        <div className='wrabtab'><img src={percent60} alt="" /></div>
        </Wraptable>
        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><TableIcon02/><h2>Add Progress Track</h2></div>
        <div className='wrabtab'><img src={avatars2} alt="" /></div>
        <div className='wrabtab'><h2>$3,000</h2></div>
        <div className='wrabtab'><img src={process10} alt="" /></div>
        </Wraptable>
        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><h2>Fix Platform Errors</h2></div>
        <div className='wrabtab'><h2>MEMBERS </h2></div>
        <div className='wrabtab'><h2>BUDGET </h2></div>
        <div className='wrabtab'><h2>COMPLETION </h2></div>
        </Wraptable>
        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><h2>COMPANIES</h2></div>
        <div className='wrabtab'><h2>MEMBERS </h2></div>
        <div className='wrabtab'><h2>BUDGET </h2></div>
        <div className='wrabtab'><h2>COMPLETION </h2></div>
        </Wraptable>
        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><h2>COMPANIES</h2></div>
        <div className='wrabtab'><h2>MEMBERS </h2></div>
        <div className='wrabtab'><h2>BUDGET </h2></div>
        <div className='wrabtab'><h2>COMPLETION </h2></div>
        </Wraptable> <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><h4>COMPANIES</h4></div>
        <div className='wrabtab'><h4>MEMBERS </h4></div>
        <div className='wrabtab'><h4>BUDGET </h4></div>
        <div className='wrabtab'><h4>COMPLETION </h4></div>
        </Wraptable>
    </TableStyle>
    
  )
}

export default TableSection