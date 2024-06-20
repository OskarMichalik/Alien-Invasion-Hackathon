"use client";
import classes from "./History.module.css";
import invasion from "@/public/invasion.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export default function History() {
  const { scrollY } = useScroll();
  const yValue1 = useTransform(
    scrollY,
    [0, 1000, 1200, 1600, 1900],
    [0, 0, 1, 1, 0]
  );
  const yValue2 = useTransform(
    scrollY,
    [0, 1050, 1250, 1650, 1950],
    [0, 0, 1, 1, 0]
  );

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

  const isMobile = displayWidth <= 1500;

  return (
    <div className={classes.historyDiv}>
      <Image src={invasion} alt="alien invasion" />
      <motion.span
        className={classes.text}
        style={{ opacity: isMobile ? 1 : yValue1 }}
      >
        <h2 title="HOW IT STARTED">HOW IT STARTED</h2>
        <p>
          The world awoke to an eerie silence. As dawn broke, the sky was dotted
          with sleek, obsidian ships, hovering menacingly above cities and
          towns. People gathered, mesmerized and terrified. The ships descended,
          releasing drones that hummed with an alien frequency.
        </p>
        <p>
          Governments scrambled, sending messages of diplomacy. They targeted
          military bases, disarming defenses with beams of blinding light. Human
          technology was no match for their advanced weaponry.
        </p>
      </motion.span>
      <motion.span
        className={classes.text}
        style={{ opacity: isMobile ? 1 : yValue2 }}
      >
        <h2 title="HOW IT'S GOING">HOW IT&apos;S GOING</h2>
        <p>
          Two months after the invasion began, Earth had transformed into a
          battleground of resistance and adaptation. The once bustling cities
          now lay in ruins, scarred by the relentless attacks of the alien
          forces. Survivors had scattered into hidden bunkers and makeshift
          camps, eking out a precarious existence.
        </p>
        <p>
          Amidst the despair, tales of bravery emerged. Stories of daring raids
          to gather supplies from abandoned warehouses or to rescue trapped
          civilians inspired a flicker of hope among the beleaguered populace.
          Leaders emerged, rallying the fractured remnants of humanity with
          impassioned speeches and strategic plans for resistance.
        </p>
      </motion.span>
    </div>
  );
}
