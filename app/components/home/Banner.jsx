"use client";
import classes from "./Banner.module.css";
import bannerImage from "@/public/banner-2880.png";
import bannerImageMobile from "@/public/banner-mobile.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export default function Banner() {
  const [displayWidth, setDisplayWidth] = useState(null);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setDisplayWidth(window.innerWidth);
    };

    updateWindowDimensions();

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const isMobile = displayWidth <= 600;

  return (
    <motion.div
      className={classes.bannerDiv}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image
        src={isMobile ? bannerImageMobile : bannerImage}
        alt="UFO"
        priority
      />
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
