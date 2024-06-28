import React, { useRef, useState } from "react";
/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import gsap from "gsap";
import BtnImgNormal from "../../../assets/images/NextBtnNormal.svg";
import BtnImgHover from "../../../assets/images/NextBtnHover.svg";
import { useNavigate } from "react-router-dom";

export default function NextButton({ toSlide }) {
  const [nexticon, setNexticon] = useState(BtnImgNormal);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setNexticon(BtnImgHover);
  };

  const goToSlide = () => {
    navigate(toSlide);
  }

  const handleMouseLeave = () => {
    setNexticon(BtnImgNormal);
  };

  const styles = {
    NextButtonContainer: css({
      position: "absolute",
      left: "461px",
      top: "478px",
    }),
    icon: css({
      width: "38px",
      height: "38px",
      cursor: 'pointer',
      transition: 'All 0.5s'
    }),
  };
  return (
    <div css={styles.NextButtonContainer}>
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={goToSlide}
        css={styles.icon}
        src={nexticon}
      />
    </div>
  );
}
