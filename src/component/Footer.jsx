import React from "react";
import { fontAwesomeIcon } from "react-fontawesome ";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb_fotter-links_div">
            <h4>Resoures</h4>
            <a href="/resource">
              <p>Resource Center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Patners</h4>
            <a href="/employer">
              <p>Swing Tech</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Coming Soon</h4>
            <div className="socialMedia">
              <p>
                <img src={"fa-brands fa-facebook"} alt="" />
              </p>
              <p>
                <img src={"fa-sharp fa-light fa-envelope"} alt="" />
              </p>
              <p>
                <img src={"fa-brands fa-telegram"} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
