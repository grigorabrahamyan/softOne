import React from 'react';
import SearchIcon from '../../assets/svg_icons/searchIcon';
import LovesIcon from '../../assets/svg_icons/lovesIcon';
import LoginIcon from '../../assets/svg_icons/loginIcon';
import CartIcon from '../../assets/svg_icons/cartIcon';

function Header() {
  return (
    <div className='header' >
      <div className='header__lagreWrapper largeWrapper' >
        <div className='header__wrapper wrapper' >
          <div className='header__controls' >
            <div className='header__search' >
              <input type="text" placeholder="Search" />
              <SearchIcon />
            </div>
            <div className='header__logo' >
              <p>Logo</p>
            </div>
            <div className='header__control'>
              <div className='header__cart' >
                <CartIcon />
                <div className='header__cartQuantity' >
                  <p>1</p>
                </div>
              </div>
              <LovesIcon />
              <div className='header__loginPlace' >
                <p>Login</p>
                <LoginIcon />
              </div>
            </div>
          </div>
          <div className='header__nav' >
            <nav>
              <ul>
                <li className='bold' ><p>SHOP</p></li>
                <li><p>NEW</p></li>
                <li><p>BRANDS</p></li>
                <li><p>GIFTS</p></li>
                <li><p>SALE & PROMOTIONS</p></li>
                <li><p>COMMUNITY</p></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;