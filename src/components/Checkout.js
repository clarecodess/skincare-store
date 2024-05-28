import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{cart}] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className='checkout-img' src='checkoutpagebanner.jpg' alt=''/>
            <div>
                <h2 className='checkout-title'>Your Cart</h2>
                {cart.map(item => (
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
                
            </div>
        </div>

        <div className='checkout-right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout