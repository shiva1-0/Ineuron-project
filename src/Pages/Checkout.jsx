import React from 'react'
import './CSS/LoginSignUp.css'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Shipping Address</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="text " placeholder='Your Address' />
            <input type="phone number" placeholder='Phone Number'/>
            <input type="email" placeholder='Email Id'/>
          </div>
          
          
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to proceed to payment</p>

          </div>
          <Link to = '/payment'><button>Pay Now</button></Link>
        </div>
        
      </div>
      )
}

export default Checkout
