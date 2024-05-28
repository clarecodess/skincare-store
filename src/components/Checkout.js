import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className='checkout-img' src='checkoutpagebanner.jpg' alt=''/>
            <div>
                <h2 className='checkout-title'>Your Cart</h2>
            </div>
        </div>

        <div className='checkout-right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout