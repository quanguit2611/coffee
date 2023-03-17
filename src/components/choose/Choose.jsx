import React from 'react';
import chooseImg from '../../assets/choose.jpg';
import coffeeMug from '../../assets/coffee-mug.svg';
import coffeeBeans2 from '../../assets/coffee-beans-2.svg';
import coffeeBeans3 from '../../assets/coffee-beans-3.svg';
import './choose.css';

const Choose = () => {
    return (
        <section className="choose section">
            <div className="choose__grid container grid">
                <div className="choose__content">
                    <h2 className="section__title title_left" data-title='Why Choose Us'>
                        Coffero has most of your favorite coffee
                    </h2>

                    <p className="choose__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem quas ipsam, modi exercitationem ducimus assumenda itaque fuga 
                    </p>

                    {/* choose details grid chứa các choose details items, mỗi item gồm ảnh, title và description */}
                    <div className="choose__details grid">
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeMug} alt="" className="choose__details-img" />
                            </div>

                            {/* cái này là last child bên file css*/}
                            <div>
                                <h3 className="choose__details-title">Awesome Aroma</h3>
                                <p className="choose__details-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia natus dolores quis quisquam, obcaecati, doloribus praesentium sequi ab nesciunt, maiores officiis. </p>
                            </div>
                        </div>

                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBeans2} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Pure Grades</h3>
                                <p className="choose__details-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia natus dolores quis quisquam, obcaecati, doloribus praesentium sequi ab nesciunt, maiores officiis.</p>
                            </div>
                        </div>

                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBeans3} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Healthy Coffee</h3>
                                <p className="choose__details-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia natus dolores quis quisquam, obcaecati, doloribus praesentium sequi ab nesciunt, maiores officiis.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={chooseImg} alt="" className="choose__img" />
            </div>
        </section>
    )
}

export default Choose