import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import singlCarusel1 from '../../../../assets/img/singlCarusel1.png';

const options = {
  items: 4,
  nav: true,
  rewind: true,
  autoplay: true,
  margin: 27,
  loop: true
};

function SingleCarousel() {

  useEffect(() => {
    const elem = document.querySelectorAll('.singlCarusel .owl-nav>div');
    const arr = Array.from(elem);
    arr.forEach(item => {
      item.innerHTML = '';
    });
  }, []);

  return (
    <div className='singlCarusel__wrapper wrapper' >
      <OwlCarousel options={options} >
        <div className='singlCarusel__item' >
          <div className='singlCarusel__img' >
            <img src={singlCarusel1} alt="singlCarusel" />
          </div>
          <div className='singlCarusel__itemBody' >
            <div className='singlCarusel__itemText' >
              <p>Women collection</p>
            </div>
            <div className='singlCarusel__itemInfo' >
              <div className='singlCarusel__itemInfoText' >
                <p>Women collection</p>
                <p>125 000Դ</p>
              </div>
              <div className='singlCarusel__itemInfoBtn singlCaruselBtn' >
                <div className='singlCaruselBtn__btn' >
                  <button>
                    <div className='singlCaruselBtn__innerText' >
                      <p>Add to cart</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  )
};

export default SingleCarousel;


