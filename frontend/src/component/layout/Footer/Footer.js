import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
const Footer = () => {
  return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>Download our app</h4>
                <p>Download app for android and ios </p>
                <img src={playStore} alt="playstore"/>
                <img src={appStore} alt="Appstore"/>
            </div>
            <div className="midFooter">
            <h1>Ecommerce</h1>
                <p>Copyrights 2022 &copy; Mayank Agarwal</p>
            </div>
            <div className="rightFooter">
                <h4>Follow us</h4>
                <a href="http://instagram.com/mayank_.ag">Instagram</a>
                <a href="http://instagram.com/mayank_.ag">Youtube</a>
                <a href="http://instagram.com/mayank_.ag">Facebook</a>
            </div>
        </footer>
  )
}

export default Footer