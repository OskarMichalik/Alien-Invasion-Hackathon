"use client";
import classes from "./Tips.module.css";
import TIPS from "@/store/static/TIPS";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Tips() {
  const [tipNumber, setTipNumber] = useState(0);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);

  function changeNumber(value) {
    if (value === -1 && tipNumber === 0) {
      setTipNumber(TIPS.length - 1);
    } else if (value === 1 && tipNumber === TIPS.length - 1) {
      setTipNumber(0);
    } else {
      setTipNumber((prev) => prev + value);
    }
  }
  return (
    <div className={classes.tipsDiv}>
      <h2>Tips for surviving</h2>
      <div className={classes.tipsContent}>
        <span
          onMouseOver={() => setLeftArrow(true)}
          onMouseOut={() => setLeftArrow(false)}
          onClick={() => changeNumber(-1)}
        >
          {!leftArrow ? (
            <svg
              fill="#000000"
              height="64px"
              width="64px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-33 -33 396.00 396.00"
              xmlSpace="preserve"
              stroke="#000000"
              transform="rotate(0)"
              className={classes.hoverlSvgLeft}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#fffafa"
                strokeWidth="66"
              >
                <path
                  id="XMLID_6_"
                  d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"
                ></path>
              </g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_6_"
                  d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              fill="#ffffff"
              height="64px"
              width="64px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
              stroke="#ffffff"
              className={classes.normalSvgLeft}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_6_"
                  d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"
                ></path>
              </g>
            </svg>
          )}
        </span>
        <div className={classes.text}>
          <AnimatePresence>
            <motion.p
              key={TIPS[tipNumber].id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.25, duration: 0.2 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {TIPS[tipNumber].tip}
            </motion.p>
          </AnimatePresence>
        </div>
        <span
          onMouseOver={() => setRightArrow(true)}
          onMouseOut={() => setRightArrow(false)}
          onClick={() => changeNumber(1)}
        >
          {!rightArrow ? (
            <svg
              fill="#000000"
              height="64px"
              width="64px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-33 -33 396.00 396.00"
              xmlSpace="preserve"
              stroke="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#fffafa"
                strokeWidth="66"
              >
                <path
                  id="XMLID_6_"
                  d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"
                ></path>
              </g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_6_"
                  d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              fill="#ffffff"
              height="64px"
              width="64px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
              stroke="#ffffff"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_6_"
                  d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"
                ></path>
              </g>
            </svg>
          )}
        </span>
      </div>
      <span className={classes.tipLegend}>
        {tipNumber + 1}/{TIPS.length}
      </span>
    </div>
  );
}
/*
 */
