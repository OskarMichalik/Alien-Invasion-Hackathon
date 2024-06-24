"use client";
import classes from "./History.module.css";
import invasion from "@/public/invasion.png";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";

export default function History() {
  const { scrollY } = useScroll();
  const yValue1 = useTransform(
    scrollY,
    [0, 900, 1300, 1900, 2300],
    [0, 0, 1, 1, 0]
  );
  const yValue2 = useTransform(
    scrollY,
    [0, 950, 1350, 1950, 2350],
    [0, 0, 1, 1, 0]
  );

  const [firstStoryOpen, setFirstStoryOpen] = useState(false);
  const [secondStoryOpen, setSecondStoryOpen] = useState(false);

  return (
    <div className={classes.historyDiv}>
      <Image src={invasion} alt="alien invasion" />
      <motion.span className={classes.text} style={{ opacity: yValue1 }}>
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
      <motion.span className={classes.text} style={{ opacity: yValue2 }}>
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
      <div className={classes.mobileDiv}>
        <div className={classes.textMobile}>
          <div
            className={classes.title}
            onClick={() => setFirstStoryOpen((prev) => !prev)}
          >
            <h2 title="HOW IT STARTED">HOW IT STARTED</h2>
            <motion.span animate={{ rotate: firstStoryOpen ? 180 : 0 }}>
              <svg
                fill="#ffffff"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330.002 330.002"
                xmlSpace="preserve"
                transform="rotate(180)"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_105_"
                    d="M324.001,209.25L173.997,96.75c-5.334-4-12.667-4-18,0L6.001,209.25c-6.627,4.971-7.971,14.373-3,21 c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001L164.998,127.5l141.003,105.75c6.629,4.972,16.03,3.627,21-3 C331.972,223.623,330.628,214.221,324.001,209.25z"
                  ></path>
                </g>
              </svg>
            </motion.span>
          </div>
          <AnimatePresence>
            {firstStoryOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                key={"firstStory"}
              >
                <p>
                  The world awoke to an eerie silence. As dawn broke, the sky
                  was dotted with sleek, obsidian ships, hovering menacingly
                  above cities and towns. People gathered, mesmerized and
                  terrified. The ships descended, releasing drones that hummed
                  with an alien frequency.
                </p>
                <br />
                <p>
                  Governments scrambled, sending messages of diplomacy. They
                  targeted military bases, disarming defenses with beams of
                  blinding light. Human technology was no match for their
                  advanced weaponry.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={classes.textMobile}>
          <div
            className={classes.title}
            onClick={() => setSecondStoryOpen((prev) => !prev)}
          >
            <h2 title="HOW IT'S GOING">HOW IT&apos;S GOING</h2>
            <motion.span animate={{ rotate: secondStoryOpen ? 180 : 0 }}>
              <svg
                fill="#ffffff"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330.002 330.002"
                xmlSpace="preserve"
                transform="rotate(180)"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_105_"
                    d="M324.001,209.25L173.997,96.75c-5.334-4-12.667-4-18,0L6.001,209.25c-6.627,4.971-7.971,14.373-3,21 c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001L164.998,127.5l141.003,105.75c6.629,4.972,16.03,3.627,21-3 C331.972,223.623,330.628,214.221,324.001,209.25z"
                  ></path>
                </g>
              </svg>
            </motion.span>
          </div>
          <AnimatePresence>
            {secondStoryOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                key={"secondStory"}
              >
                <p>
                  Two months after the invasion began, Earth had transformed
                  into a battleground of resistance and adaptation. The once
                  bustling cities now lay in ruins, scarred by the relentless
                  attacks of the alien forces. Survivors had scattered into
                  hidden bunkers and makeshift camps, eking out a precarious
                  existence.
                </p>
                <br />
                <p>
                  Amidst the despair, tales of bravery emerged. Stories of
                  daring raids to gather supplies from abandoned warehouses or
                  to rescue trapped civilians inspired a flicker of hope among
                  the beleaguered populace. Leaders emerged, rallying the
                  fractured remnants of humanity with impassioned speeches and
                  strategic plans for resistance.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
