import React, { useState } from 'react';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { FaHeart } from "react-icons/fa";
import '../images.scss';
import Link from '../components/Link';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <header >
            <h1> LOGO</h1>
            <nav className={click ? "nav-options active" : "nav-options"}>
                <Link href="/" onClick={closeMobileMenu}>Home</Link>
                <Link href="/likedimages" onClick={closeMobileMenu}>Liked images <FaHeart className="Icon" /></Link>
            </nav>
            {/* <div> */}
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <CloseMenu className="menu-icon" />
                    ) : (
                        <MenuIcon className="menu-icon" />
                    )}
                {/* </div> */}
            </div>
        </header>
    )
};

export default Header;
