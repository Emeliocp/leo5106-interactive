/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import RobotoBlack from "./assets/fonts/Roboto-Black.ttf";
import RobotoBlackItalic from "./assets/fonts/Roboto-BlackItalic.ttf";
import RobotoBold from "./assets/fonts/Roboto-Bold.ttf";
import RobotoBoldItalic from "./assets/fonts/Roboto-BoldItalic.ttf";
import RobotoItalic from "./assets/fonts/Roboto-Italic.ttf";
import RobotoLight from "./assets/fonts/Roboto-Light.ttf";
import RobotoLightItalic from "./assets/fonts/Roboto-LightItalic.ttf";
import RobotoMedium from "./assets/fonts/Roboto-Medium.ttf";
import RobotoMediumItalic from "./assets/fonts/Roboto-MediumItalic.ttf";
import RobotoRegular from "./assets/fonts/Roboto-Regular.ttf";
import RobotoThin from "./assets/fonts/Roboto-Thin.ttf";
import RobotoThinItalic from "./assets/fonts/Roboto-ThinItalic.ttf";

const GlobalStyles = () => (
  <Global
    styles={css`
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
      }
      @font-face {
        font-family: "Roboto Black";
        src: url(${RobotoBlack}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Black Italic";
        src: url(${RobotoBlackItalic}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Bold";
        src: url(${RobotoBold}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Bold Italic";
        src: url(${RobotoBoldItalic}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Light";
        src: url(${RobotoLight}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Medium";
        src: url(${RobotoMedium}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Italic";
        src: url(${RobotoItalic}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Light Italic";
        src: url(${RobotoLightItalic}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Medium Italic";
        src: url(${RobotoMediumItalic}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Regular";
        src: url(${RobotoRegular}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Thin";
        src: url(${RobotoThin}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto Thin Italic";
        src: url(${RobotoThinItalic}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }

      body {
        font-family: "Roboto", sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
