import React from 'react'
import { TableStyle, Wraptable } from '../../styles/TableSection'
import avatars1 from '../../assets/Avatars Group 3 (Horizontal)5.png'
import avatars2 from '../../assets/Avatars Group 3 (Horizontal)2.png'
import percent60 from '../../assets/Progress60%.png'
import process10 from '../../assets/Progress10%.png'
import TableIcon1 from '../icons/tableIcons/TableIcon1'
import TableIcon02 from '../icons/tableIcons/TableIcon2'
import progress100 from '../../assets/Progress100%.png'
import TableIcon3 from '../icons/tableIcons/TableIcon3'
import avatars4 from '../../assets/Avatars Group 3 (Horizontal)4.png'
import TableIcon4 from '../icons/tableIcons/TableIcon4'
import TableIcon5 from '../icons/tableIcons/TableIcon5'
import progress25 from '../../assets/Progress25%.png'
import progress40 from '../../assets/Progress40%.png'
import Tableicon6 from '../icons/tableIcons/Tableicon6'


const TableSection = () => {
  return (
    <TableStyle>
        <Wraptable style={{border:'none'}}>
        <div className='wrabtab' style={{flex:'2'}}><h4>COMPANIES</h4></div>
        <div className='wrabtab'><h4 >MEMBERS </h4></div>
        <div className='wrabtab'><h4 style={{paddingLeft:'10px'}}>BUDGET </h4></div>
        <div className='wrabtab'><h4 >COMPLETION </h4></div>
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
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><TableIcon3/><h2>Fix Platform Errors</h2></div>
        <div className='wrabtab'><img src={avatars2} alt="" /></div>
        <div className='wrabtab'><h2>Not set </h2></div>
        <div className='wrabtab'><img src={progress100} alt="" /></div>
        </Wraptable>
        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><TableIcon4/><h2>Launch our Mobile App</h2></div>
        <div className='wrabtab'><img src={avatars4} alt="" /></div>
        <div className='wrabtab'><h2>$32,000 </h2></div>
        <div className='wrabtab'><img src={progress100} alt="" /></div>
        </Wraptable>
        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><TableIcon5/><h2>Add the New Pricing Page</h2></div>
        <div className='wrabtab'><img src={avatars1} alt="" /></div>
        <div className='wrabtab'><h2>$400 </h2></div>
        <div className='wrabtab'><img src={progress25} alt="" /></div>
        </Wraptable> <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'20px'}}><Tableicon6/><h2>Redesign New Online Shop</h2></div>
        <div className='wrabtab'><img src={avatars2} alt="" /></div>
        <div className='wrabtab'><h2>$7,600 </h2></div>
        <div className='wrabtab'><img src={progress40} alt="" /></div>
        </Wraptable>
    </TableStyle>
    
  )
}

export default TableSection