/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import BackButtonUpNormal from "../../../assets/images/Slide2/BackArrowUpNormal.svg";
import BackButtonUpHover from "../../../assets/images/Slide2/BackArrowUpHover.svg";
import { useNavigate } from "react-router-dom";

export default function BackArrowUp({ onClick, toSlide }) {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonSize, setButtonSize] = useState(["22px", "12px"]);
  const navigate = useNavigate();

  const goToSlide = () => {
    navigate(toSlide)
  }

  const styles = {
    BackArrowUpContainer: css({
      position: "relative",
      top: "-36px",
      left: "49%",
      zIndex: "1001",
    }),
    BackButton: css({
      padding: "0",
      margin: "0",
      width: "35px",
      height: "35px",
      background: "none",
      border: "none",
      cursor: "pointer",
      outline: "none",
    }),
    icon: css({
      position: "absolute",
      top: "0px",
      left: "0px",
      width: buttonSize[0],
      height: buttonSize[1],
      transition: "all 0.3s ease",
    }),
    normal: css({}),
    hover: css({
      left: "-3px",
    }),
    visible: css({
      opacity: "1",
    }),
    hidden: css({
      opacity: "0",
    }),
  };

  const handleClick = () => {
    if (onClick) {
        onClick();
    }
  }

  return (
    <div css={styles.BackArrowUpContainer}>
      <button
        css={styles.BackButton}
        onMouseEnter={() => {
          setButtonSize(["30px", "20px"]);
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setButtonSize(["22px", "12px"]);
          setIsHovered(false);
        }}
        onClick={goToSlide}
        tabIndex={-1}
      >
        <img
          src={BackButtonUpNormal}
          css={[styles.icon, isHovered ? styles.hover : ""]}
          alt="Back Button"
          tabIndex={0}
          aria-label="Back button"
        />
        {/* <img
          src={BackButtonUpHover}
          css={[
            styles.icon,
            styles.hover,
            isHovered ? styles.visible : styles.hidden,
          ]}
          alt="Back Button"
        /> */}
      </button>
    </div>
  );
}
