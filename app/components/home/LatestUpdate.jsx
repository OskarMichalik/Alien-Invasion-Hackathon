"use client";
import classes from "./LatestUpdate.module.css";
import Image from "next/image";
import soldier from "@/public/soldier.png";
import { motion } from "framer-motion";

export default function LatestUpdate() {
  return (
    <div className={classes.latestUpdateDiv}>
      <div className={classes.leftDiv}>
        <h2>Latest Update:</h2>
        <p>
          <b>The Earth is still standing!</b>
          <br />
          Go fight and do your part, help in the safezones.
        </p>
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
          Safezones
        </motion.button>
      </div>
      <div className={classes.rightDiv}>
        <Image src={soldier} alt="soldier" />
      </div>
    </div>
  );
}
