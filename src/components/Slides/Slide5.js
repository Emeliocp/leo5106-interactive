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
import slideBgImg from "../../assets/images/Slide5/Rectangle 198.svg";
import circlePieceSmall from "../../assets/images/Slide5/Path 5070.svg";
import circlePieceMedium from "../../assets/images/Slide5/Path 5071.svg";
import circlePieceLarge from "../../assets/images/Slide5/Path 5072.svg";
import circleWhole from "../../assets/images/Slide5/Path 5073.svg";
import illustration from "../../assets/images/Slide5/Group 402.svg";

export default function Slide5({ containerRef }) {
  const nonSlideContent = useRef();
  const slideContent = useRef();

  const styles = {
    Slide5Container: css({
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "white",
      zIndex: "-100",
    }),
    slideBg: css({
      position: "absolute",
      left: "-90px",
      top: "241px",
      zIndex: "-99",
    }),
    circlePieceSmall: css({
      position: "absolute",
      left: "632px",
      top: "138px",
    }),
    circlePieceMedium: css({
      position: "absolute",
      left: "574px",
      top: "124px",
    }),
    circlePieceLarge: css({
      position: "absolute",
      left: "490px",
      top: "120px",
    }),
    circleWhole: css({
      position: "absolute",
      left: "320px",
      top: "120px",
    }),
    illustration: css({
      position: "absolute",
      left: "294px",
      top: "152px",
    }),
    slidetext: css({
        position: 'absolute',
        left: '175px',
        top: '345px',
        width: '611px',
        textAlign: 'center',
        lineHeight: '23px'
    })
  };

  return (
    <div css={styles.Slide5Container}>
      <div ref={nonSlideContent}>
        <Breadcrumb leftPos={"69px"} topPos={"110px"} slideNum={5} />
        <FullscreenButton appRef={containerRef}  />
        <BackArrowUp toSlide={"/Slide4"} />
        <NextButton toSlide={"/Slide6"}/>
      </div>
      <div ref={slideContent}>
        <img css={styles.slideBg} src={slideBgImg} />
        <img css={styles.circlePieceSmall} src={circlePieceSmall} />
        <img css={styles.circlePieceMedium} src={circlePieceMedium} />
        <img css={styles.circlePieceLarge} src={circlePieceLarge} />
        <img css={styles.circleWhole} src={circleWhole} />
        <img css={styles.illustration} src={illustration} />
        <p css={styles.slidetext}>
          Therefore, one company’s collapse threw a broad range of direct and
          indirect stakeholders into uncertainty about their ability to maintain
          their continuity within their unique, but overlapping, ecosystems of
          value exchange.
        </p>
      </div>
    </div>
  );
}
