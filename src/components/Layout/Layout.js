// src/components/Layout.js
import React, { useEffect, useRef } from "react";
import { css } from "@emotion/react";

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && contentRef.current) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const scale = Math.min(viewportWidth / 960, viewportHeight / 540);

        // Adjust container size based on scale
        containerRef.current.style.width = `${960 * scale}px`;
        containerRef.current.style.height = `${540 * scale}px`;

        // Apply scaling and center content
        contentRef.current.style.transform = `scale(${scale})`;
        contentRef.current.style.transformOrigin = "top left"; // Ensure scaling origin is correct
        contentRef.current.style.width = "960px";
        contentRef.current.style.height = "540px";

        // Center the content within the scaled container
        const scaledWidth = 960 * scale;
        const scaledHeight = 540 * scale;
        const leftOffset = (viewportWidth - scaledWidth) / 2;
        const topOffset = (viewportHeight - scaledHeight) / 2;
        contentRef.current.style.left = `${leftOffset}px`;
        contentRef.current.style.top = `${topOffset}px`;
      }
    };

    // Handle initial resize and listen for resize events
    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup resize listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    InteractiveContainer: css({
        position: "relative",
        overflow: 'hidden',
        border: 'none',
        margin: 'auto',
        backgroundColor: 'white'
    }),
    InteractiveContent: css({
        position: 'absolute',
        top: '0',
        left: '0'
    }),
};

  return (
    <div css={styles.InteractiveContainer} ref={containerRef}>
      <div css={styles.InteractiveContent} ref={contentRef}>
        {React.cloneElement(children, { containerRef })}
      </div>
    </div>
  );
};

export default Layout;
