import React from "react";
import "../../App";
import '../../../src/assets/styles/header.css';
import Logo from "../../assets/images/white.svg";

function Header() {
    return (
       <div className="headerBox">
           <div className="dukaanLogo">
            <img src={Logo} />
           </div>
           <div className="headerRightSection">
             <h3 className="signinbutton" >Sign In</h3>
            <button className="pcDownloadButton">Dukaan for PC</button>
           </div>
       
       </div>
    );
  }
  
  export default Header;
  