/*tạo component Header*/
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'; /*hình logo trong file assets*/
import { links } from '../../Data'; /*array links có 2 thuộc tính name và path ở file Data.jsx*/
import { Link } from 'react-scroll'; /* lấy link từ thư viện react-scroll */
import { animateScroll } from 'react-scroll'; /* lấy animateScroll từ thư viện react-scroll */
import { FaStream } from 'react-icons/fa'; /*icon tắt mở menu*/
import './header.css';/*lấy file css*/

/* const <variable> = () => {...} là cách viết function chống mutation nhắc lại cho đỡ quên :v*/
const Header = () => {
    /* const [scrollHeader, setScrollHeader] = useState(false) 
       dùng useState sẽ đặt scrollHeader có state là 'false' và 
        setScrollHeader là một function được sử dụng để thay đổi state của scrollHeader */
    /* array destructuring => tạo 2 const scrollHeader và setScrollHeader */
    const [scrollHeader, setScrollHeader] = useState(false);

    const changeHeader = () => {
        /* viết React hook ở đây */
        /* nếu lăn chuột qua quá 80px theo chiều dọc 
        (tương đương với việc không nhìn thấy header nữa) */
        if (window.scrollY >= 80) {
            setScrollHeader(true)
        }
        else {
            setScrollHeader(false)
        }
    };

    /*useEffect có đối số là 1 function xử lý khi có component bị thay đổi
    (ở đây là khi có event lăn chuột trên màn hình thì thực hiện changeHeader) */
    useEffect(() => {
        {/*console.log('useEffect has been called');*/ }
        window.addEventListener('scroll', changeHeader);
    }, []);
    /* tham số thứ 2 là hàm rỗng [] để khi render Header ở main thì gọi useEffect 1 lần */

    /* trỏ lên đầu trang */
    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    const [showMenu, setShowMenu] = useState(false);

    return (
        /* cách nối string của javascript ES6 khác với cách cũ
        ví dụ: user bằng string 'abc' ; biến myuser đang lưu trữ một string nào đó
        cách cũ: var user = 'abc' + myuser
        ES6: var user = `abc${myuser}` */

        /* hiển thị header khi lăn chuột xuống quá phần header */
        /* nếu const scrollHeader có state là 'false' (chưa lăn chuột quá 80px) 
                thì className = 'scroll-header header'  
           nếu const scrollHeader có state là 'true'    
                thì className = 'header'*/
        <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
            <nav className="nav container">
                {/* lấy hình logo */}
                <Link to="/" onClick={scrollTop} className="nav__logo">
                    <img src={logo} alt="" className="nav__logo-img" />
                </Link>

                <div className={`${showMenu ? 'show-menu' : ''} nav__menu`}>
                    <ul className="nav__list">
                        {/* lấy array links và map nó vào một list với mỗi list item 
                        có tên là thuộc tính {name} và đường dẫn href là thuộc tính {path} */}
                        {links.map(({ name, path }, index) => {
                            return (
                                <li className="nav__item" key={index}>
                                    <Link
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        hashSpy={true}
                                        duration={500}
                                        to={path}
                                        className="nav__link"
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* toggle menu để làm responsive */}
                <div
                    className="nav__toggle"
                    onClick={() => setShowMenu(!showMenu)}>
                    <FaStream />
                </div>
            </nav>
        </header>
    );
};

export default Header