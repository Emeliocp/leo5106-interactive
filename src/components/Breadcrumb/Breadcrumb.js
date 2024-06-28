/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef } from "react";
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

  return (
    <div css={styles.breadcrumbContainer} ref={breadcrumbRef}>
      <img src={bcBackground} alt="" />
      {btnPositions.map((_, index) => (
        <img
          key={index}
          css={styles.slide(index)}
          src={determineSlideState(index + 1)}
          alt=""
        />
      ))}
      {btnPositions.map((_, index) => (
        <img
          key={index}
          css={styles.bcCompletedPath(index)}
          src={bcCompletedPath}
          alt=""
        />
      ))}
    </div>
  );
}
