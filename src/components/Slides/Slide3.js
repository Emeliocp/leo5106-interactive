/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useNavigate } from "react-router-dom";
import FullscreenButton from "../Buttons/FullscreenButton/FullscreenButton";
import BackArrowUp from "../Buttons/BackButton/BackButton";
import backgroundImg from "../../assets/images/Slide3/Rectangle 199.svg";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import NextButton from "../Buttons/NextButton/NextButton";
import illustrationBg from "../../assets/images/Slide3/Rectangle 201.svg";
import illustrationBookFirstFromRight from "../../assets/images/Slide3/Rectangle 151.svg";
import illustrationBookSecondFromRight from "../../assets/images/Slide3/Rectangle 153.svg";
import illustrationBookThirdFromRight from "../../assets/images/Slide3/Rectangle 154.svg";
import illustrationBookFourthFromRight from "../../assets/images/Slide3/Rectangle 155.svg";
import illustrationBookFifthFromRight from "../../assets/images/Slide3/Rectangle 156.svg";
import illustrationBookSixthYellowFromRight from "../../assets/images/Slide3/Group 400.svg";
import illustrationHardHat from "../../assets/images/Slide3/Group 374.svg";

export default function Slide3({ containerRef }) {
  const nonSlideContent = useRef();
  const styles = {
    slide3Container: css({
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "white",
      zIndex: "-100",
    }),
    BgImage: css({
      position: "absolute",
      left: "-104px",
      top: "-61px",
      zIndex: "-99",
    }),
    ilustrationBg: css({
      position: "absolute",
      left: "252px",
      top: "109px",
    }),
    illustrationFirstBookFromLeft: css({
      position: "absolute",
      left: "629px",
      top: "166px",
    }),
    illustrationSecondBookFromLeft: css({
      position: "absolute",
      left: "555px",
      top: "166px",
    }),
    illustrationThirdBookFromLeft: css({
      position: "absolute",
      left: "482px",
      top: "166px",
    }),
    illustrationFourthBookFromLeft: css({
      position: "absolute",
      left: "407px",
      top: "163px",
    }),
    illustrationFifthBookFromLeft: css({
      position: "absolute",
      left: "336px",
      top: "173px",
    }),
    illustrationSixthBookFromLeft: css({
      position: "absolute",
      left: "262px",
      top: "188px",
    }),
    illustrationHardHat: css({
      position: "absolute",
      left: "355px",
      top: "166px",
    }),
    slideText: css({
        position: 'absolute',
        left: '175px',
        top: '319px',
        width: '611px',
        textAlign: 'center',
        lineHeight: '23px'
    })
  };
  return (
    <div css={styles.slide3Container}>
      <div ref={nonSlideContent}>
        <Breadcrumb leftPos={"69px"} topPos={"110px"} slideNum={3} />
        <FullscreenButton appRef={containerRef} />
        <BackArrowUp toSlide={"/Slide2"} />
        <NextButton toSlide={"/Slide4"}/>
      </div>
      <div>
        <img css={styles.BgImage} src={backgroundImg} />
        <img css={styles.ilustrationBg} src={illustrationBg} />
        <img
          css={styles.illustrationFirstBookFromLeft}
          src={illustrationBookFirstFromRight}
        />
        <img
          css={styles.illustrationSecondBookFromLeft}
          src={illustrationBookSecondFromRight}
        />
        <img
          css={styles.illustrationThirdBookFromLeft}
          src={illustrationBookThirdFromRight}
        />
        <img
          css={styles.illustrationFourthBookFromLeft}
          src={illustrationBookFourthFromRight}
        />
        <img
          css={styles.illustrationFifthBookFromLeft}
          src={illustrationBookFifthFromRight}
        />
        <img
          css={styles.illustrationSixthBookFromLeft}
          src={illustrationBookSixthYellowFromRight}
        />
        <img css={styles.illustrationHardHat} src={illustrationHardHat} />
        <p css={styles.slideText}>
          Like a set of dominos, the collapse of one construction company
          threatened a broad swathe of immediate stakeholders and their
          stakeholders.
        </p>
      </div>
    </div>
  );
}
