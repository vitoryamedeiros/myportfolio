import React from "react";
import "./Footer.css";

const Footer = () => (
    <div className="footer__bg footer__bg__dark">
        <div className="footer__container container grid">
            <div className="footer__header">
                <h1 className="footer__title">Vitórya Medeiros</h1>
                <span className="footer__subtitle">Software Developer and UX/UI Designer</span>
            </div>
             
            <div className="footer__socials">
                <a href="https://www.instagram.com/vitorya_m2/" class="footer__social" target="_blank">
                    <i className=" uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/vitoryamedeiros" className="footer__social" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
                
                <a href="https://wa.me/5581984688022" className="footer__social" target="_blank">
                    <i className="uil uil-whatsapp"></i>
                </a>
                
                <a href="https://www.instagram.com/_vitoryamedeiros/" class="footer__social" target="_blank">
                    <i className="uil uil-instagram"></i>
                </a>
            </div>

            <p className="footer__copy">&#169; Vitórya Medeiros. All right reserved.</p>
        </div>
        <a href="#home" className="arrow-up back-to-top" onclick="scrollToTop()">
            <span className="left-arm"></span>
            <span className="right-arm"></span>
            <span className="arrow-slide"></span>
        </a>
    </div>
);

export default Footer;