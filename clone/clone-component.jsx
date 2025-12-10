import React from "react";
import { CloneStyle } from "./clone-style";

const CloneComponent = () => {
  return (
    <CloneStyle>
        <div className="up"></div>
       <div className="top">
        <div className="v">velora Living</div>
        <div className="nav">
        <div className="h">Home</div>
        <div className="e">Explore</div>
        <div className="a">About Us</div>
        <div className="t">Trending</div>
        <div className="c">Contact</div>
        </div>
        <div className="s">Sign In</div>
        <div className="r">Register</div>
       </div>
       <div className="two">
        <div className="two-1"> 
            <div className="letter1">
                <div className="p1">Furniture That Elevates Your Space</div>
                <div className="p2">crafted for comfort. Designed for modern living.</div>
            </div>
            <div className="letter2">
                <div className="sn">Shop Now</div>
                <div className="ck">Check New Arrivals</div>
            </div>
        </div>
        <div className="two-2">
            <img src="https://creatersteel.com/wp-content/uploads/2022/10/blog-9.jpg" alt="Furniture" className="img"/>
        </div>
       </div>
    </CloneStyle>
     );
};

export default CloneComponent;