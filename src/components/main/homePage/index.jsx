import React from 'react';
import MainSlider from './mainSlider';
import Stories from './stories';
import SingleCarousel from './singlCarusel';
import BestSellers from './bestSellers';
import Stors from './stors';
import red1 from '../../../assets/img/red1.png';
import red2 from '../../../assets/img/red2.png';

function HomePage() {
  return (
    <div className="homePage">
      <div className='homePage__largeWrapper largeWrapper' >
        <MainSlider />
      </div>
      <div className='homePage__title' >
        <div className='homePage__titleWrapper'>
          <div className='homePage__titleImg' >
            <img src={red1} alt="logo" />
          </div>
          <p>STORIES</p>
        </div>
      </div>
      <div className='homePage__stories stories' >
        <Stories />
      </div>
      <div className='homePage__title homePage__title2' >
        <div className='homePage__titleWrapper'>
          <div className='homePage__titleImg' >
            <img src={red2} alt="logo" />
          </div>
          <p>JUST ARRIVED</p>
        </div>
      </div>
      <div className='homePage__singlCarusel singlCarusel' >
        <SingleCarousel />
      </div>
      <div className='homePage__title homePage__title3' >
        <div className='homePage__titleWrapper'>
          <div className='homePage__titleImg' >
            <img src={red1} alt="logo" />
          </div>
          <p>EXCLUSIVE</p>
        </div>
      </div>
      <div className='homePage__singlCarusel singlCarusel' >
        <SingleCarousel />
      </div>
      <div className='homePage__title homePage__title2' >
        <div className='homePage__titleWrapper'>
          <div className='homePage__titleImg' >
            <img src={red2} alt="logo" />
          </div>
          <p>BESTSELLERS</p>
        </div>
      </div>
      <div className='homePage__bestSellers bestSellers' >
        <BestSellers />
      </div>
      <div className='homePage__title homePage__title4' >
        <div className='homePage__titleWrapper'>
          <div className='homePage__titleImg' >
            <img src={red1} alt="logo" />
          </div>
          <p>RECOMMENDED FOR YOU</p>
        </div>
      </div>
      <div className='homePage__singlCarusel singlCarusel' >
        <SingleCarousel />
      </div>
      <div className='homePage__title homePage__title2' >
        <div className='homePage__titleWrapper'>
          <div className='homePage__titleImg' >
            <img src={red2} alt="logo" />
          </div>
          <p>OUR LOCATIONS</p>
        </div>
      </div>
      <div className='homePage__locations locations' >
        <Stors />
      </div>
    </div>
  )
};

export default HomePage;