import React from 'react'
import { Orderdata, Ordericons, ViewStyle } from '../../styles/OverViewStyle'
import { FaBell, FaShoppingCart} from 'react-icons/fa'
import OverIcon1 from '../icons/overviewIcons/OverIcon1'
import { BsCreditCard2BackFill } from 'react-icons/bs'
import OverView2 from '../icons/overviewIcons/OverView2'
import TableIcon1 from '../icons/tableIcons/TableIcon1'

const OverView = () => {
  return (
    <ViewStyle>
        <Ordericons> 
            <FaBell  size={'14px'} style={{color:'#4FD1C5', margin:'0px 0px 0px 0px'}}/>
        <div></div>
        <OverIcon1 />
        <div></div>
        <FaShoppingCart  size={'14px'} color='#4FD1C5'/> 
        <div></div>
        <BsCreditCard2BackFill size={'14px'} style={{color:'#4FD1C5'}}/>
        <div></div>
        <OverView2  size={'14px'}/>
        <div></div> 
        <TableIcon1 />
        <div style={{height:'18px'}}></div> 
        </Ordericons>

        <Orderdata>
        <div><h3>$2400, Design changes</h3>
         <p>22 DEC 7:20 PM</p></div>
         <div><h3>New order #4219423</h3>
        <p>21 DEC 11:21 PM</p></div>
        <div><h3>Server Payments for April</h3>
        <p>21 DEC 9:28 PM</p></div>
        <div>  <h3>New card added for order #3210145</h3>
        <p>20 DEC 3:52 PM</p></div>
        <div> <h3>Unlock packages for Development</h3>
        <p>19 DEC 11:35 PM</p></div>
        <div><h3>New order #9851258</h3>
        <p>18 DEC 4:41 PM</p></div>

        </Orderdata>
    </ViewStyle>
  )
}

export default OverView