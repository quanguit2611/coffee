import React from 'react';
import logo from '../../assets/logo.png';
import { FaRegEnvelope, FaCaretRight, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import './footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            {/* Footer grid chứa 4 footer_content:
            content số 1 gồm logo, description, contact
            content số 2 chứa các thông tin link tới các component khác
            content số 3 ghi thời gian hoạt động
            content số 4 chứa đăng ký newsletter và các nền tảng mạng xã hội*/}
            <div className="footer__grid container grid">
                <div className="footer__content">
                    <a href="/" className="footer__logo">
                        <img src={logo} alt="" className="footer__logo-img" />
                    </a>

                    <p className="footer__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, qui dolore sapiente saepe ipsam vel modi adipisci eligendi tenetur quis? Nulla ullam incidunt voluptatum et vel, animi ducimus perferendis natus!</p>

                    <ul className="footer_contact">
                        <li className="footer__contact-item">
                            <AiOutlinePhone className='icon' /> 1 234 567 890
                        </li>

                        <li className="footer__contact-item">
                            <MdOutlineLocationOn className='icon' /> 50 Phan Xich Long, Phu Nhuan, HCMC
                        </li>

                        <li className="footer__contact-item">
                            <FaRegEnvelope className='icon' /> coffero@gmail.com
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Quick Links</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#about" className="footer__link">
                                <FaCaretRight className='icon' /> About Us
                            </a>
                        </li>

                        <li>
                            <a href="#menu" className="footer__link">
                                <FaCaretRight className='icon' /> Our Menu
                            </a>
                        </li>

                        <li>
                            <a href="#features" className="footer__link">
                                <FaCaretRight className='icon' /> Features
                            </a>
                        </li>

                        <li>
                            <a href="#gallery" className="footer__link">
                                <FaCaretRight className='icon' /> Gallery
                            </a>
                        </li>

                        <li>
                            <a href="#team" className="footer__link">
                                <FaCaretRight className='icon' /> Our Team
                            </a>
                        </li>

                        <li>
                            <a href="#reservation" className="footer__link">
                                <FaCaretRight className='icon' /> Reservation
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Opening Hours</h3>

                    <div className="footer__opening-hour">
                        <ul className="opening__hour-list">
                            <li className="opening__hour-item">
                                <span>Saturday:</span>
                                <span>09AM - 06PM</span>
                            </li>

                            <li className="opening__hour-item">
                                <span>Monday:</span>
                                <span>09AM - 06PM</span>
                            </li>

                            <li className="opening__hour-item">
                                <span>Tuesday:</span>
                                <span>09AM - 06PM</span>
                            </li>

                            <li className="opening__hour-item">
                                <span>Wednesday:</span>
                                <span>09AM - 06PM</span>
                            </li>

                            <li className="opening__hour-item">
                                <span>Thursday:</span>
                                <span>09AM - 06PM</span>
                            </li>

                            <li className="opening__hour-item">
                                <span>Friday:</span>
                                <span>09AM - 06PM</span>
                            </li>

                            <li className="opening__hour-item">
                                <span>Sunday:</span>
                                <span>Closed (╹ꇴ◠)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Newsletter</h3>

                    <p className="footer__description">Subcribe to our newsletter to receive our latest news and update</p>

                    <form action="" className="subscribe__form">
                        <input type="text" placeholder='Your Email' className="form__input subscribe__input" />

                        <button className="btn btn__flex subscribe__btn">
                            <FaRegEnvelope /> Subscribe Now
                        </button>
                    </form>

                    <div className="footer__socials">
                        <h3 className="footer__social-follow">Follow Us:</h3>

                        <div className="footer__social-links">
                            <a href="/" className="footer__social-link">
                                <FaFacebookF />
                            </a>

                            <a href="/" className="footer__social-link">
                                <FaTwitter />
                            </a>

                            <a href="/" className="footer__social-link">
                                <FaLinkedinIn />
                            </a>

                            <a href="/" className="footer__social-link">
                                <FaYoutube />
                            </a>                          
                        </div>
                    </div>
                </div>
            </div>

            <p className="copyright__text">
                &copy; Copyright 2023 <span>Coffero</span> All rights reserved
            </p>
        </footer>
    )
}

export default Footer