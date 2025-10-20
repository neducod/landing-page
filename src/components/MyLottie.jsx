import React from "react";
import Lottie from "lottie-react";
import animationData from "../PHILOSO ANIMA.json"

export default function MyLottie({ width = 300, height = 300, loop = true, autoplay = true }) {
  return (
    <div className="lottie-wrapper" >
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
      
    </div>
  );
}