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
import illustration1Bg from "../../assets/images/Slide4/Ellipse 54.svg";
import illustration2Bg from "../../assets/images/Slide4/Rectangle 203.svg";
import illustration3Bg from "../../assets/images/Slide4/Rectangle 202.svg";
import illustration1 from "../../assets/images/Slide4/Mask Group 1.svg";
import illustration2 from "../../assets/images/Slide4/Group 400.svg";
import illustration3 from "../../assets/images/Slide4/Group 401.svg";

export default function Slide4() {
  const nonSlideContent = useRef();
  const slideContent = useRef();

  const styles = {
    slide4Constainer: css({
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "white",
      zIndex: "-100",
    }),
    illustration1Bg: css({
      position: "absolute",
      left: "203px",
      top: "104px",
      zIndex: "-1",
    }),
    illustration2Bg: css({
      position: "absolute",
      left: "144px",
      top: "254px",
    }),
    illustration3Bg: css({
      position: "absolute",
      left: "242px",
      top: "245px",
      zIndex: "-3",
    }),
    illustration1: css({
      position: "absolute",
      left: "203px",
      top: "104px",
      zIndex: "-1",
    }),
    illustration2: css({
      position: "absolute",
      left: "174px",
      top: "303px",
    }),
    illustration3: css({
      position: "absolute",
      left: "359px",
      top: "285px",
    }),
    headText: css({
      position: "absolute",
      left: "410px",
      top: "53px",
      fontWeight: "300",
      fontSize: "14px",
    }),
    mainText: {
      position: "absolute",
      left: "555px",
      top: "155px",
      fontSize: "16px",
      lineHeight: "23px",
      width: "325px",
      "& p": {
        marginBottom: "4px",
        marginTop: '12px'
      },
    },
  };

  return (
    <div css={styles.slide4Constainer}>
      <div ref={nonSlideContent}>
        <Breadcrumb leftPos={"69px"} topPos={"110px"} slideNum={4} />
        <FullscreenButton />
        <BackArrowUp toSlide={"/Slide3"} />
        <NextButton toSlide={"/Slide5"}/>
      </div>
      <div ref={slideContent}>
        <img css={styles.illustration1Bg} src={illustration1Bg} />
        <img css={styles.illustration2Bg} src={illustration2Bg} />
        <img css={styles.illustration3Bg} src={illustration3Bg} />
        <img css={styles.illustration1} src={illustration1} />
        <img css={styles.illustration2} src={illustration2} />
        <img css={styles.illustration3} src={illustration3} />
        <p css={styles.headText}>What were the effects?</p>
        <div css={styles.mainText}>
          <p>
            The workers employed by PD’s suppliers rightly feared for their
            wages.
          </p>{" "}
          <p>
            The companies who leased those workers their equipment and trucks
            rightly feared for their monthly lease payments.
          </p>{" "}
          <p>
            The local councils that promoted their social and economic wellbeing
            rightly feared the loss of new residents and so on.
          </p>
        </div>
      </div>
    </div>
  );
}
