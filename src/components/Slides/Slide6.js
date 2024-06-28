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
import slideBg from "../../assets/images/Slide6/Rectangle 481.svg";
import yellowCircle from "../../assets/images/Slide6/Path 5313.svg";
import blueSqaure from "../../assets/images/Slide6/Path 5316.svg";
import greyBg1 from "../../assets/images/Slide6/Path 5315.svg";
import greyBg2 from "../../assets/images/Slide6/Path 5314.svg";
import arrow1 from "../../assets/images/Slide6/Path 5317.svg";
import arrow2 from "../../assets/images/Slide6/Path 5321.svg";
import arrow3 from "../../assets/images/Slide6/Path 5318.svg";
import arrow4 from "../../assets/images/Slide6/Path 5319.svg";
import arrow5 from "../../assets/images/Slide6/Path 5320.svg";

export default function () {
  const nonSlideContent = useRef();
  const slideContent = useRef();

  const styles = {
    slide6Container: css({
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "white",
      zIndex: "-100",
    }),
    slideBg: css({
        position: 'absolute',
        left: '-90px',
        top: '-242px',
        zIndex: '-99'
    }),
    greybg1: css({
      position: "absolute",
      left: "191px",
      top: "222px",
    }),
    greybg2: css({
      position: "absolute",
      left: "118px",
      top: "334px",
    }),
    yellowCircle: css({
      position: "absolute",
      left: "389px",
      top: "220px",
    }),
    blueSquare: css({
      position: "absolute",
      left: "634px",
      top: "222px",
    }),
    headText: css({
      position: "absolute",
      left: "398px",
      top: "53px",
      fontWeight: "300",
      fontSize: "14px",
    }),
    mainText: css({
      position: "absolute",
      left: "175px",
      top: "91px",
      width: "611px",
      fontSize: "16px",
      lineHeight: "23px",
      textAlign: "center",
    }),
    greyBg1Text: css({
      position: "absolute",
      left: "232px",
      top: "245px",
      color: "white",
      fontSize: "16px",
      lineHeight: "22px",
      textAlign: "center",
    }),
    greyBg2Text: css({
      position: "absolute",
      left: "179px",
      top: "349px",
      width: "135px",
      color: "white",
      fontSize: "16px",
      lineHeight: "20px",
      textAlign: "center",
    }),
    yellowCircleText1: {
      position: "absolute",
      left: "452px",
      top: "246px",
      width: "88px",
      textAlign: "center",
      fontSize: "14px",
    },
    yellowCircleText2: {
      position: "absolute",
      left: "406px",
      top: "312px",
      width: "77px",
      textAlign: "center",
      fontSize: "14px",
    },
    yellowCircleText3: {
      position: "absolute",
      left: "506px",
      top: "312px",
      width: "92px",
      textAlign: "center",
      fontSize: "14px",
    },
    blueSquareText: css({
      position: "absolute",
      left: "654px",
      top: "278px",
      width: "173px",
      color: "white",
      fontSize: "14px",
      lineHeight: "17px",
      textAlign: "center",
    }),
    arrow1: css({
        position: 'absolute',
        left: '385px',
        top: '256px'
    }),
    arrow2: css({
        position: 'absolute',
        left: '385px',
        top: '389px'
    }),
    arrow3: css({
        position: 'absolute',
        left: '445px',
        top: '304px'
    }),
    arrow4: css({
        position: 'absolute',
        left: '537px',
        top: '304px'
    }),
    arrow5: css({
        position: 'absolute',
        left: '609px',
        top: '321px'
    }),
  };

  return (
    <div css={styles.slide6Container}>
      <div ref={nonSlideContent}>
        <Breadcrumb leftPos={"69px"} topPos={"110px"} slideNum={6} />
        <FullscreenButton />
        <BackArrowUp toSlide={"/Slide5"} />
        <NextButton toSlide={"/Slide7"} />
      </div>
      <div ref={slideContent}>
        <img css={styles.slideBg} src={slideBg}/>
        <img css={styles.greybg1} src={greyBg1} />
        <img css={styles.greybg2} src={greyBg2} />
        <img css={styles.yellowCircle} src={yellowCircle} />
        <img css={styles.blueSquare} src={blueSqaure} />
        <p css={styles.headText}>What caused the collapse?</p>
        <p css={styles.mainText}>
          Extending on this notion of unique, but overlapping, ecosystems, it
          can be argued that Porter Davis’ collapse was caused by disruption to
          other ecosystems. The collapse of PD is only one of thousands brought
          about by events well outside Australia.
        </p>
        <p css={styles.greyBg1Text}>War in Ukraine</p>
        <p css={styles.greyBg2Text}>Continued unrest in the Middle East</p>
        <p css={styles.yellowCircleText1}>Production input costs</p>
        <p css={styles.yellowCircleText2}>Surge in fuel prices</p>
        <p css={styles.yellowCircleText3}>Supply chain delays</p>
        <p css={styles.blueSquareText}>
          Affects the continuity of operations and value exchange across
          industries and on a global scale.{" "}
        </p>
        <img css={styles.arrow1} src={arrow1}/>
        <img css={styles.arrow2} src={arrow2}/>
        <img css={styles.arrow3} src={arrow3}/>
        <img css={styles.arrow4} src={arrow4}/>
        <img css={styles.arrow5} src={arrow5}/>
      </div>
    </div>
  );
}
