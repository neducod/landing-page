// import React from "react";
import Lottie from "lottie-react";
import animationData from "../PHILOSO ANIMA.json"

import React, { useRef, useEffect } from "react";



//  export default function MyLottie({ onStart, onEnd }) {
//    const lottieRef = useRef();

//    useEffect(() => {
//      const anim = lottieRef.current;

//      anim?.addEventListener("DOMLoaded", () => onStart && onStart());
//      anim?.addEventListener("complete", () => onEnd && onEnd());

//      return () => {
//       anim?.removeEventListener("DOMLoaded", () => onStart && onStart());
//        anim?.removeEventListener("complete", () => onEnd && onEnd());
//      };
//   }, [onStart, onEnd]);

//    return <Lottie lottieRef={lottieRef} animationData={animationData} loop={false} />;
// }


 export default function MyLottie({ width = 300, height = 300, loop = true, autoplay = true }) {
   return (
     <div className="lottie-wrapper" >
       <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
      
     </div>
   );
}