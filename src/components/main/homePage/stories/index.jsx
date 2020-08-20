import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import stories1 from '../../../../assets/img/stories1.png';
import stories2 from '../../../../assets/img/stories2.png';

const options = {
  items: 8,
  nav: true,
  rewind: true,
  autoplay: true,
  margin: 27,
  loop: true
};

function Stories() {

  useEffect(() => {
    const elem = document.querySelectorAll('.stories .owl-nav>div');
    const arr = Array.from(elem);
    arr.forEach(item => {
      item.innerHTML = '';
    });
  }, []);

  return (
    <div className='stories__wrapper wrapper' >
      <OwlCarousel options={options} >
        <div className='stories__storiesItem storiesItem' >
          <div className='storiesItem__borderRed' >
            <div className='storiesItem__borderWhite' >
              <div className='storiesItem__img' >
                <img src={stories1} alt="stories" />
              </div>
            </div>
          </div>
        </div>
        <div className='stories__storiesItem storiesItem' >
          <div className='storiesItem__borderRed' >
            <div className='storiesItem__borderWhite' >
              <div className='storiesItem__img' >
                <img src={stories2} alt="stories" />
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  )
};

export default Stories;


