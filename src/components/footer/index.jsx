import React from 'react';
import FbIcon from '../../assets/svg_icons/fbIcon';
import InstagramIcon from '../../assets/svg_icons/instagramIcon';
import masterCart from '../../assets/img/masterCart.png';
import paypal from '../../assets/img/paypal.png';
import visa from '../../assets/img/visa.png';

function Footer() {
  return (
    <div className="footer">
      <div className='footer__lagreWrapper largeWrapper' >
        <div className='footer__wrapper wrapper' >
          <div className='footer__shares' >
            <div className='footer__sharesLogo' >
              <p>Logo</p>
            </div>
            <FbIcon />
            <InstagramIcon />
          </div>
          <div className='footer__info' >
            <p>©2020 All rights reserved.</p>
          </div>
          <div className='footer__payment' >
            <div className='footer__paypal paymentsIcon' >
              <img src={paypal} alt="Paypal" />
            </div>
            <div className='footer__visa paymentsIcon' >
              <img src={visa} alt="Visa" />
            </div>
            <div className='footer__masterCart paymentsIcon' >
              <img src={masterCart} alt="MasterCart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;