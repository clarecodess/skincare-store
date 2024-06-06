import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from '../firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';
import { collection, doc, query, orderBy, onSnapshot } from "firebase/firestore";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'users', user?.uid, 'orders'), orderBy('created', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })));
      });

      return () => unsubscribe(); // Clean up subscription on unmount
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders-order'>
        {orders?.map(order => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
