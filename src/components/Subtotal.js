import React from 'react';
import './Subtotal.css';
import { NumericFormat } from 'react-number-format';
import { useStateValue } from './StateProvider';



function Subtotal() {

  const [{cart}] = useStateValue();
  return (
    <div className='subtotal'>
        <NumericFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({cart.length} items): <strong>0</strong>
                    </p>
                    <small className='subtotal-gift'>
                        <input type='checkbox'/>This order contains a gift
                    </small>
                </>
            )
            
          }
          decimalScale={2}
          value={0}
          displayType='text'
          thousandSeparator={true}
          prefix={'KES'}
        />

        <button><strong>PROCEED TO CHECKOUT</strong></button>
    </div>
  )
}

export default Subtotal