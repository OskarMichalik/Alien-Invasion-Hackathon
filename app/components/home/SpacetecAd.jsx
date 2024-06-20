"use client";
import { motion } from "framer-motion";
import classes from "./SpacetecAd.module.css";
import Image from "next/image";
import spacetec from "@/public/spacetec.png";

export default function SpacetecAd() {
  return (
    <div className={classes.spacetecAdDiv}>
      <div className={classes.leftDiv}>
        <h2>Need help?</h2>
        <p>
          <b>Spacetec is here for you!</b>
          <br />
          Talk to Spacetec soldiers to find solutions for your difficulties.
        </p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          className="empty"
        >
          Get help
        </motion.button>
      </div>
      <div className={classes.rightDiv}>
        <Image src={spacetec} alt="spacetec" />
      </div>
    </div>
  );
}
