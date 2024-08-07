import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getCartTotal } from './reducer';
import { NumericFormat } from 'react-number-format';
import axios from './axios';
import { db } from '../firebase';
import { collection, doc, setDoc } from "firebase/firestore";

function Payment() {
  const navigate = useNavigate();
  const [{ cart, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post(`/payments/create?total=${getCartTotal(cart) * 100}`);
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      const userOrdersRef = collection(db, 'users', user?.uid, 'orders');
      const orderRef = doc(userOrdersRef, paymentIntent.id);
      setDoc(orderRef, {
        cart: cart,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      });

      setSuccess(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_CART'
      });

      navigate('/orders', { replace: true });
    });
  };

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

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
            <p>Utopia, Narnia</p>
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment-items'>
            {cart.map(item => (
              <CheckoutProduct
                key={item.id}
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
          </div>
            <div className='payment-details'>
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className='payment-price-container'>
                  <NumericFormat
                    renderText={(value) => (
                      <h3 className='order-total'>Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType='text'
                    thousandSeparator={true}
                    prefix={'KES'}
                  />
                  <button disabled={processing || disabled || success}>
                    <span>{processing ? <p>PROCESSING...</p> : "BUY NOW"}</span>
                  </button>
                  <p>You have to be signed in to make an order</p>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Payment;
