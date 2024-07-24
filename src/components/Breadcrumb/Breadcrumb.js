/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import bcBackground from "../../assets/images/Slide2/BcGreyBar.svg";
import bcUnseenCircle from "../../assets/images/Slide2/BcUnseenCircleGrey.svg";
import bcSeenCircle from "../../assets/images/Slide2/BcSeenSlide.svg";
import bcCurrentSlide from "../../assets/images/Slide2/BcCurrentSlide.svg";
import bcCompletedPath from "../../assets/images/Slide2/BcCompletedPath.svg";

export default function Breadcrumb({ leftPos, topPos, slideNum }) {
  const btnLeftPos = "-7px";
  const btnPositions = [
    { top: "0px" },
    { top: "51px" },
    { top: "102px" },
    { top: "153px" },
    { top: "204px" },
    { top: "255px" },
    { top: "306px" },
  ];

  const breadcrumbRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (breadcrumbRef.current) {
      gsap.fromTo(
        breadcrumbRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
    }
  }, [slideNum]);

  const styles = {
    breadcrumbContainer: css({
      position: "absolute",
      left: leftPos,
      top: topPos,
    }),
    slide: (index) => css({
      position: "absolute",
      left: btnLeftPos,
      top: btnPositions[index].top,
      zIndex: "10",
      border: 'none',
      background: 'none',
      margin: '0',
      padding: '0',
      height: '16px',
      cursor: index + 1 === slideNum ? "default" : "pointer",
      "&:focus": {
        outline: "2px solid #7F9A0A",
        borderRadius: '60px'
      },
    }),
    bcCompletedPath: (index) => css({
      position: "absolute",
      left: "0px",
      top: btnPositions[index].top,
      zIndex: "0",
      opacity: slideNum >= index + 2 ? 1 : 0,
    }),
  };

  const determineSlideState = (btnNumber) => {
    if (btnNumber < slideNum) return bcSeenCircle;
    if (btnNumber === slideNum) return bcCurrentSlide;
    return bcUnseenCircle;
  };

  const handleSlideChange = (index) => {
    if (index === 0) {
      navigate(`/`);
    } else if (index + 1 !== slideNum) {
      navigate(`/Slide${index + 1}`);
    }
  };

  return (
    <div css={styles.breadcrumbContainer} ref={breadcrumbRef}>
      <img src={bcBackground} alt="" />
      {btnPositions.map((_, index) => (
        <button
          key={index}
          css={styles.slide(index)}
          onClick={() => handleSlideChange(index)}
          title={`Slide ${index + 1}`}
          aria-label={`Go to Slide ${index + 1}`}
          aria-current={index + 1 === slideNum ? "page" : undefined}
          tabIndex={0} // Make the button focusable
        >
          <img
            src={determineSlideState(index + 1)}
            alt={`Slide ${index + 1} ${index + 1 === slideNum ? "(current)" : ""}`}
          />
        </button>
      ))}
      {btnPositions.map((_, index) => (
        <img
          key={index + btnPositions.length}
          css={styles.bcCompletedPath(index)}
          src={bcCompletedPath}
          alt=""
        />
      ))}
    </div>
  );
}
