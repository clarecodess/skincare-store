import React from 'react';
import './Header.css';
import { Search } from '@mui/icons-material';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './LoginPage.js';

function Header() {

    const [{cart}] = useStateValue();

  return (
    <div className='header'>
        <Link to='/'><img className='header-logo' src='logo.png' alt=''/></Link>
        
        <div className='header-search'>
            <input className='header-searchInput' type='text'/>
            <Search className='header-searchIcon'/>
        </div>

        
        <div className='header-nav'>
            <Link to='/login'>
            <div className='header-option'>
                <span className='header-optionLineOne'>Hello Guest</span>
                <span className='header-optionLineTwo'>Sign In</span>
            </div>
            </Link>
            <div className='header-option'>
                <span className='header-optionLineOne'>Returns</span>
                <span className='header-optionLineTwo'>& Orders</span>
            </div>
            <div className='header-option'>
                <span className='header-optionLineOne'>Your</span>
                <span className='header-optionLineTwo'>Prime</span>
            </div>

            <Link to='/checkout'>
                <div className='header-optionBasket'>
                    <ShoppingBasket />
                    <span className='header-optionLineTwo header-basketCount'>{cart?.length}</span>
                </div>
            </Link>
            
            
        </div>
    </div>
  )
}

export default Header;