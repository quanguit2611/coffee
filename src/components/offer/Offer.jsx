import React from 'react';
import { offer } from '../../Data'; /* lấy offer từ Data.jsx */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import './offer.css';

const Offer = () => {
    return (
        <section className="offer section" id="offer">
            <h2 className="section__title" data-title='Offer'>
                Special Offer For You
            </h2>

            {/* tạo slider bằng swiper */}
            <Swiper spaceBetween={30} pagination={{ clickable: true }} modules={[Pagination]} className="container">
                {/* map offer với các thuộc tính img, title, discount, description vào offer__item */}
                {offer.map(({ img, title, discount, description }, index) => {
                    return (
                        <SwiperSlide className='offer__item' key={index}>
                            <div className="offer__img-wrapper">
                                <img src={img} alt="" className="offer__img" />
                            </div>

                            <div className="offer__content">
                                <h3 className="offer__title">{title}</h3>
                                <span className="offer__discount">{discount}</span>
                                <p className="offer__description">{description}</p>

                                <a href='/' className='btn'>
                                    Order Now
                                </a>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default Offer