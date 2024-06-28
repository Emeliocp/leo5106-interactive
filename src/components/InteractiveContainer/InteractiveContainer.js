import React, { useRef } from "react";
import style from "./InteractiveContainer.module.css";
import FullscreenButton from "../Buttons/FullscreenButton/FullscreenButton.js";
import SplashSlide from "../Slides/Splash.js";

export default function InteractiveContainer({ appRef }) {

  return (
    <div className={style.InteractiveContainer}
    ref={appRef}>
      <FullscreenButton appRef={appRef} />
      <SplashSlide/>
    </div>
  );
}
