/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useNavigate } from "react-router-dom";
import illustrationBackground from "../../assets/images/Slide8/Rectangle 472.svg";
import germLarge from "../../assets/images/Slide8/Group 400.svg";
import germ1 from "../../assets/images/Slide8/Group 401.svg";
import germ2 from "../../assets/images/Slide8/Group 402.svg";
import germ3 from "../../assets/images/Slide8/Group 403.svg";

export default function Slide8p1() {
  const styles = {
    eightPoint1Container: css({
      position: "relative",
    }),

    slidetext: css({
      width: "339px",
      height: "283px",
      position: "absolute",
      margin: "0",
      padding: "0",
      lineHeight: "22px",
      left: "76px",
      top: "63px",
      zIndex: "5",
    }),

    germLarge: css({
      position: "absolute",
      left: "548px",
      top: "125px",
    }),
    germ1: css({
      position: "absolute",
      left: "450px",
      top: "155px",
    }),
    germ2: css({
      position: "absolute",
      left: "460px",
      top: "252px",
    }),
    germ3: css({
      position: "absolute",
      left: "692px",
      top: "65px",
    }),
    illustrationBg: css({
      position: "absolute",
      left: "478px",
      top: "98px",
    }),
  };

  return (
    <div css={styles.eightPoint1Container}>
      <p css={styles.slidetext}>
        Similarly, all global systems came under siege in 2020 as the COVID-19
        pandemic took hold. The pandemic led to continuity challenges worldwide,
        sparing no country, industry, or organisation. In many countries,
        governments play a critical role in determining an organisation’s
        ability to maintain continuity. On the one hand, governments disrupted
        continuity by instituting health and control measures (e.g. lockdowns,
        vaccination requirements) while supporting organisations and their
        existing value exchange systems by providing economic support through
        tax relief and subsidies.
      </p>
      <img css={styles.illustrationBg} src={illustrationBackground} />
      <img css={styles.germLarge} src={germLarge} />
      <img css={styles.germ1} src={germ1} />
      <img css={styles.germ2} src={germ2} />
      <img css={styles.germ3} src={germ3} />
    </div>
  );
}
