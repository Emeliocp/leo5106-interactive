/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import FullscreenButton from "../Buttons/FullscreenButton/FullscreenButton";
import LargeBackButton from "../Buttons/LargeBackButton/LargeBackButton";
import slideBackgroundImg from "../../assets/images/Slide8/Rectangle 198.svg";
import Slide8p1 from "./Slide8.1";
import Slide8p2 from "./Slide8.2";
import Slide8p3 from "./Slide8.3";
import HorizontalBackButton from "../HorizontalNav/HorizontalBack";
import HorizontalNextButton from "../HorizontalNav/HorizontalNext";

export default function Slide8({ containerRef }) {
  const nonSlideContent = useRef();
  const slidesContainerRef = useRef();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [<Slide8p1 />, <Slide8p2 />, <Slide8p3 />];

  const nextClicked = () => {
    if (currentSlideIndex < slides.length - 1 && !isAnimating) {
      setIsAnimating(true);
      gsap.to(slidesContainerRef.current.children[currentSlideIndex], {
        x: "-100%",
        duration: 0.5,
      });
      gsap.fromTo(
        slidesContainerRef.current.children[currentSlideIndex + 1],
        { x: "100%" },
        {
          x: "0%",
          duration: 0.5,
          onComplete: () => {
            setCurrentSlideIndex(currentSlideIndex + 1);
            setIsAnimating(false);
          },
        }
      );
    }
  };

  const backClicked = () => {
    if (currentSlideIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      gsap.to(slidesContainerRef.current.children[currentSlideIndex], {
        x: "100%",
        duration: 0.5,
      });
      gsap.fromTo(
        slidesContainerRef.current.children[currentSlideIndex - 1],
        { x: "-100%" },
        {
          x: "0%",
          duration: 0.5,
          onComplete: () => {
            setCurrentSlideIndex(currentSlideIndex - 1);
            setIsAnimating(false);
          },
        }
      );
    }
  };

  const styles = {
    slide8Container: css({
      position: "absolute",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "white",
      zIndex: "102",
    }),
    slideContent: css({
      position: "absolute",
      left: "56px",
      top: "64px",
      border: "1px solid #102F81",
      borderRadius: "3px",
      backgroundColor: "white",
      width: "848px",
      height: "413px",
      zIndex: "103",
      overflow: "hidden",
    }),
    slidesContainer: css({
      position: "relative",
      width: "100%",
      height: "100%",
    }),
    slideBackground: css({
      position: "absolute",
      left: "-90px",
      top: "310px",
      zIndex: "1",
    }),
    backBtn: css({
      position: "absolute",
      left: "18px",
      top: "187px",
      zIndex: '2000'
    }),
    nextBtn: css({
      position: 'absolute',
      left: '794px',
      top: '187px',
      zIndex: '2000'
    })
  };

  return (
    <div css={styles.slide8Container}>
      <div ref={nonSlideContent}>
        <FullscreenButton appRef={containerRef} />
        <LargeBackButton />
      </div>
      <div css={styles.slideContent}>
        {currentSlideIndex > 0 && (
          <div css={styles.backBtn}>
            <HorizontalBackButton onClick={backClicked} />
          </div>
        )}
        {currentSlideIndex < slides.length - 1 && (
          <div css={styles.nextBtn}>
            <HorizontalNextButton onClick={nextClicked} />
          </div>
        )}
        <div css={styles.slidesContainer} ref={slidesContainerRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              css={css({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transform: index === currentSlideIndex ? "translateX(0)" : "translateX(100%)",
              })}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      <img css={styles.slideBackground} src={slideBackgroundImg} />
    </div>
  );
}
