import React, { Component } from 'react';
import ReactSwiper from 'react-swiper';
import slide1 from '../../asset/img/slide1.jpg'
import slide2 from '../../asset/img/slide2.jpg'
import slide3 from '../../asset/img/slide3.jpg'

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperItem: this.getInitData()
    }
  }
  getInitData () {
    return [
      {
        url: slide1
      },
      {
        url: slide2
      },
      {
        url: slide3
      }
    ]
  }
  
  handleLeftSwipe() {

  }

  render() {
    return (
      <div className="swiper-wrapper">
        <ReactSwiper className="swipe-container" swipeOptions={{continuous: false}} onSwipeLeft={this.handleLeftSwipe}>
          {
            this.state.swiperItem.map((n, index) => {
              return <img src={n.url} key={index}/>
            })
          }
        </ReactSwiper>
      </div>
    );
  }
}

export default Swiper;
