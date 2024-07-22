/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useNavigate } from "react-router-dom";
import illustrationBG from "../../assets/images/Slide8.3/IllustrationBG.svg";
import illustrationImg from "../../assets/images/Slide8.3/IllustrationImg.svg";

export default function Slide8p3() {
  const styles = {
    slideTextTop: css({
      position: "absolute",
      left: "269px",
      top: "49px",
      width: "311px",
      textAlign: "center",
      lineHeight: "22px",
    }),
    illustrationBg: css({
      position: "absolute",
      left: "292px",
      top: "149px",
    }),
    illustrationImg: css({
      position: "absolute",
      left: "343px",
      top: "120px",
    }),
    illustrationTextBottom: css({
        position: 'absolute',
        left: '282px',
        top: '249px',
        width: '285px',
        lineHeight: '22px',
        textAlign: 'center'
    })
  };

  return (
    <div css={styles.eightPoint1Container}>
      <p css={styles.slideTextTop}>
        Now that you’ve completed this case study, take some time to reflect:
      </p>
      <img css={styles.illustrationBg} src={illustrationBG} />
      <img css={styles.illustrationImg} src={illustrationImg} />
      <p css={styles.illustrationTextBottom}>
        How might the continuity of your <b>focal enterprise</b> be affected by a
        global crisis such as the Covid-19 pandemic?
      </p>
    </div>
  );
}
