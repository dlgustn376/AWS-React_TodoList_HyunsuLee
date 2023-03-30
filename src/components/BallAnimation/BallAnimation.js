import { motion } from "framer-motion";
import LiveClock from "../../Pages/LiveClock/LiveClock";

const BallAnimation = () => {
  return (
      <motion.div
        style={{
          width: 240,
          height: 240,
          borderRadius: "50%",
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
          position: "absolute",
          top: 80,
          left: 80,
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
        animate={{
          y: [-20,50, -20, 0],
          x: [0, 100, -100, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.33, 0.66, 1],
          loop: Infinity,
          repeatDelay: 1,
          delay: 2, // Add a delay of 2 seconds before displaying text
        }}
      >
        <motion.div animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <LiveClock/>
        </motion.div>
      </motion.div>
  );
};

export default BallAnimation;
