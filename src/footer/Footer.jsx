import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h3 className="footer-container__title">For passengers</h3>
                <span className="footer-container__item">Flight schedule</span>
                <span className="footer-container__item">Ordering services</span>
                <span className="footer-container__item">Contact information</span>
                <span className="footer-container__item">Site map</span>
            </div>
            <div className="footer-container">
                <h3 className="footer-container__title">Partnership</h3>
                <span className="footer-container__item">Main</span>
                <span className="footer-container__item">Airport features</span>
                <span className="footer-container__item">Training center</span>
                <span className="footer-container__item">Vacancies</span>
            </div>
            <div className="footer-container">
                <h3 className="footer-container__title">Make us a call</h3>
                <span className="footer-container__item">+38 (800) 900 900</span>
                <span className="footer-container__item">Ordering services</span>
                <span className="footer-container__item">Contact information</span>
                <span className="footer-container__item">Site map</span>
            </div>
        </footer>
    );
}

export default Footer;