/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useNavigate } from "react-router-dom";
import illustrationBG from "../../assets/images/Slide8.2/IllustrationBG.png";
import illustrationPlanet from "../../assets/images/Slide8.2/IllustrationPlanet.png";
import boxNode from "../../assets/images/Slide8.2/BoxNode.svg";
import laptopNode from "../../assets/images/Slide8.2/LaptopNode.svg";
import planeNode from "../../assets/images/Slide8.2/PlaneNode.svg";
import gpsMarkerNode from "../../assets/images/Slide8.2/GpsMarkerNode.svg";
import emptyNode from "../../assets/images/Slide8.2/EmptyNode.svg";
import p1_1 from "../../assets/images/Slide8.2/P1.1.svg";
import p1_2 from "../../assets/images/Slide8.2/P1.2.svg";
import p2_1 from "../../assets/images/Slide8.2/P2.1.svg";
import p2_2 from "../../assets/images/Slide8.2/P2.2.svg";
import p3_1 from "../../assets/images/Slide8.2/P3.1.svg";
import p3_2 from "../../assets/images/Slide8.2/P3.2.svg";
import p4_1 from "../../assets/images/Slide8.2/P4.1.svg";
import p4_2 from "../../assets/images/Slide8.2/P4.2.svg";
import p4_3 from "../../assets/images/Slide8.2/P4.3.svg";
import p5_1 from "../../assets/images/Slide8.2/P5.1.svg";
import p5_2 from "../../assets/images/Slide8.2/P5.2.svg";
import p6_1 from "../../assets/images/Slide8.2/P6.1.svg";
import p6_2 from "../../assets/images/Slide8.2/P6.2.svg";
import p7_1 from "../../assets/images/Slide8.2/P7.1.svg";
import p7_2 from "../../assets/images/Slide8.2/P7.2.svg";
import p8_1 from "../../assets/images/Slide8.2/P8.1.svg";
import p8_2 from "../../assets/images/Slide8.2/P8.2.svg";

export default function Slide8p2() {
  const styles = {
    eightPoint2Container: css({
      position: "relative",
    }),
    slideText: css({
      width: "338px",
      height: "217px",
      position: "absolute",
      margin: "0",
      padding: "0",
      lineHeight: "22px",
      left: '76px',
      top: "96px"
    }),
    illustrationBG: css({
        position: 'absolute',
        left: '478px',
        top: '97px'
    }),
    boxNode: css({
        position: 'absolute',
        left: '462px',
        top: '155px'
    }),
    laptopNode: css({
      position: 'absolute',
      left: '525px',
      top: '99px'
    }),
    planeNode: css({
      position: 'absolute',
      left: '643px',
      top: '99px'
    }),
    gpsMarkerNode: css({
      position: 'absolute',
      left: '704px',
      top: '172px'
    }),
    emptyNode1: css({
      position: 'absolute',
      left: '495px',
      top: '124px'
    }),
    emptyNode2: css({
      position: 'absolute',
      left: '524px',
      top: '158px'
    }),
    emptyNode3: css({
      position: 'absolute',
      left: '600px',
      top: '122px'
    }),
    emptyNode4: css({
      position: 'absolute',
      left: '667px',
      top: '160px'
    }),
    emptyNode5: css({
      position: 'absolute',
      left: '701px',
      top: '137px'
    }),
    path1_1: css({
      position: 'absolute',
      left: '502px',
      top: '172px'
    }),
    path1_2: css({
      position: 'absolute',
      left: '514px',
      top: '170px'
    }),
    path2_1: css({
      position: 'absolute',
      left: '512px',
      top: '142px'
    }),
    path2_2: css({
      position: 'absolute',
      left: '520px',
      top: '152px'
    }),
    path3_1: css({
      position: 'absolute',
      left: '535px',
      top: '149px'
    }),
    path3_2: css({
      position: 'absolute',
      left: '538px',
      top: '139px'
    }),
    path4_1: css({
      position: 'absolute',
      left: '566px',
      top: '121px'
    }),
    path4_2: css({
      position: 'absolute',
      left: '577px',
      top: '124px'
    }),
    path4_3: css({
      position: 'absolute',
      left: '590px',
      top: '127px'
    }),
    path5_1: css({
      position: 'absolute',
      left: '622px',
      top: '126px'
    }),
    path5_2: css({
      position: 'absolute',
      left: '633px',
      top: '123px'
    }),
    path6_1: css({
      position: 'absolute',
      left: '680px',
      top: '130px'
    }),
    path6_2: css({
      position: 'absolute',
      left: '691px',
      top: '136px'
    }),
    path7_1: css({
      position: 'absolute',
      left: '667px',
      top: '140px'
    }),
    path7_2: css({
      position: 'absolute',
      left: '670px',
      top: '150px'
    }),
    path8_1: css({
      position: 'absolute',
      left: '686px',
      top: '174px'
    }),
    path8_2: css({
      position: 'absolute',
      left: '697px',
      top: '179px'
    }),
    slidePlanet: css({
      position: 'absolute',
      left: '545px',
      top: '125px'
    })
  };

  return (
    <div css={StyleSheet.eightPoint2Container}>
      <p css={styles.slideText}>
        The crisis has driven big and small organisations to operate in new ways
        to face supply chain interruptions, workforce health risks, employee
        expectations of flexible work arrangements, and shifts in customer
        demand. Viewed as a global multi-faceted disruption, the global pandemic
        demonstrated the importance of governments and organisations developing
        capabilities to cope with critical events to ensure continuity.
      </p>
      <img css={styles.illustrationBG} src={illustrationBG}/>
      <img css={styles.slidePlanet} src={illustrationPlanet}/>
      <img css={styles.boxNode} src={boxNode}/>
      <img css={styles.laptopNode} src={laptopNode}/>
      <img css={styles.planeNode} src={planeNode}/>
      <img css={styles.gpsMarkerNode} src={gpsMarkerNode}/>
      <img css={styles.emptyNode1} src={emptyNode}/>
      <img css={styles.emptyNode2} src={emptyNode}/>
      <img css={styles.emptyNode3} src={emptyNode}/>
      <img css={styles.emptyNode4} src={emptyNode}/>
      <img css={styles.emptyNode5} src={emptyNode}/>
      <img css={styles.path1_1} src={p1_1}/>
      <img css={styles.path1_2} src={p1_2}/>
      <img css={styles.path2_1} src={p2_1}/>
      <img css={styles.path2_2} src={p2_2}/>
      <img css={styles.path3_1} src={p3_1}/>
      <img css={styles.path3_2} src={p3_2}/>
      <img css={styles.path4_1} src={p4_1}/>
      <img css={styles.path4_2} src={p4_2}/>
      <img css={styles.path4_3} src={p4_3}/>
      <img css={styles.path5_1} src={p5_1}/>
      <img css={styles.path5_2} src={p5_2}/>
      <img css={styles.path6_1} src={p6_1}/>
      <img css={styles.path6_2} src={p6_2}/>
      <img css={styles.path7_1} src={p7_1}/>
      <img css={styles.path7_2} src={p7_2}/>
      <img css={styles.path8_1} src={p8_1}/>
      <img css={styles.path8_2} src={p8_2}/>
    </div>
  );
}
