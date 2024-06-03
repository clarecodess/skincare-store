import React from 'react';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, image, title, price }) {

    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id
        })
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image}/>
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <button onClick={removeFromCart}><strong>REMOVE FROM CART</strong></button>
        </div>
    </div>
  )
}

export default CheckoutProduct