import React,  { Component } from "react";
import "../../App";
import '../../../src/assets/styles/Centerpage.css';
import '../../../src/assets/styles/features.css';
import firstimg from "../../assets/images/firstfeature.svg";
import secondimg from "../../assets/images/secondfeature.svg";
import thirdimg from "../../assets/images/thirdfeature.svg";


function Features() {
    return (
    <div className="threefeatures">
     <div className="featurebox">
         <img src={firstimg} />
         <h1>Search</h1>
         <p>Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.</p>
     </div>
     <div className="featurebox">
         <img src={secondimg} />
         <h1>Select</h1>
         <p>Choose from thousands of options generated by the slogan maker that fit your needs.</p>
     </div>
     <div className="featurebox">
         <img src={thirdimg} />
         <h1>Stand Out</h1>
         <p>Congrats on your new slogan. It's time to win the world!</p>
     </div>
    </div>
    );
  }
  
  export default Features;