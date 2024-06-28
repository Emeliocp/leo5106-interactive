/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import IMGLargeBlueVertical from "../../assets/images/Splash/Rectangle 173.svg";
import IMGGreenHorizontal from "../../assets/images/Splash/Rectangle 163.svg";
import IMGYellowCircle from "../../assets/images/Splash/Path 4013.svg";
import IMGGreyImg from "../../assets/images/Splash/Rectangle 157.svg";
import IMGBuilding from "../../assets/images/Splash/Group 382.svg";
import BTNSplashStart from "../Buttons/SplashStartButton/BTNSplashStart";
import FullscreenButton from "../Buttons/FullscreenButton/FullscreenButton";
import { Link, useNavigate } from "react-router-dom";
import StateButtonTest from "../Buttons/StateButton/StateButton";

export default function SplashPage({ containerRef }) {
  const YellowCircleRef = useRef();
  const LargeBlueVerticalRef = useRef();
  const GreenHorizontalRef = useRef();
  const GreyImgRef = useRef();
  const BuildingRef = useRef();
  const BuildingAndNameContainer = useRef();
  const SplashTitleRef = useRef();
  const SlideContainerRef = useRef();
  const nonSlideContent = useRef();
  const navigate = useNavigate();

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(GreenHorizontalRef.current, {
      x: "-100vw",
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.2,
    })
      .from(
        LargeBlueVerticalRef.current,
        {
          y: "-100%",
          duration: 1.5,
          ease: "power1.inOut",
        },
        "-=1"
      )
      .from(
        YellowCircleRef.current,
        {
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "bounce",
        },
        "-=.5"
      )
      .from(
        GreyImgRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=.5"
      )
      .fromTo(
        GreyImgRef.current,
        { rotateY: 0, scaleX: 1 },
        {
          rotateY: 360,
          scaleX: 1,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
        },
        "-=1.5"
      )
      .from(BuildingAndNameContainer.current, {
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
      })
      .from(
        SplashTitleRef.current,
        {
          x: "+100vw",
          duration: 1.5,
          ease: "bounce.inOut",
        },
        "-=1"
      );
  });

  const exitAnimation = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        navigate("/Slide2");
      },
    });

    const elementsToFade = Array.from(SlideContainerRef.current.children);

    tl.to(elementsToFade, {
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut',
      stagger: 0.1
    });

    tl.play();
  };

  const styles = {
    SplashContainer: css({
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "white",
      zIndex: "-5",
    }),
    LargeBlueVertical: css({
      position: "absolute",
      top: "-146px",
      left: "328px",
    }),
    GreenHorizontal: css({
      position: "absolute",
      top: "279px",
      left: "106px",
      zIndex: "-1",
    }),
    YellowCircle: css({
      position: "absolute",
      top: "170px",
      left: "219px",
    }),
    GreyImg: css({
      position: "absolute",
      top: "96px",
      left: "632px",
    }),
    Building: css({
      position: "absolute",
      left: "343px",
      top: "196px",
    }),
    PorterDavis: css({
      fontFamily: "'Roboto Bold', sans-serif",
      fontSize: "24px",
      color: "white",
      position: "absolute",
      left: "413px",
      top: "354px",
      padding: 0,
      margin: 0,
    }),
    SplashTitle: css({
      position: "absolute",
      left: "61px",
      top: "63px",
      color: "#006DA9",
      fontFamily: "'Roboto Medium', sans-serif",
      fontSize: "40px",
      margin: 0,
      padding: 0,
      textAlign: "left",
      lineHeight: "40px",
    }),
  };

  return (
    <div css={styles.SplashContainer}>
      <div ref={nonSlideContent}>
        <FullscreenButton appRef={containerRef} />
      </div>
      <div ref={SlideContainerRef}>
        <img
          ref={LargeBlueVerticalRef}
          alt=""
          css={styles.LargeBlueVertical}
          src={IMGLargeBlueVertical}
        />
        <img
          ref={GreenHorizontalRef}
          alt=""
          css={styles.GreenHorizontal}
          src={IMGGreenHorizontal}
        />
        <img
          ref={YellowCircleRef}
          alt=""
          css={styles.YellowCircle}
          src={IMGYellowCircle}
        />
        <img ref={GreyImgRef} alt="" css={styles.GreyImg} src={IMGGreyImg} />
        <div ref={BuildingAndNameContainer}>
          <img
            ref={BuildingRef}
            alt=""
            css={styles.Building}
            src={IMGBuilding}
          />
          <p css={styles.PorterDavis}>Porter Davis</p>
        </div>
        <p ref={SplashTitleRef} css={styles.SplashTitle}>
          Continuity <br />
          Case Study
        </p>
        <BTNSplashStart
          onClick={exitAnimation}
          xPosition="398px"
          yPosition="458px"
        />
      </div>
    </div>
  );
}
