/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import normalState from "../../assets/images/HorizontalBackNormal.svg";
import hoverState from "../../assets/images/HorizontalBackHover.svg";
import disabledState from "../../assets/images/HorizontalBackDisabled.svg";

export default function HorizontalBackButton({ onClick }) {
  const btnIconRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const styles = {
    backButton: css({
      padding: "0",
      margin: "0",
      width: "38px",
      height: "38px",
      background: "none",
      border: "none",
      outline: "none",
      cursor: "pointer",
    }),
    icon: css({
        position: 'absolute',
        top: '0px',
        left: '0px',
      transition: "all 0.3s ease",
    }),
    visible: css({
      opacity: "1",
    }),
    hidden: css({
      opacity: "0",
    }),
  };

  return (
    <div css={styles.buttonContainer}>
      <button
        css={styles.backButton}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <img
          css={[styles.icon, isHovered ? styles.hidden : styles.visible]}
          src={normalState}
          alt=""
        />
        <img
          css={[styles.icon, isHovered ? styles.visible : styles.hidden]}
          src={hoverState}
          alt=""
        />
      </button>
    </div>
  );
}
