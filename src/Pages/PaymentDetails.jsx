import React from 'react'
import './CSS/PaymentDetails.css'
import { Link } from 'react-router-dom'
const PaymentDetails = () => {
    return (
        <div className='Payment'>
        <div className="Payment-container">
          <h1>Pay with Card</h1>
          <div className="Payment-fields">
            <h4>Email</h4>
            <input type="email" placeholder='Email Address' />
            <h4>Card Information</h4>
            <input type="text" placeholder='Card Number' />
           
                <input type="text" placeholder='MM/YY' />
                <input type="text" placeholder='CVC' />
            
            
            <h4>Name on card</h4>
            <input type="text" placeholder='Card Holder Name' />
            <h4>Billing address</h4>
            
                <input type="text " placeholder='Address line 1' />
                <input type="text " placeholder='Address line 2' />
                <input type="text " placeholder='State' />
                <input type="text " placeholder='City' />
                <input type="number " placeholder='PinCode' />
            
          </div>
          <Link to='/orderplaced'><button>Pay</button></Link>
          
        </div>
        
      </div>
      )
}

export default PaymentDetails
