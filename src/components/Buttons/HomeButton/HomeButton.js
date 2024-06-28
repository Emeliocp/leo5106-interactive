/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HomeButton() {

    const styles = {
        HomeButtonContainer: css({
            position: 'relative',
            top: '0px',
            right: '0px',
            zIndex: '999',
        }),
        HomeButton: css({
            padding: '0',
            margin: '0',
            width: '52px',
            height: '52px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
        }),
        icon: css({
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '52px',
            height: '52px',
            transition: 'opacity 0.3 ease',
        }),
        visible: css({
            opacity: '1',
        }),
        hidden: css({
            opacity: '0',
        })
    }

    return(
        <div css={styles.HomeButtonContainer}>
            <button>

            </button>

        </div>
    )
}