import React from 'react';
import aboutImg from '../../assets/about-img.jpg'; /* lấy hình about trong file Data.jsx*/
import { FiCheck } from 'react-icons/fi';
import './about.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about__grid container grid">
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="" className="about__img" />
                </div>

                <div className="about__content">
                    <h2 className="section__title title_left" data-title='About Us'>
                        Fresh Quality And Organic Tasty Coffee House For You
                    </h2>

                    <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magni asperiores fugiat facilis id. Ipsum, omnis. Adipisci ab ex aliquid placeat exercitationem quas, assumenda quidem, ad possimus ipsa accusantium recusandae.</p>

                    <div className="about__details grid">
                        <p className="about__details-description">
                            <FiCheck />
                            At vero eos et accusamus
                        </p>

                        <p className="about__details-description">
                            <FiCheck />
                            At vero eos et accusamus
                        </p>

                        <p className="about__details-description">
                            <FiCheck />
                            At vero eos et accusamus
                        </p>
                    </div>

                    <a href="#team" className="btn">
                        Our Experts
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About