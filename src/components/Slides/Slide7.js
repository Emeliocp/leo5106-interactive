/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import BackArrowUp from "../Buttons/BackButton/BackButton";
import NextButton from "../Buttons/NextButton/NextButton";
import FullscreenButton from "../Buttons/FullscreenButton/FullscreenButton";
import illustrationBg from "../../assets/images/Slide7/Rectangle 201.svg";
import illustration from "../../assets/images/Slide7/Group 386.svg";
import ContinueButton from "../Buttons/ContinueButton/ContinueLarge";

export default function Slide7({ containerRef }) {
  const nonSlideContent = useRef();
  const slideContent = useRef();

  const styles = {
    slide7Container: css({
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "white",
      zIndex: "-100",
    }),
    illustrationBg: css({
      position: "absolute",
      left: "252px",
      top: "109px",
    }),
    illustration: css({
      position: "absolute",
      left: "346px",
      top: "94px",
    }),
    mainText: css({
        position: 'absolute',
        left: '175px',
        top: '292px',
        width: '611px',
        textAlign: 'center',
        lineHeight: '23px'
    }),
    seeMoreText: css({
        position: 'absolute',
        left: '395px',
        top: '403px',
        fontSize: '15px',
        fontStyle: 'italic',
        color: '#102F81'
    })
  };

  return (
    <div css={styles.slide7Container}>
      <div ref={nonSlideContent}>
        <Breadcrumb leftPos={"69px"} topPos={"110px"} slideNum={7} />
        <FullscreenButton appRef={containerRef} />
        <BackArrowUp toSlide={"/Slide6"} />
        <ContinueButton toSlide={"/Slide8"}/>
      </div>
      <div ref={slideContent}>
        <img css={styles.illustrationBg} src={illustrationBg} />
        <img css={styles.illustration} src={illustration} />
        <p css={styles.mainText}>
          Porter Davis’ closure can be directly related to these global
          dynamics, demonstrating the interdependence of states, organisations,
          and consumers within global economic, social, and geopolitical
          systems.
        </p>
        <p css={styles.seeMoreText}>See more on global crises</p>
      </div>
    </div>
  );
}
