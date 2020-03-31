import React from 'react';
import './header.scss';
import Logo from '../images/logo-airport.png';

const Header = () => {
    return ( 
        <header className="header">
            <div className="header-logo">
                <img className="header-logo__img" src={Logo} alt="Logo"/>
            </div>
            <nav className="header-nav">
                <div className="header-nav__btn">For passengers</div>
                <div className="header-nav__btn">IEV services</div>
                <div className="header-nav__btn">VIP</div>
                <div className="header-nav__btn">Partnership</div>
                <div className="header-nav__btn">UA</div>
            </nav>
        </header>
     );
}
 
export default Header;
