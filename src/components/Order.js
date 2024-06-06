import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import { NumericFormat } from 'react-number-format'


function Order({order}) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className='order-id'><small>{order.id}</small></p>
        {order.data.cart?.map( item => (
            <CheckoutProduct 
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                hideButton
            />
        ))}
        <NumericFormat
                    renderText={(value) => (
                      <h3 className='order-total'>Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType='text'
                    thousandSeparator={true}
                    prefix={'KES'}
                  />
    </div>
  )
}

export default Order