import React,  { Component } from "react";
import "../../App";
import '../../../src/assets/styles/Centerpage.css';
import cancelicon from "../../assets/images/cancel.png";
import Slogan1 from "../Slogan/Slogan1";
import Slogan2 from "../Slogan/Slogan2";
import Slogan3 from "../Slogan/Slogan3";
import Card from "../Card/Card";
import Features from "../Features/Features";

function Centerpage() {
    return (
    <div className="centerpagewhite">
    <div className="headSection">
    <h1 className="sloganheading">Free slogan maker</h1>
    <h3 className="slogandesc">Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</h3>
    <form className="sloganform">
      <label className="inputlabel">Word for your slogan
        <br />
      <input type="text" name="sloganchoice" className="sloganinput" placeholder="cozy"/>
    </label>
    </form>
    <button className="generatesloganbtn">Generate Slogan</button>


    <hr className="headHR" />

    <div className="centerpagehead-btn">
    <div className="centerpagehead"><p>We have generated 1,023 slogans for “cozy”</p></div>
    <div><button className="centerpagebtn">Download All</button></div>
    </div>

    <div className="sloganrow1">
    <div><Slogan1 /></div>
    <div><Slogan2 /></div>
    </div>
    <div className="sloganrow1">
    <div><Slogan1 /></div>
    <div><Slogan3 /></div>
    </div>
    <div className="sloganrow1">
    <div><Slogan3 /></div>
    <div><Slogan2 /></div>
    </div>
    <div className="sloganrow1">
    <div><Slogan1 /></div>
    <div><Slogan2 /></div>
    </div>
    <div className="sloganrow1">
    <div><Slogan1 /></div>
    <div><Slogan2 /></div>
    </div>
    <div className="sloganrow1">
    <div><Slogan1 /></div>
    <div><Slogan2 /></div>
    </div>
    <div className="sloganrow1">
    <div><Slogan1 /></div>
    <div><Slogan2 /></div>
    </div>
    <div className="sloganrow1">
    <div><Slogan1 /></div>
    <div><Slogan2 /></div>
    </div>
    <div className="sloganrow1">
    <div><Slogan1 /></div>
    <div><Slogan2 /></div>
    </div>
   
    </div>
    <Features />
    <Card />
    </div>
    
    );
  }
  
  export default Centerpage;