/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BtnIcon from "../../../assets/images/Splash/Path 5309.svg";
import { useNavigate } from "react-router-dom";

export default function ContinueButton({ toSlide }) {
  const backgroundRef = useRef();
  const BtnIconRef = useRef();
  const mountTl = gsap.timeline();
  const navigate = useNavigate();

  useGSAP(() => {
    mountTl.from(backgroundRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      //delay: 2.5,
    });
  });

  const handleMouseEnter = () => {
    const tl = gsap.timeline();

    gsap.to(backgroundRef.current, {
      scale: 1.1, // Scale up to 1.1 times its size
      duration: 0.1,
      ease: "power1.inOut",
      transformOrigin: "center center", // Center of the element
    });

    tl.to(BtnIconRef.current, {
      y: -3,
      duration: 0.3,
      ease: "power1.inOut",
    })
      .to(BtnIconRef.current, {
        y: 7,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(BtnIconRef.current, {
        y: 0,
        duration: 0.1,
        ease: "power1.inOut",
      });
  };

  const handleMouseLeave = () => {
    gsap.to(backgroundRef.current, {
      scale: 1, // Return to original size
      duration: 0.1,
      ease: "power1.inOut",
      transformOrigin: "center center",
    });
  };

  const handleClick = () => {
    navigate(toSlide);
    //gsap.to(backgroundRef.current, {opacity: 0, duration: 1, ease: 'power1.in', delay: 3})
  };

  const styles = {
    BtnContainer: css({
      position: "absolute",
      textAlign: "center",
      top: "458px",
      left: "398px",
    }),
    BtnBackground: css({
      width: "165px",
      height: "165px",
      borderRadius: "50%",
      backgroundColor: "#102F81",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "24px",
      justifyContent: "start",
      transition: "transform 0.1s ease",
      cursor: "pointer",
    }),
    BtnText: css({
      paddingBottom: "0",
      marginTop: "0",
      marginBottom: "5px",
      color: "white",
      fontFamily: "'Roboto Regular', sans-serif",
      background: 'none',
      border: 'none',
      "&:focus": {
        outline: "2px solid white"
      }
    }),
    BtnIcon: css({
      margin: "0",
      padding: "5px 0px 0px 0px",
      width: "21px",
    }),
  };

  return (
    <div css={styles.BtnContainer}>
      <div
        css={styles.BtnBackground}
        ref={backgroundRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <button css={styles.BtnText}>Continue</button>
        <img css={styles.BtnIcon} src={BtnIcon} ref={BtnIconRef} />
      </div>
    </div>
  );
}
