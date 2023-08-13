import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-black">
      <div className="row">
        <div class="col-md-3">
          <h1 className="font-weight-bold mt-5 pt-2 font-size-70px">
            <h2>NP COLLECTION</h2>
            <div className="sb_footer-below">
              <div className="sb_footer-copyright">
                <p>
                  <h6>
                    @{new Date().getFullYear()} NP COLLECTION. All right
                    reserved.
                  </h6>
                </p>
              </div>
            </div>
          </h1>
        </div>

        <div className="col-md-3">
          <h4 className="font-weight-bold mb-3">Company</h4>{" "}
          <hr className="bg-white h-2 w-50% m-l-0" />
          <p>PRODUCTIONS</p>
          <p>FIND STORE</p>
          <p>SEND US FEEDBACK</p>
        </div>

        <div className="col-md-3">
          <h4 className="font-weight-bold mb-3">MY ACCOUNT</h4> <hr />
          <p>Login</p>
          <p>CONTACT US</p>
          <p>BE A MEMBER</p>
        </div>

        <div className="col-md-3">
          <h4 className="font-weight-bold mb-3">ABOUT US </h4> <hr />
          <p>NEWS</p>
          <p>SIGN UP FOR MAIL</p>
          <p>SHIPPING & DELIVERY</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
