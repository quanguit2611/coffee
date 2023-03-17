/*tạo component Header*/
import React from 'react';
import logo from '../../assets/logo.png'; /*hình logo trong file assets*/
import { links } from '../../Data'; /*array links có 2 thuộc tính name và path ở file Data.jsx*/
import { FaStream } from 'react-icons/fa'; /*icon tắt mở menu*/
import './header.css';/*lấy file css*/

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                {/* lấy hình logo */}
                <a href="/" className="nav__logo">
                    <img src={logo} alt="" className="nav__logo-img" />
                </a>

                {/* lấy array links và map nó vào một list với mỗi list item 
                có tên là thuộc tính {name} và đường dẫn href là thuộc tính {path} */}
                <div className="nav__menu">
                    <ul className="nav__list">
                        {links.map(({ name, path }, index) => {
                            return (
                                <li className="nav__item" key={index}>
                                    <a href={path} className="nav__link">{name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* toggle menu để làm responsive */}
                <div className="nav__toggle">
                    <FaStream />
                </div>
            </nav>
        </header>
    );
};

export default Header