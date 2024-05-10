import React from "react";
import footerLogo from "../../assets/images/footer-logo.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <section id="footer">
            <div className="container footer">
                <div className="footer__row">
                    <img src={footerLogo} alt="img" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="footer__row">
                    <h3>Contact us</h3>
                    <ul>
                        <li>
                            <a href="email:info@example.com">
                                E: info@example.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+94 7670000000">+94 7670000000</a>
                        </li>
                        <li>
                            <a href="#">
                                A: 123 Hospital rd, Kalubowila, Dehiwela
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__row">
                    <h3>Useful links</h3>
                    <ul>
                        <li>
                            <a href="#">Shop All</a>
                        </li>
                        <li>
                            <a href="#">Tempered Glass</a>
                        </li>
                        <li>
                            <a href="#">Back-cover</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__row">
                    <ul>
                        <li>
                            <a href="#">Whatsapp</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Tik Tok</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
