/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import FullscreenIconNormal from "../../../assets/images/icons/FullscreenBTN-Normal.svg";
import FullscreenIconHover from "../../../assets/images/icons/FullscreenBTN-Hover.svg";

const FullscreenButton = ({ appRef }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    FullscreenButtonContainer: css({
      position: "relative",
      top: "0px",
      left: "0px",
      zIndex: "100", // Ensure it's above other content
    }),
    FullscreenButton: css({
      padding: "0",
      margin: "0",
      width: "40px",
      height: "40px",
      background: "none",
      border: "none",
      cursor: "pointer",
      outline: "none",
      "&:focus" : {
        outline: "2px solid #3275D0",
        borderRadius: '1px'
      }
    }),
    icon: css({
      position: 'absolute',
      top: '-5px',
      left: '-5px',
      width: "52px",
      height: "52px",
      transition: "opacity 0.3s ease",
    }),
    visible: css({
      opacity: "1",
    }),
    hidden: css({
      opacity: "0",
    }),
  };

  const handleFullscreen = () => {
    if (appRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        appRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div css={styles.FullscreenButtonContainer}>
      <button
        css={styles.FullscreenButton}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleFullscreen}
        aria-label={`Toggle Fullscreen`}
      >
        <img
          src={FullscreenIconNormal}
          css={[styles.icon, isHovered ? styles.hidden : styles.visible]}
          alt="Fullscreen Icon Normal"
        />
        <img
          src={FullscreenIconHover}
          css={[styles.icon, isHovered ? styles.visible : styles.hidden]}
          alt="Fullscreen Icon Hover"
        />
      </button>
    </div>
  );
};

export default FullscreenButton;
