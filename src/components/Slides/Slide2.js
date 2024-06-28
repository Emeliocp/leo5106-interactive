/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useNavigate } from "react-router-dom";
import FullscreenButton from "../Buttons/FullscreenButton/FullscreenButton";
import BackArrowUp from "../Buttons/BackButton/BackButton.js";
import LargeGreyBGImage from "../../assets/images/Slide2/Rectangle 198.svg";
import Slide2Illustration from "../../assets/images/Slide2/Group 399.svg";
import Breadcrumb from "../Breadcrumb/Breadcrumb.js";
import NextButton from "../Buttons/NextButton/NextButton.js";
import Slide3 from "./Slide3.js";

export default function Slide2({ containerRef }) {
  const nonSlideContent = useRef();
  const slideContent = useRef();
  const navigate = useNavigate();

  const backNav = () => {
    navigate("/");
  };

  const styles = {
    Slide2Container: css({
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "white",
      zIndex: "-100",
    }),
    BgImage: css({
      position: "absolute",
      left: "-90px",
      top: "241px",
      zIndex: "-99",
    }),
    Slide2Illustration: css({
      position: "absolute",
      left: "305px",
      top: "127px",
    }),
    HeadingText: css({
      position: "absolute",
      left: "382px",
      top: "53px",
      fontWeight: "300",
      fontSize: "14px",
    }),
    SlideText: css({
      position: "absolute",
      left: "175px",
      top: "320px",
      width: "611px",
      textAlign: "center",
      fontSize: "16px",
      lineHeight: "23px",
    }),
    nonSlideContent: css({
      position: "relative",
    }),
  };

  return (
    <div css={styles.Slide2Container}>
      <div ref={nonSlideContent}>
        <FullscreenButton appRef={containerRef} />
        <BackArrowUp toSlide={"/"} />
        <NextButton toSlide={"/Slide3"}/>
        <Breadcrumb leftPos={"69px"} topPos={"110px"} slideNum={2} />
      </div>
      <div ref={slideContent}>
        <img css={styles.BgImage} src={LargeGreyBGImage} alt="" />
        <img css={styles.Slide2Illustration} src={Slide2Illustration} />
      </div>
      <p css={styles.HeadingText}>What happened to Porter Davis?</p>
      <p css={styles.SlideText}>
        The collapse of the Australian construction company Porter Davis (PD)
        had significant economic and social impacts (Kolovos 2023). As a result
        of the collapse, homes were left unfinished, homeowners feared their
        deposits were lost, and suppliers feared they would not be paid (Black &
        McCubbing 2023; Johnston et al. 2023).
      </p>
    </div>
  );
}
