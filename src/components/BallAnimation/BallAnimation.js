/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import LiveClock from "../../Pages/LiveClock/LiveClock";

const style=css`
  position: absolute;
  top: 80px;
  left: 80px;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background-color: #dbdbdb;
  display: flex;
  justify-content: center;
  align-Items: center;
  font-size: 20px;
  color: white;
`;

const BallAnimation = () => {
  return (
      <motion.div
        css={style}
        animate={{
          y: [80, 80, -80, 0],
          x: [-80, -80, 80, 0],
          scale: [1, 1.2, 1, 1.2, 1, 1.2], // increase size at end of animation
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1], // adjust timings for scale property
          loop: Infinity,
          repeatDelay: 1,
          delay: 2,
        }}
      >
          <LiveClock/>
      </motion.div>
  );
};

export default BallAnimation;
