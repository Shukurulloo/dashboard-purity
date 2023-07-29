import React from 'react'
import { TableStyle, Wraptable } from '../../styles/TableSection'
import percent60 from '../../assets/Progress60%.png'
import process10 from '../../assets/Progress10%.png'
import TableIcon1 from '../icons/tableIcons/TableIcon1'
import TableIcon02 from '../icons/tableIcons/TableIcon2'
import progress100 from '../../assets/Progress100%.png'
import TableIcon3 from '../icons/tableIcons/TableIcon3'
import TableIcon4 from '../icons/tableIcons/TableIcon4'
import TableIcon5 from '../icons/tableIcons/TableIcon5'
import progress25 from '../../assets/Progress25%.png'

import { FiMoreVertical } from 'react-icons/fi'


const TableSection2 = () => {
  return (
    <TableStyle>
        <Wraptable style={{border:'none'}}>
        <div className='wrabtab' style={{flex:'2',paddingLeft:'0px'}}>
            <h4>COMPANIES</h4>
            </div>
        <div className='wrabtab'>
            <h4 style={{paddingLeft:'10px'}}>BUDGET </h4>
            </div>
        <div className='wrabtab'>
            <h4 style={{paddingLeft:'10px'}} >BUDGET </h4>
            </div>
        <div className='wrabtab'>
            <h4 >COMPLETION </h4>
            </div>
        </Wraptable>

        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
            <TableIcon1/>
            <h2>Chakra Soft UI Version</h2>
            </div>
        <div className='wrabtab'>
            <h2>$14,000 </h2>
            </div>
        <div className='wrabtab'>
            <h2>Working</h2>
            </div>    
        <div className='wrabtab'>
            <img src={percent60} alt="" style={{width: '125px',height:'24px;', borderRadius: '0px'}}/>
             <FiMoreVertical color='#A0AEC0'style={{marginRight:'25px'}}/>
             </div>
        </Wraptable>

        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
            <TableIcon02/>
            <h2>Add Progress Track</h2>
            </div>
        <div className='wrabtab'>
            <h2>$3,000</h2>
            </div>
        <div className='wrabtab'>
            <h2>Canceled</h2>
            </div>
        <div className='wrabtab'>
            <img src={process10} alt="" style={{width: '125px',height:'24px;', borderRadius: '0px'}} />
            <FiMoreVertical color='#A0AEC0'style={{marginRight:'25px'}}/>
            </div>
        </Wraptable>

        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
            <TableIcon3/>
            <h2>Fix Platform Errors</h2>
            </div>
        <div className='wrabtab'>
            <h2>Not set </h2>
            </div>
        <div className='wrabtab'>
            <h2>Done</h2>
            </div>
        <div className='wrabtab'>
            <img src={progress100} alt=""style={{width: '125px',height:'24px;', borderRadius: '0px'}}/>
            <FiMoreVertical color='#A0AEC0'style={{marginRight:'25px'}}/>
            </div>
        </Wraptable>

        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
            <TableIcon4/>
            <h2>Launch our Mobile App</h2>
            </div>
        <div className='wrabtab'>
            <h2>$32,000 </h2>
            </div>
        <div className='wrabtab'>
            <h2>Done</h2>
            </div>
        <div className='wrabtab'>
            <img src={progress100} alt="" style={{width: '125px',height:'24px;', borderRadius: '0px'}}/>
            <FiMoreVertical color='#A0AEC0'style={{marginRight:'25px'}}/>
            </div>
        </Wraptable>

        <Wraptable >
        <div className='wrabtab' style={{flex:'2', justifyContent:'left', paddingLeft:'0px'}}>
            <TableIcon5/>
            <h2>Add the New Pricing Page</h2>
            </div>
        <div className='wrabtab'>
            <h2>$400 </h2>
            </div>
        <div className='wrabtab'>
            <h2>Working</h2>
            </div>
        <div className='wrabtab'>
            <img src={progress25} alt="" style={{width: '125px',height:'24px;', borderRadius: '0px'}}/>
            <FiMoreVertical color='#A0AEC0'style={{marginRight:'25px'}}/>
            </div>
        </Wraptable>
    </TableStyle>
    
  )
}

export default TableSection2