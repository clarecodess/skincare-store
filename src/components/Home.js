import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            <img className='home-image' src='homepagebanner.png' alt=''/>
            <div className='home-row'>
              <Product 
              id='1'
              title='BYOMA BRIGHTENING SERUM'
              image='product_images/byoma-serum.avif'
              price={1300}
              rating={4}/>
              <Product 
              id='2'
              title="PAULA'S CHOICE SKIN PERFECTING 6% MANDELIC ACID AND 2% LACTIC ACID LIQUID EXFOLIANT"
              image='product_images/paulaschoice.avif'
              price={3500}
              rating={3}/>
              <Product 
              id='3'
              title='GLOW RECIPE WATERMELON GLOW NIACINAMIDE HUE DROPS'
              image='product_images/glowrecipe.avif'
              price={3300}
              rating={4}/>
            </div>
            <div className='home-row'>
              <Product 
              id='4'
              title='BIOSSANCE SQUALANE + MARINE ALGAE EYE CREAM'
              image='product_images/biossance.avif'
              price={4500}
              rating={2}/>
              <Product 
              id='5'
              title='DRUNK ELEPHANT BORA BARRIER REPAIR CREAM'
              image='product_images/drunkelephant.avif'
              price={6800}
              rating={5}/>
              <Product 
              id='6'
              title='CAUDALIE VINOPERFECT BRIGHTENING MICROPEEL FOAM'
              image='product_images/caudalie.avif'
              price={2500}
              rating={4}/>
            </div>
            <div className='home-row'>
              <Product 
              id='7'
              title='SUMMER FRIDAYS LIP BUTTER BALM '
              image='product_images/summerfridays.avif'
              price={1800}
              rating={3}/>
              <Product 
              id='8'
              title="CHARLOTTE TILBURY CHARLOTTE'S MAGIC CREAM"
              image='product_images/charlottetilbury.avif'
              price={5200}
              rating={4}/>
              <Product 
              id='9'
              title='BYOMA MOISTURISING GEL CREAM'
              image='product_images/byomagel.avif'
              price={3000}
              rating={4}/>
            </div>
        </div>
    </div>
  )
}

export default Home