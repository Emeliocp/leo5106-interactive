import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function StateButtonTest() {
const styles = {
    btnStyle: css({
        position: 'absolute',
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        right: '20vw',
        zIndex: '2000'
    })
}

    return(
        <div css={styles.btnStyle}>

        </div>
    )
}