import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import pic from '../Assets/images/team1.webp';
import pic2 from '../Assets/images/team_slide1.jpg';
import pic3 from '../Assets/images/slide2.webp';


const Media = () => {
  return (
    <div className='media'>
        <div className="container">
        <h2>In the Media</h2>
        <Swiper
      spaceBetween={30}
      centeredSlides={false}
      loop={true}
      autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
      }}
      breakpoints={{
        576:{
            slidesPerView: 1,
            spaceBetween: 5,
        
        },
          768: {
              slidesPerView: 2,
              spaceBetween: 5,
          },

          992: {
              slidesPerView: 2,
              spaceBetween: 20,
          },

          1200: {
              slidesPerView: 2,
              spaceBetween: 30,
          },
      }}
    //   pagination={{
    //       clickable: true,
    //   }}
      navigation={true}
    //   modules={[Autoplay, Navigation]}
      className="mySwiper" 
    >
      <SwiperSlide>
        <div className="villatex">
            <img src={pic}/>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ipsa qui sint quos ad in suscipit placeat accusamus rem, nesciunt fugiat labore veniam,
            </p>
            <div className="jackson">
                <img src={pic2}/>
                <div className="student">
                    <h3>Andrew Jackson</h3>
                    <p>STUDENT</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="villatex">
            <img src={pic3}/>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ipsa qui sint quos ad in suscipit placeat accusamus rem, nesciunt fugiat labore veniam,
            </p>
            <div className="jackson">
                <img src={pic2}/>
                <div className="student">
                    <h3>Andrew Jackson</h3>
                    <p>STUDENT</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="villatex">
            <img src={pic3}/>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ipsa qui sint quos ad in suscipit placeat accusamus rem, nesciunt fugiat labore veniam,
            </p>
            <div className="jackson">
                <img src={pic2}/>
                <div className="student">
                    <h3>Andrew Jackson</h3>
                    <p>STUDENT</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="villatex">
            <img src={pic3}/>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ipsa qui sint quos ad in suscipit placeat accusamus rem, nesciunt fugiat labore veniam,
            </p>
            <div className="jackson">
                <img src={pic2}/>
                <div className="student">
                    <h3>Andrew Jackson</h3>
                    <p>STUDENT</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
    
    </Swiper>
    </div>

    </div>
  )
}

export default Media