/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import buttonBackground from "../../../assets/images/Slide8/Rectangle 173.svg";
import arrow from "../../../assets/images/Slide8/Arrow.svg";

export default function LargeBackButton() {
  const navigate = useNavigate();

const handleClick = () => {
  navigate("/");
}

  const styles = {
    buttonContainer: css({
      position: "absolute",
      textAlign: "center",
      zIndex: "500",
      left: "328px",
      top: "0px",
      zIndex: '101'
    }),
    btnBackground: css({
      backgroundColor: "#006DA9",
      position: "absolute",
      width: "304px",
      height: "400px",
      borderRadius: '0px 0px 150px 150px',
      cursor: 'pointer'
    }),
    buttonText: css({
        position: 'absolute',
        top: '25px',
        left: '113px',
        color: 'white',
        fontWeight: '300',
        fontSize: '14px'
    }),
    buttonImg: css({
        position: 'absolute',
        top: '20px',
        left: '143px'
    })
  };

  return (
    <div css={styles.buttonContainer} onClick={handleClick}>
      <div css={styles.btnBackground}>
        <img css={styles.buttonImg} src={arrow}/>
        <p css={styles.buttonText}>Back to start</p>
      </div>
    </div>
  );
}
