import classes from "./Response.module.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function ResponseBox() {
  return (
    <AnimatePresence>
      <motion.div
        className={classes.responseBoxDiv}
        initial={{ opacity: 0, backgroundColor: "#00000000" }}
        animate={{ opacity: 1, backgroundColor: "#00000088" }}
      >
        <p>&gt; &nbsp; test</p>
      </motion.div>
    </AnimatePresence>
  );
}
