import { motion } from "framer-motion";

export default function MotionWrapper({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  amount = 0.3,
  once = true,
}) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay }}
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
