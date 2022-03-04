import React from "react";
import "../../App";
import '../../../src/assets/styles/footer.css';
import Logo from "../../assets/images/white.svg";
import Madeinindia from "../../assets/images/madeinindia.png";

function Footer() {
    return (
    <div className="footerBox">
        <div className="footerLogo">
            <img src={Logo} />
            </div>
        <div className="footerColumns">
        <div>
            <h3>Contact</h3>
            <h3>FAQ's</h3>
        </div>
        <div>
            <h3>Tutorials</h3>
            <h3>Blogs</h3>
        </div>
        <div>
            <h3>Privacy</h3>
            <h3>Banned Items</h3>
        </div>
        <div>
            <h3>About</h3>
            <h3>Jobs</h3>
        </div>
        <div>
            <h3>Facebook</h3>
            <h3>Twitter</h3>
            <h3>Linkedin</h3>
        </div>
        </div>
        <hr width="1400px" />
        
        <div className="belowHR">
        <div className="rightsreserved"><h3>Dukaan 2020, All rights reserved.</h3></div>
        <div className="madeinindia"><img src={Madeinindia} /></div>
        </div>
        </div>
    );
  }
  
  export default Footer;