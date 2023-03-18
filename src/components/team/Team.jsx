import React from 'react';
import chef1 from '../../assets/team-1.jpg';
import chef2 from '../../assets/team-2.jpg';
import chef3 from '../../assets/team-3.jpg';
import chef4 from '../../assets/team-4.jpg';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './team.css';

const Team = () => {
    return (
        <section className="team section" id="team">
            <h2 className="section__title" data-title='Chefs'>
                Meet Our Expertss
            </h2>

            <div className="team__grid grid container">
                {/* team item bao gồm: 
                    img, 
                    team data có 2 thuộc tính, 
                    team socials có 4 thuộc tính
                    và có 4 team item cho 4 người */}
                <div className="team__item">
                    <img src={chef1} alt="" className="team__img" />

                    <div className="team__data">
                        <h3 className="team_title">Melissa Fey</h3>
                        <p className="team__job">Senior Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaLinkedinIn />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                {/* hết người 1 */}

                <div className="team__item">
                    <img src={chef2} alt="" className="team__img" />

                    <div className="team__data">
                        <h3 className="team_title">Chad Smith</h3>
                        <p className="team__job">Expert Barista</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaLinkedinIn />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                {/*hết người 2 */}

                <div className="team__item">
                    <img src={chef3} alt="" className="team__img" />

                    <div className="team__data">
                        <h3 className="team_title">Aaron Lamar</h3>
                        <p className="team__job">Executive Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaLinkedinIn />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                {/*hết người 3*/}

                <div className="team__item">
                    <img src={chef4} alt="" className="team__img" />

                    <div className="team__data">
                        <h3 className="team__title">Tina Chance</h3>
                        <p className="team__job">Senior Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaLinkedinIn />
                        </a>

                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                {/*hết người 4*/}

            </div>
        </section>
    );
};

export default Team