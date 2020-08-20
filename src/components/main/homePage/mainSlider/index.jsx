import React, { useState, useEffect } from 'react';
import ArrowIconRight from '../../../../assets/svg_icons/arrowRight';
import ArrowIconLeft from '../../../../assets/svg_icons/arrowLeft';

import sliderImg1 from '../../../../assets/img/sliderImg1.png';
import sliderImage2 from '../../../../assets/img/sliderImage2.jpg';
import sliderImage3 from '../../../../assets/img/sliderImage3.jpg';
import sliderImage4 from '../../../../assets/img/sliderImage4.jpg';
import sliderImage5 from '../../../../assets/img/sliderImage5.jpg';
import sliderImage6 from '../../../../assets/img/sliderImage6.jpg';

const imageArr = [
  (<div className="mainSlider__img animation">
    <img src={sliderImg1} alt="" />
  </div>),
  (<div className="mainSlider__img animation">
    <img src={sliderImage2} alt="" />
  </div>),
  (<div className="mainSlider__img animation">
    <img src={sliderImage3} alt="" />
  </div>),
  (<div className="mainSlider__img animation">
    <img src={sliderImage4} alt="" />
  </div>),
  (<div className="mainSlider__img animation">
    <img src={sliderImage5} alt="" />
  </div>),
  (<div className="mainSlider__img animation">
    <img src={sliderImage6} alt="" />
  </div>)
]

function MainSlider() {

  let [position, setPosition] = useState(0);

  useEffect(() => {
    const elem = document.querySelector('.animation');
    elem.classList.remove('animation');
    setTimeout(() => {
      elem.classList.add('animation');
    }, 10);
  }, [position]);

  return (
    <div className='mainSlider' >
      <div className='mainSlider__wrapper' >
        {imageArr[position]}
        <div
          className='mainSlider__left mainSlider__arrow'
          onClick={() => {
            if (!position) {
              setPosition(imageArr.length - 1);
            } else {
              setPosition(--position);
            }
          }}
        >
          <ArrowIconLeft />
        </div>
        <div
          className='mainSlider__right mainSlider__arrow'
          onClick={() => {
            if (position === imageArr.length - 1) {
              setPosition(0);
            } else {
              setPosition(++position);
            }
          }}
        >
          <ArrowIconRight />
        </div>
      </div>
      <div className='mainSlider__dots'>
        <div className='mainSlider__dotsWrapper' >
          {
            imageArr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={index === position ? 'mainSlider__dot dot__active' : 'mainSlider__dot'}
                  onClick={() => setPosition(index)}
                >
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default MainSlider;


