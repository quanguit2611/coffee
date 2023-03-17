import React from 'react';
import { features } from '../../Data'; /* Lấy features bên file Data.jsx*/
import shape from '../../assets/shape.png'; /*Lấy hình shape bên assets*/
import "./features.css";

const Features = () => {
    return (
        <section className="features section" id="features">
            <h2 className="section__title" data-title='Features'>
                Our Best Features
            </h2>


            <div className="features__grid container grid">
                {/* lấy array features nạp vào từng div, mỗi div mang các thuộc tính
                img, title và description */}
                {features.map(({ img, title, description }, index) => {
                    return (
                        <div className="features__item" key={index}>
                            <img src={img} alt="" className="feature__img" />

                            <h3 className="feature__title">{title}</h3>
                            <p className="feature__description">{description}</p>

                            {/* lấy hình hạt cà phê kế bên (cho nó đẹp :D) */}
                            <img src={shape} alt="" className="feature__shape" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features