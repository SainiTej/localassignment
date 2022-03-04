import React from "react";
import "../../App";
import '../../../src/assets/styles/Centerpage.css';

function Centerpage() {
    return (
    <div className="centerpagewhite">
    <div className="headSection">
    <h1 className="sloganheading">Free slogan maker</h1>
    <h3 className="slogandesc">Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</h3>
    <form className="sloganform">
      <label className="inputlabel">Word for your slogan
        <br />
      <input type="text" name="sloganchoice" placeholder="cozy" className="sloganinput" />
    </label>
    </form>
    </div>
    </div>
    );
  }
  
  export default Centerpage;