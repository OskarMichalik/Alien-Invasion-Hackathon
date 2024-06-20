"use client";
import classes from "./Banner.module.css";
import bannerImage from "@/public/banner-1920.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.div className={classes.bannerDiv}>
      <Image src={bannerImage} alt="UFO" />
      <span className={classes.text}>
        <motion.p
          whileHover={{
            scale: 1.2,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        >
          I WANT TO
          <br />
          SURVIVE
        </motion.p>
      </span>
    </motion.div>
  );
}
