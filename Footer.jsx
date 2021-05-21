import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="footerdata">
            <div>
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Cookie policy</a>
                </li>
                <li>
                  <a href="#">Get the app</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="copyright">Follow Us On:</p>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <div />
            <div />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: "10vh",
            marginTop:"5vh",
            alignItems:"center"
          }}
        >
          <p >© 2020 XYZ, All rights reserved</p>
          <div >
            <p className="copyright">Designed and Developed by</p>
            <img scr="" alt="logo" />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
