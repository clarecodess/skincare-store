import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{cart, user}, dispatch] = useStateValue(); 
  return (
    <div className='payment'>
        <div className='payment-container'>
            <h1>Checkout <Link to='/checkout'>{cart?.length} item(s)</Link></h1>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment-address'>
                    <p>{user?.email}</p>
                    <p>432 Fictional Lane</p>
                    <p>Fake Town, NBO</p>
                </div>
            </div>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className='payment-items'>
                {cart.map(item => (<CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        />
                    ))}
                </div>
            </div>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Payment Method</h3>
                    <div className='payment-details'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment